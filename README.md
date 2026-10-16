# ByKira: The Operations Map

Build a complete, polished, genuinely distinctive multi-section ByKira website in Lovable with React + TypeScript + Tailwind + shadcn/ui and tasteful Framer Motion. This is a real interactive frontend, NOT an image/mockup.

BACKGROUND:
We have already developed an extensive visual direction for ByKira, a creative digital studio/website & workflow improvement brand offering a "Free Operations Audit" for service businesses. The previous prototype used a dark cinematic editorial design with an operations-map visual and user-interactive journey steps. Rebuild that concept faithfully but more sophisticated and human-designed. The site must be deployable with a working Lovable preview and easily editable.

DESIGN ART DIRECTION:
- Rich tactile, almost-inky off-black canvas (#0C0C0E or #0B0D14), muted warm ivory text (#F6F2ED), electric cobalt/periwinkle (#596AFF), subtle lilac (#A7A6FF), rare warm burnt-orange (#E89B65) for problem/leak markers. Restrained, intentional spotlights, not rainbow/neon overload.
- Editorial striking serif display headings (e.g. DM Serif Display, Instrument Serif, or Playfair) paired with a precise modern sans (Manrope/DM Sans) and small monospace labels. Alternate normal and italic serif. Text should have character.
- Strong asymmetrical 60/40 hero; asymmetric staggering and negative space throughout; meaningful scale contrasts; no repetitive perfectly-mirrored icon grids.
- Quiet dotted-grid technical texture (very low opacity), fine linework and grain CSS overlay, subtle organic ambient blobs, small handwritten-ish marginal annotations or technical arrows. Avoid stock illustrations and generic shiny 3D icons.
- Thin frosted glass panel borders in white/8 to white/12, selective shadow and controlled glow. Bento / clipped panel arrangements with varied spans for samples, mock UI, document preview, and observations.
- Buttons 180–260ms hover transitions, optional soft cursor spotlight on hero (NOT cursor hijacking), gentle spring tab transitions. Scroll entrances respect prefers-reduced-motion. Responsive layouts with refined mobile treatment and 44px touch targets.
- Use visual motifs: winding dotted customer-flow connector, orbital waypoints, document/map preview, problem annotations in amber, remedies in cobalt. Original visual treatment, not template-looking.
- Dark desktop atmosphere from previous visual concept with photographic / textured accents in one small area ONLY if it adds authentic editorial anchoring (no fabricated person/testimonial).

BRAND + CONTENT:
Brand wordmark "ByKira" with tiny four-point star. Tone: candid, plain-spoken, assured, UK English. No generic terms (synergy, next generation, revolutionise). Avoid invented testimonials, logos, client counts, fabricated metrics and fake case studies. Any example MUST be clearly marked "Illustrative example". No invented past results.
Header: wordmark, Work / Approach / What you get / Contact anchors, bright pill CTA "Book a free audit"; mobile slide-down menu.
Hero pill: "FREE OPERATIONS AUDIT" with tiny status ring. Main headline (large expressive serif; break lines deliberately): "Before we build, we trace how your business actually runs." Highlight "actually runs." in a periwinkle italic face. Supporting: "One call. One customer journey. We find the slow handoffs, the repetitive admin, and what could work better." Primary CTA "Book a free audit" secondary "Explore the sample map". Under-CTA details "45-minute call", "A map within 48 hours", "Yours to keep". Hero right: beautifully designed semi-functional large tilted/glass operations-map console with winding line connecting Inquiry -> Booking -> Payment -> Records, amber 'leak' observation, cobalt improvement callout, clickable milestones. Use real CSS/SVG DOM so it is accessible and interactive, not a static background image.
Section narrative:
1. "Follow one customer. Find the friction." Interactive tabbed/map visual: four steps Inquiry, Booking, Payment, Records. Each step updates an adjacent diagnostic panel with (A) what's reviewed (B) typical points of friction and (C) a sensible improvement. Don't pretend these are verified findings; mark 'Example audit'. Could use sample details:
Inquiry: 'Enquiries buried in DMs' -> 'A single place for incoming requests'.
Booking: 'Back-and-forth messages' -> 'A booking link with availability'.
Payment: 'Checked manually' -> 'Automatic payment confirmations'.
Records: 'Information in three places' -> 'One clean record per customer'.
2. "45 minutes. One call." timeline/editorial layout, call outline of what happens and the four stages without repetitive same-size cards.
3. "You get a map, not a sales pitch." After 48 hours deliver a sample PDF-style map interface and list of outputs: handoffs, bottlenecks, practical improvements, priorities. Button 'View example map' opens an accessible dialog/modal showing a detailed sample operations map with clickable steps and print/save-as-PDF friendly output via window.print if appropriate.
4. "Small fixes. Less friction." genuinely asymmetric bento examples comparing bad and better with mini real-looking UI interfaces (unanswered message thread vs booking mini date selector, manual payment checklist vs 'payment confirmed' state). Mini date selector and checkbox toggles should work; explicit Illustrative UI label. No fake performance numbers.
5. Small studio/about note "ByKira designs the useful bits first." brief human copy about designing systems that make sense before building them. No fabricated founder identity.
6. End CTA: "No obligation. Keep the map either way." strong distinct footer composition with rotated operations-map.pdf preview, CTA "Request your free audit", brand footer.
Use subtle custom scroll indicators and dynamic active nav states, responsive.
Provide proper SEO title/meta description/OG basics, semantic headings, keyboard focus, alt/ARIA, accessible colour contrast and reduced-motion support.

WORKING INTERACTIONS:
- Working hero journey step selection (keyboard too), diagnostic details update.
- Working sample map dialog, dismiss on Escape / backdrop, focus management via shadcn Dialog; print action genuinely prints content.
- Date slots in illustrated booking preview interactive and selected visibly; simulated example clearly labelled.
- Contact/request audit modal/form: fields Name, Email, Business, Description; client validation. If no email backend is configured, DO NOT pretend an enquiry has been sent. Prefer a real mailto action only if a verified destination exists; if not, show clearly that submitting isn't connected yet, and give accessible 'Copy enquiry' clipboard button. Keep destination/contact email configurable via a clearly named constant. Do not fabricate a contact address.
- CTA anchors and navigation work. No dead buttons. No unsupported fictional testimonials/logos/statistics.
- No horizontal overflow at 320px widths. Clear genuine mobile layout.

PRIORITISE: finish a high-quality visual experience; functional React components, readable modular code; sensible file structure, and production-capable frontend. Don't just output a plan; implement the site and show it in Lovable preview.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7392312f-ba7d-4405-b33b-fd430b1140ad).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
