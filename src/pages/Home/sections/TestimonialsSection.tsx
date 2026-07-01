import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"

const testimonials = [
  {
    quote:
      "FleetFlow cut our last-mile delivery costs by 30% while improving our on-time rate. The dashboard gives our ops team full visibility.",
    author: "Sarah Chen",
    role: "Head of Operations, FreshBox",
  },
  {
    quote:
      "We switched from managing our own fleet to FleetFlow and never looked back. Same-day deliveries across the city are now effortless.",
    author: "Marcus Rivera",
    role: "Founder, Urban Goods Co.",
  },
  {
    quote:
      "The API integration was seamless. We plugged FleetFlow into our e-commerce stack in a single sprint.",
    author: "Priya Patel",
    role: "CTO, ShipSwift",
  },
]

export function TestimonialsSection() {
  return (
    <section
      className="border-t border-border py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by businesses that move fast"
          description="See what our customers have to say about their experience with FleetFlow."
          titleId="testimonials-heading"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <Quote
                className="mb-4 h-8 w-8 text-primary/30"
                aria-hidden="true"
              />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-foreground">
                    {item.author}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
