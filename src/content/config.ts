import { defineCollection, z } from "astro:content";

const metaSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogImage: z.string().optional(),
});

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(["primary", "secondary", "tertiary"]).default("primary"),
  external: z.boolean().default(false),
  futureDoor: z.boolean().default(false),
  note: z.string().optional(),
});

const sectionSchema = z.object({
  id: z.string(),
  eyebrow: z.string().optional(),
  title: z.string(),
  body: z.string(),
  microcopy: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  ctas: z.array(ctaSchema).optional(),
});

const pages = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    pageFamily: z.enum(["threshold", "collection"]),
    meta: metaSchema,
    hero: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      support: z.string(),
      ctas: z.array(ctaSchema),
      media: z
        .object({
          src: z.string(),
          alt: z.string(),
          kind: z.enum(["cover", "portrait", "atmosphere", "artifact"]).default("atmosphere"),
        })
        .optional(),
    }),
    sections: z.array(sectionSchema),
    close: z
      .object({
        title: z.string().optional(),
        body: z.string(),
        ctas: z.array(ctaSchema),
      })
      .optional(),
  }),
});

const books = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    shortTitle: z.string(),
    status: z.string(),
    route: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    meta: metaSchema,
    hero: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      support: z.string(),
      ctas: z.array(ctaSchema),
    }),
    premise: sectionSchema,
    experience: sectionSchema,
    heatNote: z.object({
      title: z.string(),
      body: z.string(),
      microcopy: z.string().optional(),
      ctas: z.array(ctaSchema),
    }),
    companion: sectionSchema,
    relatedCharacterIds: z.array(z.string()),
    relatedSystemIds: z.array(z.string()),
  }),
});

const characters = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    role: z.string(),
    hook: z.string(),
    microcopy: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    relatedBookSlug: z.string(),
    order: z.number(),
  }),
});

const systems = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    microcopy: z.string(),
    summary: z.string(),
    relatedBookSlug: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  pages,
  books,
  characters,
  systems,
};
