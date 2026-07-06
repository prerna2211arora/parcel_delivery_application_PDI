import { motion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

export interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  titleId?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleId = "page-hero-heading",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/50",
        className,
      )}
      aria-labelledby={titleId}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-24 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[200px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container className="py-14 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          <h1
            id={titleId}
            className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-pretty text-lg text-muted-foreground sm:text-xl">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
