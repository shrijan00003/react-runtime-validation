import { z } from "zod";

export const DataSchema = z
  .object({
    id: z.number().or(z.string()).default(""),
    name: z.string().default("")
  })
  .array();

export type Data = z.infer<typeof DataSchema>;

export const dataParser = (data: Data): Data => {
  try {
    const parsedData = DataSchema.parse(data);
    console.log(parsedData);
    return parsedData;
  } catch (error) {
    console.log("Error", error);
    return data;
  }
};
