import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { routes } from "@/config/routes"

type PageCtaProps = {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function PageCta({
  title = "Ready to streamline your logistics?",
  description = "Join thousands of businesses delivering faster with FleetFlow. Get started in minutes — no setup fees.",
  primaryLabel = "Start for free",
  primaryHref = routes.contact,
  secondaryLabel = "View pricing",
  secondaryHref = routes.pricing,
}: PageCtaProps) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="page-cta-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(1_0_0/0.1),transparent_60%)]"
            aria-hidden="true"
          />
          <h2
            id="page-cta-heading"
            className="relative text-balance font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
          >
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/80">
            {description}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to={primaryHref}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
