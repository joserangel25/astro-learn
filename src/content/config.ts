import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    // author: z.string(), -> sin referencia

    author: reference("author"),

  })
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    name: z.string(),
    avatar: image()
  })
})

export const collecctions = {
  blog: blogCollection,
  author: authorCollection
}