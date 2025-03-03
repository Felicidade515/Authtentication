import { LoginSchema } from "@/schemas";
import * as z from "zod";


export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFilds = LoginSchema.safeParse(values);

    if (!validatedFilds.success) {
        return {error: "Invalid Fields!"}
    };

    return { success: "Email send"}
}