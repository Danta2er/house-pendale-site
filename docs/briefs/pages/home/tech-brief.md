# Home Tech Brief

## Page

- Page name: Home
- Based on contract: `docs/briefs/pages/home/page-contract.md`

## Functional objective

- What this page must do: Establish the threshold experience, route to the current book, route to the wider world, expose socials cleanly, and support strong metadata / sharing behavior.
- What this page must support later: Additional featured books, world modules, journal callouts, and a future gated bridge without changing the page's base logic.

## Route and template

- Route: `/`
- Template family: Threshold
- Rendering model: Static-first page with reusable sections and targeted client-side interaction for nav and motion only.

## Content model

- Required fields: Hero heading, hero support copy, primary CTA, secondary CTA, current featured book reference, world-entry module, social links, footer links, metadata fields.
- Optional fields: Character teaser card, journal teaser, featured room or ritual teaser, excerpt trigger.
- Relationships to other content: Featured book should point to a structured book page; world-entry block should point to `The House`; social / Substack links should be shared config data, not hand-coded per page forever.

## Components

- Required components: Header, drawer navigation, hero, CTA pair, featured-book section, world-entry section, social cluster, footer.
- Optional components: Modal excerpt trigger, staggered teaser cards, animated section transitions.
- Shared components to reuse: Nav drawer, footer, CTA button styles, social list, image block, card pattern.

## Behavior

- Navigation behavior: Fixed or stable header with expandable navigation drawer. Home should expose the core site structure without overloading the top bar.
- Media behavior: Support one strong hero visual and the book cover without layout thrash. Future-safe for modal excerpt or trailer behavior.
- Motion / reveal behavior: Controlled reveal-on-scroll is welcome. Do not make the threshold feel sluggish, theatrical for its own sake, or inaccessible.
- Responsive behavior: The dual-path logic must remain obvious on mobile. No elegant desktop concept that turns into wet cardboard on a phone.

## SEO / metadata

- Meta fields needed: Title, description, canonical URL, Open Graph title / description / image, Twitter card fields.
- Canonical behavior: Only one true homepage canonical. Do not repeat the live-site sin of `/` and `/home/` pretending to be different people.
- Open Graph / Twitter requirements: Strong share image, concise world-hook copy, clean site identity.
- Structured data requirements: `WebSite` plus `Person` or `Organization`, depending on final brand presentation.

## Channel integration

- Amazon / retailer links: Present through the featured-book path and any direct buy action on the featured module.
- Substack links: Present as deeper reading / world notes, not as a random loose button.
- Social links: Use the active set only - Threads, Instagram, TikTok, X, Bluesky, Substack.
- Form behavior: None required on homepage v1 unless `Join` is brought partially onto the page later.

## Extensibility

- Future modules this page should tolerate: New release rail, recent journal note, featured character, event / announcement strip, gated-content signal.
- Adjacent content types to anticipate: Books, characters, magic-system entries, journal notes, rooms / House pages, author updates.
- Constraints to avoid baking in: Single-book assumptions, fixed CTA text for all time, hard-coded social markup per page, page-specific nav logic.

## Acceptance notes

- What must be easy to edit later: Featured book, CTA destinations, hero text, social set, teaser cards.
- What should be componentized: Header / drawer, CTA pair, cards, social cluster, footer, metadata helper.
- Risks or edge cases: Overloading the homepage with too many world promises, turning the threshold into a lore sitemap, or building motion so heavy it kills the mood instead of sharpening it.
