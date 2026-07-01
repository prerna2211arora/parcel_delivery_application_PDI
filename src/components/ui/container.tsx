import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      default: "max-w-7xl",
      sm: "max-w-4xl",
      lg: "max-w-[90rem]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: "div" | "section" | "header" | "footer" | "main" | "article"
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ size, className }))}
        {...props}
      />
    )
  },
)
Container.displayName = "Container"

export { Container, containerVariants }
