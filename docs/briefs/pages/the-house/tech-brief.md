# The House Tech Brief

## Page

- Page name: The House
- Based on contract: `docs/briefs/pages/the-house/page-contract.md`

## Functional objective

- What this page must do: Fulfill the `Enter the House` promise from the homepage, define the House as a world-entry hub, and route visitors cleanly into `Characters`, `Magic Systems`, and the current book path.
- What this page must support later: Future room or chamber pages, deeper House modules, optional journal bridges, and eventual richer world navigation without reworking the base page logic.

## Route and template

- Route: `/house/`
- Template family: Threshold
- Rendering model: Static-first page with shared threshold components and targeted client-side interaction for motion and navigation only.

## Content model

- Required fields: Hero heading, hero support, primary CTA, secondary CTA, House-definition section, route modules for people and systems, closing CTA rail, metadata fields.
- Optional fields: Chamber teaser cards, room teaser microcopy, featured interior image set, future-journal bridge, optional `Read the Notes` support CTA.
- Relationships to other content: Must connect directly to `Characters`, `Magic Systems`, and `When Stars Align`; should be future-safe for `house-pages`, `journal`, and room-level child routes.

## Components

- Required components: Shared header, drawer nav, hero, route modules or feature splits, CTA rail, footer.
- Optional components: Chamber teaser grid, symbolic map or wayfinding block, layered atmospheric media panel.
- Shared components to reuse: Header / drawer, CTA components, feature or split-section modules, social/footer system, metadata helper.

## Behavior

- Navigation behavior: `Enter the House` from Home should route here. This page should in turn expose clear routes to `Characters` and `Magic Systems` without becoming a second homepage.
- Media behavior: Support at least one strong House atmosphere image and optional supplementary interior imagery without creating layout instability.
- Motion / reveal behavior: Controlled reveal-on-scroll and subtle state changes are welcome. Do not turn the House page into a haunted PowerPoint.
- Responsive behavior: Route choices must remain obvious and meaningful on mobile. The page should still feel like an interior threshold rather than a stack of unrelated boxes.

## SEO / metadata

- Meta fields needed: Title, description, canonical path, Open Graph title / description / image, Twitter card fields.
- Canonical behavior: One canonical at `/house/`, with no alternate alias pretending to be the same page in a fake moustache.
- Open Graph / Twitter requirements: House-specific share image or atmospheric fallback distinct enough from the homepage and book page.
- Structured data requirements: Start with `CollectionPage`; richer item-level schema can wait for future room or chamber pages.

## Channel integration

- Amazon / retailer links: Optional supporting route back to `When Stars Align`; do not foreground retailer logic on this page.
- Substack links: Optional support module for deeper House notes, not the page’s main heartbeat.
- Social links: Shared global footer only unless the final design wants a subtle lower-page `Follow the House` support gesture.
- Form behavior: None required for v1.

## Extensibility

- Future modules this page should tolerate: Room previews, featured chamber, glossary callout, journal bridge, `How Collaring Works` bridge, optional seasonal or release-linked House note.
- Adjacent content types to anticipate: `house-pages`, `journal`, `world-notes`, `characters`, `systems`, `books`.
- Constraints to avoid baking in: A fixed number of rooms, hard-coded route labels that assume only one future expansion path, or a layout that collapses the House into just another collection page.

## Acceptance notes

- What must be easy to edit later: CTA destinations, route modules, room teasers, metadata, and any future chamber signals.
- What should be componentized: Hero, route modules, CTA rail, atmospheric media block, future chamber teaser pattern.
- Risks or edge cases: Overbuilding fake rooms too early, duplicating the homepage, or letting `Magic Systems` and `The House` become redundant mirrors of each other.
