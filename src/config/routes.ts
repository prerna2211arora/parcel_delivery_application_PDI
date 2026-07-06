export const routes = {
  home: "/",
  signIn: "/signin",
  services: "/services",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
  blog: "/blog",
  careers: "/careers",
  privacy: "/privacy",
  terms: "/terms",
} as const

export type RouteKey = keyof typeof routes

export const mainNavItems = [
  { label: "Services", href: routes.services },
  { label: "Pricing", href: routes.pricing },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
] as const

export const footerNavGroups = [
  {
    title: "Product",
    links: [
      { label: "Services", href: routes.services },
      { label: "Pricing", href: routes.pricing },
      { label: "For Business", href: routes.services },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: routes.about },
      { label: "Careers", href: routes.careers },
      { label: "Blog", href: routes.blog },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: routes.privacy },
      { label: "Terms of Service", href: routes.terms },
    ],
  },
] as const
