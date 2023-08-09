import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters." })
      .transform((name) =>
        name
          .trim()
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
      ),
    email: z.string().email({ message: "Invalid email." }).toLowerCase(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmpassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Please, confirm the password.",
    path: ["confirmpassword"],
  });
