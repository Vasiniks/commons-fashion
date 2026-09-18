# COMMONS — Luxury for the Commons

A fictional established clothing brand website built with a quiet luxury aesthetic. Beautiful design without unnecessary exclusivity.

## Brand Concept

**COMMONS** — "Luxury for the commons."

A respected fashion house that believes premium design should be accessible. Excellent materials, strong construction, thoughtful details, approachable pricing, timeless rather than trend-driven clothing.

- **Tagline:** "Worn well, thought little of."
- **Philosophy:** Exceptional design should not require an absurd price.

## Stack

- **Framework:** Vite + React + TypeScript
- **Routing:** React Router DOM
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Styling:** Custom CSS with CSS variables

## Project Structure

```
commons-fashion/
├── public/
│   └── images/
│       ├── campaign/      # Hero and campaign photography
│       ├── products/      # Product photography
│       ├── editorial/     # Editorial and lifestyle imagery
│       ├── details/       # Fabric and texture close-ups
│       └── journal/       # Journal article imagery
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.tsx     # Sticky navigation with scroll behavior
│   │   ├── Footer.tsx     # Footer with newsletter and links
│   │   └── ProductCard.tsx # Product card component
│   ├── sections/          # Homepage sections
│   │   ├── Hero.tsx       # Full-screen campaign hero
│   │   ├── BrandPhilosophy.tsx
│   │   ├── CollectionPreview.tsx
│   │   ├── EditorialStory.tsx
│   │   ├── SignaturePieces.tsx
│   │   ├── MaterialStory.tsx
│   │   ├── PricingPhilosophy.tsx
│   │   ├── JournalPreview.tsx
│   │   └── FinalCTA.tsx
│   ├── pages/             # Route pages
│   │   ├── HomePage.tsx
│   │   ├── CollectionPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── JournalPage.tsx
│   ├── data/              # Content and data
│   │   ├── brand.ts       # Brand identity and copy
│   │   ├── products.ts    # Product catalog
│   │   └── navigation.ts  # Navigation structure
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   └── styles/            # Global styles
└── README.md
```

## Pages

1. **Home** — Editorial campaign experience with 10 sections
2. **Collection** — Product grid with category filtering
3. **Product Detail** — Full product experience with size/color selection
4. **About** — Brand story and philosophy
5. **Journal** — Editorial content

## Major Components

- **Header:** Sticky navigation with scroll-aware behavior (hide on scroll down, reveal on scroll up), mobile full-screen menu
- **ProductCard:** Minimal card with image hover effect
- **Footer:** Newsletter signup, link columns, social links
- **Sections:** 9 homepage sections with scroll-triggered animations

## Animation Approach

- Hero: Slow clip-path reveal + parallax + staggered text entrance
- Sections: Opacity + translateY reveal on scroll (IntersectionObserver)
- Product cards: Subtle scale on hover
- Page transitions: Fade in/out with Framer Motion AnimatePresence
- Reduced motion: Full support via `prefers-reduced-motion`

## Image/Organization

- Stock photography from Unsplash (fashion editorial, fabric textures, lifestyle)
- Organized by category: campaign, products, editorial, details, journal
- All images downloaded locally for offline reliability

## How to Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Add `homepage` to `package.json` (e.g., `"homepage": "https your-username.github.io/commons-fashion"`)
2. In GitHub repo: Settings → Pages → Branch: `main`, Folder: `/ (root)`
3. Deploy. The build outputs to `dist/` as static assets.

## Design Decisions

- **Color Palette:** Warm neutrals (Linen #F5F0EB, Bone #EDE6DD, Stone #D4C9BC, Charcoal #2C2825, Ink #1A1715)
- **Typography:** Cormorant Garamond (editorial serif) + Inter (clean sans-serif)
- **Layout:** Editorial asymmetric grids, generous whitespace, full-bleed imagery
- **Motion:** Subtle and purposeful — felt more than noticed
- **Tone:** Quiet confidence, no marketing clichés
