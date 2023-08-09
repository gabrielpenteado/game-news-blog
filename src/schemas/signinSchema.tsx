import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email." }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});
