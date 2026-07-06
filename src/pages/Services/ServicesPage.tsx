import { motion } from "framer-motion"
import {
  Bike,
  Box,
  Building2,
  Check,
  Clock,
  Package,
  Refrigerator,
  Truck,
  Warehouse,
} from "lucide-react"
import { Link } from "react-router-dom"

import { PageCta } from "@/components/common/PageCta"
import { PageHero } from "@/components/common/PageHero"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { routes } from "@/config/routes"

const services = [
  {
    icon: Bike,
    title: "Express Courier",
    description:
      "Light parcels and documents delivered within hours. Ideal for urgent business shipments across the city.",
    features: ["Under 5 kg", "60-min pickup", "Door-to-door"],
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description:
      "Medium to large packages with dedicated vehicles. Perfect for retail, e-commerce, and B2B deliveries.",
    features: ["Up to 500 kg", "Live GPS tracking", "Proof of delivery"],
  },
  {
    icon: Box,
    title: "Freight & Pallet",
    description:
      "Heavy goods and palletized cargo moved efficiently with trucks, vans, and flatbeds on your schedule.",
    features: ["Up to 2,000 kg", "Loading assistance", "Multi-drop routes"],
  },
  {
    icon: Refrigerator,
    title: "Cold Chain",
    description:
      "Temperature-controlled transport for food, pharmaceuticals, and perishables with real-time monitoring.",
    features: ["2–8°C range", "Insulated vehicles", "Compliance logs"],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Short-term storage and fulfillment hubs strategically located for faster last-mile distribution.",
    features: ["Pick & pack", "Inventory sync", "Cross-docking"],
  },
  {
    icon: Building2,
    title: "Enterprise Logistics",
    description:
      "Custom solutions for high-volume shippers with dedicated account managers and API integrations.",
    features: ["Volume pricing", "SLA guarantees", "Dedicated support"],
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Fast dispatch",
    description: "Average pickup in under 15 minutes across metro areas.",
  },
  {
    icon: Package,
    title: "Full visibility",
    description: "Track every shipment with live maps and delivery notifications.",
  },
  {
    icon: Check,
    title: "Verified fleet",
    description: "Background-checked drivers and insured vehicles on every trip.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Logistics solutions for every shipment"
        description="From express couriers to enterprise freight, FleetFlow has the right vehicle and service level for your business."
      />

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="services-grid-heading">
        <Container>
          <SectionTitle
            eyebrow="What we offer"
            title="Choose the right service for your needs"
            description="Flexible options designed for speed, reliability, and scale."
            titleId="services-grid-heading"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2" role="list">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-muted/30 py-16 sm:py-20"
        aria-labelledby="services-benefits-heading"
      >
        <Container>
          <SectionTitle
            eyebrow="Why choose us"
            title="Built for businesses that can't afford delays"
            titleId="services-benefits-heading"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to={routes.contact}>Request a custom quote</Link>
            </Button>
          </div>
        </Container>
      </section>

      <PageCta
        title="Not sure which service fits?"
        description="Talk to our team and we'll recommend the best option for your shipment volume and delivery needs."
        primaryLabel="Contact sales"
        secondaryLabel="View pricing"
      />
    </>
  )
}
