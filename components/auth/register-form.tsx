'use client'

import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSucess } from "../form-sucess";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";


export const RegisterForm = () => {

    const [isPendding, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    });

    const onSubmit  = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
         register(values)   
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })
        
    }

  return (
    <CardWrapper
          headerLabel="Create an account"
          backButtonLabel="Already have an account?"
          backButtonHref="/auth/register"
          showSocial>


        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            >
                <div className="space-y-4">
                <FormField
                        control={form.control}
                        name="name"
                        render ={({ field }) =>{
                            return <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPendding}
                                        placeholder="Nanda Araújo"
                                        type="string" />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>;
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render ={({ field }) =>{
                            return <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPendding}
                                        placeholder="nandaaraujo@example.com"
                                        type="email" />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>;
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render ={({ field }) =>{
                            return <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPendding}
                                        placeholder="******"
                                        type="password" />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>;
                        }}
                    />
                </div>
                <FormError message={error}/>
                <FormSucess message={success}/>
                <Button 
                    type="submit"
                    className="w-full"
                >
                   Create an account
                </Button>
            </form>
        </Form>      
    </CardWrapper>

    
  )
}
