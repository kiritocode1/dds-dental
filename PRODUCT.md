# Product

## Register

brand

## Users

Primary: prospective dental patients in and around Pune researching a clinic before booking. They arrive via search ("dentist Shivaji Nagar Pune", "cosmetic dentist Pune", "dental implants Model Colony"), Google Maps, or word-of-mouth referral. Their context is evaluative: a few minutes on a phone or laptop, scanning for trust signals before deciding to call or visit.

Secondary: international and out-of-city patients researching the clinic for cosmetic or implant work, often referred to Dr. Priti Munde by name. Higher consideration, longer dwell, deeper read.

The job to be done is decide that this is the clinic to visit, then complete a low-friction next step: open Google Maps for directions, call, or send a WhatsApp/email. Reading time is short. Trust must be established within the first viewport.

## Product Purpose

A read-only marketing surface for Dentsspa Dental Studio. It exists to convert a search-result click into a clinic visit by establishing, fast: this is a real, established practice with a credentialed lead clinician, and here is exactly how to get there. Success is measured by qualified visits to the clinic — not vanity metrics, not gallery time, not scroll depth. The site has no app, no login, no transactional surface; every interactive element points outward toward calling, directing, or messaging.

SEO is a primary design constraint, not an afterthought. Real semantic HTML, descriptive copy at the top of the page (not buried under hero imagery), `LocalBusiness` / `Dentist` structured data, real metadata, and a sitemap are part of the design.

## Brand Personality

Three words: **professional-white, expert, gentle**.

Voice is plain and unhurried. Sentences are short. Credentials are stated once, clearly, without exclamation. The clinic does not perform enthusiasm. Warmth comes from how patients are spoken about (with care, in plural, never as "leads" or "clients"), not from emoji or marketing language. The doctor is named, photographed, and quoted; the clinic is not anonymized behind a brand.

Emotionally, the first three seconds should feel like walking into a quiet, well-lit clinical room: clean surfaces, soft daylight, no music, a competent person who looks up and greets you.

## Anti-references

Explicitly NOT any of the following; each is a category-reflex that this site must avoid:

- **Generic stock-photo dentistry**: smiling-family hero photos, "Welcome to our practice", looped tooth-icon backgrounds, blue gradients.
- **Medical-corporate / hospital**: insurance-portal blues, ID-badge portraits, sterile grids of doctors, "Patient Portal" CTAs.
- **Beauty-clinic glam**: rose-gold, script display faces, large before/after gallery hero, mascara-and-injectables tone.
- **Wellness/spa cliche**: sage greens, watercolor leaves, namaste tone, lotus iconography, "your journey to wellness".
- **Tech-SaaS template**: full-bleed gradient hero, 3-column feature cards with rounded-square icons, "Trusted by 10,000+", marquee logo wall.

If a layout choice could equally appear on any of the above, it is the wrong choice.

## Design Principles

1. **The doctor is the brand.** Credibility lives in Dr. Priti Munde's named presence, photo, credentials, and words. The clinic name is secondary. Anonymized "we" copy is rejected.
2. **Quiet authority, not loud proof.** Awards and stats are stated once, in plain prose, not as glowing badge walls. Readers should infer competence from how things are said, not from how many things are said.
3. **Every section makes the visit easier.** Address, hours, map, phone, and parking should never be more than one section away. The conversion is a physical visit, so location is treated as primary content, not footer fine print.
4. **White as a deliberate move, not absence.** A restrained near-white surface is the brand. It must read as chosen restraint (precise spacing, considered type, real photography), never as an empty Tailwind starter.
5. **Real, never staged.** Use the actual clinic and doctor photographs at hand. No stock smiles, no AI-illustrated teeth, no decorative tooth icons. If a real photo is unavailable for a section, the section is text.

## Accessibility & Inclusion

- WCAG 2.2 AA as the floor; verify contrast on the chosen near-white surface before shipping.
- Built on shadcn primitives so keyboard navigation, focus rings, and ARIA semantics are correct by default.
- Respect `prefers-reduced-motion`; all entrance animations must degrade to opacity only.
- Real semantic landmarks (`header`, `main`, `nav`, `footer`, `section` with headings) for screen readers and SEO alike.
- `alt` text on every image describing the actual content (procedure, room, person), not "image1.jpeg".
- Body type at 16px minimum, line length capped 65–75ch.
- Tap targets at 44px minimum on the call/directions/WhatsApp actions, since they are the primary conversions on mobile.
