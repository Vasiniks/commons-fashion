export const brand = {
  name: 'COMMONS',
  tagline: 'Worn well, thought little of.',
  secondaryTagline: 'Clothes that don\'t need to announce themselves.',
  philosophy: 'Luxury for the commons.',
  description: 'Beautiful design should not require an absurd price. We build garments with the same intention and craft as the houses that inspired us — then price them honestly.',
  story: `COMMONS began with a simple observation: the distance between a well-made garment and an accessible price is not a chasm but a choice.

We work with mills in Japan, Portugal, and Italy, choosing fabrics not for their seasonality but for how they age — the Japanese selvedge denim that softens over three winters, the Portuguese linen that only improves when it wrinkles.

We have no interest in trend cycles, micro-seasons, or manufactured urgency. Our collections release twice a year, and every piece introduced is one we are willing to repair, replace, or simply continue making for as long as it serves.

Restraint is not a limitation for us — it is the whole point.`,
  voice: 'We speak plainly and without ornament. The tone is warm, direct, and unhurried. We avoid superlatives, invented adjectives, and the language of aspiration. If a fabric is good, we say it is good.',
  founded: '2019',
  origin: 'London & Lisbon',
  email: 'hello@commons.fashion',
  social: {
    instagram: '@commons.fashion',
    pinterest: 'commons',
  },
} as const;

export type Brand = typeof brand;
