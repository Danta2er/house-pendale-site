# Magic Systems Tech Brief

## Page

- Page name: Magic Systems
- Based on contract: `docs/briefs/pages/magic-systems/page-contract.md`

## Functional objective

- What this page must do: Orient visitors to the three foundational systems and route cleanly to future individual system pages.
- What this page must support later: More detailed system entries, companion essays, glossary-style support, and optional downstream-practice pages without changing the top-level taxonomy.

## Route and template

- Route: `/magic-systems/`
- Template family: Collection
- Rendering model: Static-first collection page generated from structured system content.

## Content model

- Required fields: Name, slug, short summary, display order, related book(s), optional symbol or image.
- Optional fields: Companion-note link, downstream-practice note, teaser quote.
- Relationships to other content: Each system should route to a detail page and optionally link to relevant book or journal material.

## Components

- Required components: Systems hero, system card list, related-book bridge, footer.
- Optional components: Diagram or relationship strip, downstream-practice callout, glossary teaser.
- Shared components to reuse: Header / drawer, cards, CTA buttons, social footer, metadata helper.

## Behavior

- Navigation behavior: Clear current-route state and clean routing into individual systems later.
- Media behavior: If imagery or symbolic assets are used, they should support clarity rather than muddy it.
- Motion / reveal behavior: Use modest reveal only; the systems need to read cleanly at a glance.
- Responsive behavior: Summaries and CTA paths must stay legible on mobile without collapsing into a wall of occult oatmeal.

## SEO / metadata

- Meta fields needed: Title, description, canonical URL, Open Graph title / description / image, Twitter card data.
- Canonical behavior: Single canonical URL at `/magic-systems/`.
- Open Graph / Twitter requirements: Use a stable branded systems image or a clean atmospheric alternative.
- Structured data requirements: `CollectionPage`; system detail pages can carry richer metadata later where it actually helps.

## Channel integration

- Amazon / retailer links: Secondary support only through related-book bridges.
- Substack links: Optional companion-note or deep-dive paths.
- Social links: Footer-level active set only.
- Form behavior: None required on v1.

## Extensibility

- Future modules this page should tolerate: Individual system pages, glossary links, diagrams, house-room ties, downstream-practice entries.
- Adjacent content types to anticipate: Books, journal notes, House pages, character ties, optional `How Collaring Works`.
- Constraints to avoid baking in: Deprecated taxonomy, one-paragraph-only assumptions, hard-coded refusal to add secondary practice pages later.

## Acceptance notes

- What must be easy to edit later: System summaries, order, related-book links, companion links, downstream-practice callouts.
- What should be componentized: System card, related-book bridge, optional callout module, metadata helper.
- Risks or edge cases: Accidentally reintroducing deprecated terms or pinning fluid canon too hard in the public architecture.
