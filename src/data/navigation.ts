export const navigation = {
  main: [
    { label: 'New', href: '/new' },
    { label: 'Shop', href: '/collections' },
    { label: 'Journal', href: '/journal' },
    { label: 'About', href: '/about' },
  ],
  shop: [
    { label: 'Women', href: '/women' },
    { label: 'Men', href: '/men' },
    { label: 'All', href: '/collections' },
  ],
  utilities: [
    { label: 'Search', href: '/search', icon: 'search' },
    { label: 'Account', href: '/account', icon: 'user' },
    { label: 'Bag', href: '/bag', icon: 'shopping-bag' },
  ],
  footer: {
    shop: [
      { label: 'New', href: '/new' },
      { label: 'Shop', href: '/collections' },
      { label: 'Journal', href: '/journal' },
      { label: 'About', href: '/about' },
    ],
    help: [
      { label: 'Size Guide', href: '/about' },
      { label: 'Shipping', href: '/about' },
      { label: 'Returns', href: '/about' },
      { label: 'Contact', href: '/about' },
    ],
  },
} as const;
