export const navigation = {
  main: [
    { label: 'New', href: '/new' },
    { label: 'Women', href: '/women' },
    { label: 'Men', href: '/men' },
    { label: 'Collections', href: '/collections' },
    { label: 'Journal', href: '/journal' },
    { label: 'About', href: '/about' },
  ],
  utilities: [
    { label: 'Search', href: '/search', icon: 'search' },
    { label: 'Account', href: '/account', icon: 'user' },
    { label: 'Bag', href: '/bag', icon: 'shopping-bag' },
  ],
  footer: {
    shop: [
      { label: 'New', href: '/new' },
      { label: 'Women', href: '/women' },
      { label: 'Men', href: '/men' },
      { label: 'Collections', href: '/collections' },
    ],
    learn: [
      { label: 'Journal', href: '/journal' },
      { label: 'The Edit', href: '/journal' },
      { label: 'Styling Notes', href: '/journal' },
      { label: 'Size Guide', href: '/about' },
    ],
    about: [
      { label: 'Our Story', href: '/about' },
      { label: 'Sustainability', href: '/about' },
      { label: 'Shipping', href: '/about' },
      { label: 'Returns', href: '/about' },
      { label: 'Contact', href: '/about' },
    ],
  },
} as const;
