import { motion } from "framer-motion"
import { Building2, Clock, MapPin, Truck } from "lucide-react"

import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"

const features = [
  {
    icon: Truck,
    title: "On-demand fleet",
    description:
      "Access a network of verified drivers and vehicles ready to dispatch within minutes.",
  },
  {
    icon: MapPin,
    title: "Live tracking",
    description:
      "Track every shipment in real time with GPS updates and delivery ETAs.",
  },
  {
    icon: Building2,
    title: "Business accounts",
    description:
      "Centralized billing, team management, and volume discounts for growing teams.",
  },
  {
    icon: Clock,
    title: "Scheduled deliveries",
    description:
      "Book ahead for recurring routes or one-time shipments with flexible time slots.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="features-heading">
      <Container>
        <SectionTitle
          eyebrow="Why FleetFlow"
          title="Everything you need to move goods faster"
          description="From same-day courier to scheduled freight, our platform scales with your business."
          titleId="features-heading"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={itemVariants}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
