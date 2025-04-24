import z from 'zod';

const TeamSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
});
export type Team = z.infer<typeof TeamSchema>;
