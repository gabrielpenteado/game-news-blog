import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().email({ message: "Invalid email." }).toLowerCase(),
});
