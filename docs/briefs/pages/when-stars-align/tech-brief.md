# When Stars Align Tech Brief

## Page

- Page name: When Stars Align
- Based on contract: `docs/briefs/pages/when-stars-align/page-contract.md`

## Functional objective

- What this page must do: Sell the current lead book with clear metadata, clean buy actions, and room for emotionally rich supporting sections.
- What this page must support later: Reviews, edition variants, excerpts, series navigation, and companion links without restructuring the template.

## Route and template

- Route: `/books/when-stars-align/`
- Template family: Chamber
- Rendering model: Static-first book detail page generated from structured book content with optional interactive modules layered lightly.

## Content model

- Required fields: Title, subtitle or hook, description, cover, author, buy links, heat note, content-positioning summary, related links.
- Optional fields: Quotes, edition formats, preview excerpt, companion-note link, related characters, related systems.
- Relationships to other content: Book should link to characters, systems, and companion notes without depending on them to make the page make sense.

## Components

- Required components: Book hero, cover block, primary CTA rail, premise section, reading-experience section, heat note module, footer.
- Optional components: Quote slider, format badges, excerpt trigger, related-content cards.
- Shared components to reuse: Header / drawer, CTA buttons, metadata helper, cards, social footer.

## Behavior

- Navigation behavior: Stable path back to the Books collection and outward to adjacent world pages.
- Media behavior: Cover and supporting imagery should remain crisp and prioritized.
- Motion / reveal behavior: Limited reveal is fine; do not make the sales page feel like it needs an orchestra pit to function.
- Responsive behavior: Buy actions must stay obvious and easy on mobile.

## SEO / metadata

- Meta fields needed: Title, description, canonical URL, Open Graph title / description / image, Twitter card data.
- Canonical behavior: Single canonical URL at `/books/when-stars-align/`.
- Open Graph / Twitter requirements: Lead with the cover or a dedicated share image plus a concise hook.
- Structured data requirements: `Book` schema with author, title, image, description, offers or retailer links where appropriate.

## Channel integration

- Amazon / retailer links: Primary CTA path.
- Substack links: Optional companion-note path.
- Social links: Footer-level support only.
- Form behavior: None required on v1.

## Extensibility

- Future modules this page should tolerate: Reviews, awards, series navigation, alternate editions, gated excerpt handling, related posts.
- Adjacent content types to anticipate: Characters, systems, journal notes, future series entries.
- Constraints to avoid baking in: One-retailer assumptions, no-schema book pages, fragile layout dependence on a single cover treatment.

## Acceptance notes

- What must be easy to edit later: Buy links, cover image, heat note, hook copy, companion links.
- What should be componentized: Book hero, CTA rail, content-note block, related-content cards, metadata helper.
- Risks or edge cases: Overselling the book through vague mood alone, or compensating by dumping too much canon and turning the page into a lecture hall with thigh-high boots.
