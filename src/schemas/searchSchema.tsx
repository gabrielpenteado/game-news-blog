import { z } from "zod";

export const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Write some title to search for..." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Search is invalid for spaces.",
    }),
});
