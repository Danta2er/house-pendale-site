# Characters Tech Brief

## Page

- Page name: Characters
- Based on contract: `docs/briefs/pages/characters/page-contract.md`

## Functional objective

- What this page must do: Present the main cast cleanly, route to future individual character pages, and stay scalable as more people enter the site.
- What this page must support later: More characters, book-based grouping, featured highlights, and richer related-content links.

## Route and template

- Route: `/characters/`
- Template family: Collection
- Rendering model: Static-first collection page generated from structured character content.

## Content model

- Required fields: Name, slug, image, short hook, related book(s), display order.
- Optional fields: Role tag, House association, teaser quote, Substack companion link.
- Relationships to other content: Character cards should connect cleanly to book pages and later to dedicated character detail pages.

## Components

- Required components: Character collection hero, card grid, related-book bridge, footer.
- Optional components: Featured character panel, grouped subsections by book or role, companion-note callout.
- Shared components to reuse: Header / drawer, cards, CTA buttons, social footer, metadata helper.

## Behavior

- Navigation behavior: Current route active and obvious; individual character destinations should be easy to add later.
- Media behavior: Character imagery should remain consistent enough to feel intentional, even if art sources vary over time.
- Motion / reveal behavior: Light reveal is fine; the grid must still scan instantly.
- Responsive behavior: Cards must remain clear, legible, and tappable on mobile without turning into a tomb of cropped foreheads.

## SEO / metadata

- Meta fields needed: Title, description, canonical URL, Open Graph title / description / image, Twitter card data.
- Canonical behavior: Single canonical URL at `/characters/`.
- Open Graph / Twitter requirements: Use either a cast montage or a stable branded character image.
- Structured data requirements: `CollectionPage`; consider limited person-style metadata for detail pages later if it helps, not because schema made sad puppy eyes at us.

## Channel integration

- Amazon / retailer links: Secondary support through related-book actions.
- Substack links: Optional companion-note path per character or collection.
- Social links: Footer-level active set only.
- Form behavior: None required on v1.

## Extensibility

- Future modules this page should tolerate: New character cards, filters, book groupings, featured spotlight rotation, relationship hints.
- Adjacent content types to anticipate: Character pages, books, journal notes, house-room ties, system ties.
- Constraints to avoid baking in: Three-card-only layouts, mixed-content cards that confuse House / author / character roles, fixed roster assumptions.

## Acceptance notes

- What must be easy to edit later: Roster order, imagery, short hooks, related-book links, addition of new characters.
- What should be componentized: Character card, grid, featured spotlight, related-book bridge, metadata helper.
- Risks or edge cases: Repeating the current category drift where the page forgets it is about characters and starts flirting with unrelated concepts.
