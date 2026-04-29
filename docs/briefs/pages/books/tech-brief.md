# Books Tech Brief

## Page

- Page name: Books
- Based on contract: `docs/briefs/pages/books/page-contract.md`

## Functional objective

- What this page must do: Present the catalog cleanly, feature the current entry book, and scale from one book to many without redesigning the page family.
- What this page must support later: Multiple titles, release states, alternate series grouping, and future reading-order helpers.

## Route and template

- Route: `/books/`
- Template family: Collection
- Rendering model: Static-first collection page generated from structured book content.

## Content model

- Required fields: Collection intro, featured book reference, ordered list of books, cover image, short hook, release state, primary CTA target.
- Optional fields: Series label, reading-order note, preorder status, companion-note link, signed-edition flag.
- Relationships to other content: Each book card should resolve to an individual book page; optional links out to characters and magic-system pages can be added later.

## Components

- Required components: Collection hero, featured-book module, book card list, CTA rail, footer.
- Optional components: Reading-order note, release-state chips, future-title teaser cards.
- Shared components to reuse: Header / drawer, CTA buttons, card pattern, social footer, metadata helper.

## Behavior

- Navigation behavior: Stable access to the larger site with the books route clearly active.
- Media behavior: Covers should load cleanly and remain visually consistent across future additions.
- Motion / reveal behavior: Mild reveal is fine; the shelf must still read clearly without choreography doing cartwheels.
- Responsive behavior: The featured book and future grid must remain legible and scannable on mobile.

## SEO / metadata

- Meta fields needed: Title, description, canonical URL, Open Graph title / description / image, Twitter card data.
- Canonical behavior: Single canonical collection URL at `/books/`.
- Open Graph / Twitter requirements: Share imagery should privilege the current lead book or a clean site-branded shelf image.
- Structured data requirements: `CollectionPage` and `ItemList`; book entries should point to pages capable of `Book` schema.

## Channel integration

- Amazon / retailer links: Support per-book outbound retailer actions.
- Substack links: Optional companion-note links or a single collection-level bridge.
- Social links: Footer-level active set only.
- Form behavior: None required on v1.

## Extensibility

- Future modules this page should tolerate: Reading-order explainer, series split, preorder spotlight, release countdown, direct-sales hook.
- Adjacent content types to anticipate: Books, series, companions, extras, journal notes tied to specific titles.
- Constraints to avoid baking in: Single-book layout assumptions, one-cover aspect-ratio assumptions, hard-coded retailer destinations, brittle manual ordering.

## Acceptance notes

- What must be easy to edit later: Book order, featured title, CTA destinations, release-state labels, intro language.
- What should be componentized: Featured-book module, book card, metadata helper, release chip, CTA rail.
- Risks or edge cases: A page built around one book pretending it is a general system, or a future catalog getting dumped into the page with no hierarchy.
