# Project memory

## Product intent & audience

- Digital housewarming invitation website for **Ryan's Kudil** (Tamil family event).
- Family: parents Saravanan & Kamatchi; son Ryan.
- Audience: invited guests viewing on mobile, tablet, laptop, and desktop.
- Content is static; no database or dynamic data needed.
- Goal: feel like a premium digital wedding-style invitation with a luxury floral aesthetic — warm, welcoming, graceful, memorable.

## Brand personality & voice

- Premium, elegant, warm, ceremonial, gracious.
- Tamil/South Indian cultural context (housewarming / Grihapravesha).
- Wording must match the original printed invitation exactly — no altered or missing details.

## Visual design & UX direction

- Aesthetic: modern floral design language with elegant botanical illustrations and decorative patterns.
- Color palette: warm neutrals, sage tones, soft pastels, elegant accents.
- Typography: refined, premium hierarchy with balanced spacing.
- Layout: mobile-first, fully responsive; botanical framing around content sections.
- Motion: smooth scroll-based reveal animations, floating floral elements, subtle interactive effects, page transitions.
- Sections include: hero (house name + family), invitation wording, event date/time/venue, full address, clickable phone number, scroll navigation.
- Prefer server components by default; add `"use client"` only where hooks/interactions require it.
- Avoid hydration attribute mismatches (e.g. server-rendered `class`/`style` drift).

## Decisions, constraints & rationale

- Built with Next.js + JSX + Tailwind CSS + shadcn/ui + Lucide React icons (template defaults).
- No extra UI/icon packages installed unless explicitly requested.
- Static generation; no backend or data layer because invitation content is fixed.
- Production build verified passing cleanly.
- Exact event details (early-morning timing, full address, family names) preserved from the reference image.

## Open questions & assumptions

- Reference image was used as source of truth for event date, time, venue, and wording; assume those details are accurate as provided.
- No RSVP or map integration was explicitly requested; not included unless asked.
- Locale/language assumed English for UI text, Tamil cultural naming retained as-is.