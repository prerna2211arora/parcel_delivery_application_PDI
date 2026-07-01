import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  animated?: boolean
  titleId?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  animated = true,
  titleId,
}: SectionTitleProps) {
  const content = (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )

  if (!animated) {
    return content
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  )
}
