import { motion } from "framer-motion"

import { Container } from "@/components/ui/container"

const stats = [
  { value: "50K+", label: "Deliveries completed" },
  { value: "2,000+", label: "Business customers" },
  { value: "99.2%", label: "On-time rate" },
  { value: "15 min", label: "Avg. pickup time" },
]

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20" aria-label="Company statistics">
      <Container>
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  )
}
