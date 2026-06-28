import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    categoria: z.enum(['Notarial', 'Familia', 'Laboral', 'Penal', 'Voluntaria', 'Municipal']),
    fecha: z.coerce.date(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { blog };
