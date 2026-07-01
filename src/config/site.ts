export const siteConfig = {
  name: "FleetFlow",
  tagline: "Logistics Made Simple",
  description:
    "On-demand logistics and delivery for businesses. Same-day courier, freight, and last-mile solutions.",
  url: "https://fleetflow.example.com",
  links: {
    twitter: "https://twitter.com/fleetflow",
    linkedin: "https://linkedin.com/company/fleetflow",
    github: "https://github.com/fleetflow",
  },
  contact: {
    email: "hello@fleetflow.example.com",
    phone: "+1 (800) 555-0199",
  },
} as const

export type SiteConfig = typeof siteConfig
