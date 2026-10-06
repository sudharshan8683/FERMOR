# Fermor homepage

A homepage concept for Fermor, built with Next.js 14 (App Router), React and Tailwind CSS.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```
## Deploy
Push to GitHub, import the repo into Vercel, and deploy with default settings.

## Decisions
- **Message:** Fermor's promise is "understand, act, grow", so the page follows that order: hero, an interactive three-step journey, a planner, principles, FAQ, then a single call to action.
- **Look:** warm paper tones, deep green and one clay accent. Serif headlines (Fraunces) for warmth, Inter for clarity. Calm, not the usual blue-and-neon fintech look.
- **Working parts:** mobile nav, tabbed journey, a savings planner (future value of monthly saving, in ₹ with Indian number formatting), accordion FAQ. All client-side, no dependencies beyond Next and Tailwind.
- **Honesty:** the planner and sample figures are illustrations, labelled as such. Copy avoids promising returns.
- **Responsive and accessible:** mobile-first layout, semantic landmarks, aria on tabs and accordion, reduced-motion support.
- **Assumptions:** I wrote the copy and sample numbers from the brief, not from product data. Swap in real details where they differ. The email form is a placeholder with no backend.

- **Cursor-reactive motion:** layered parallax in the hero, magnetic buttons, tilt-and-spotlight cards, and a trailing cursor ring (disabled on touch devices and for reduced-motion users). No animation libraries.
- **Friendly details:** skip-to-content link, scroll progress bar, and form confirmation state.
