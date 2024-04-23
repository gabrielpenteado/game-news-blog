import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Write a title." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Title can't be only blank spaces.",
    }),
  banner: z
    .string()
    .nonempty({ message: "Write the banner link" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Banner link can't be only blank spaces",
    }),
  text: z
    .string()
    .nonempty({ message: "Write some text" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Text can't be only blank spaces",
    }),
});
