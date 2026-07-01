import { motion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"

const steps = [
  {
    step: "01",
    title: "Book a delivery",
    description:
      "Enter pickup and drop-off details, choose your vehicle type, and confirm your booking.",
  },
  {
    step: "02",
    title: "Driver assigned",
    description:
      "A verified driver is matched to your order and dispatched to your pickup location.",
  },
  {
    step: "03",
    title: "Track in real time",
    description:
      "Follow your shipment live on the map and receive notifications at every milestone.",
  },
  {
    step: "04",
    title: "Proof of delivery",
    description:
      "Receive digital confirmation with photos and signatures when your goods arrive.",
  },
]

export function HowItWorksSection() {
  return (
    <section
      className="border-y border-border bg-muted/30 py-16 sm:py-20 lg:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <SectionTitle
          eyebrow="How it works"
          title="From booking to delivery in four steps"
          description="A streamlined process designed for speed, transparency, and reliability."
          titleId="how-it-works-heading"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <span
                className="font-heading text-5xl font-bold text-primary/15"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
