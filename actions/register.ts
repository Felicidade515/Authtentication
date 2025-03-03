import { RegisterSchema } from "@/schemas";
import * as z from "zod";


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFilds = RegisterSchema.safeParse(values);

    if (!validatedFilds.success) {
        return {error: "Invalid Fields!"}
    };

    return { success: "Email send"}
}