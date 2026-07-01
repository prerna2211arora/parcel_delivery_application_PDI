import { Moon, Sun, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    const order = ["light", "dark", "system"] as const
    const currentIndex = order.indexOf(theme)
    const nextIndex = (currentIndex + 1) % order.length
    setTheme(order[nextIndex])
  }

  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor
  const label =
    theme === "dark"
      ? "Dark mode"
      : theme === "light"
        ? "Light mode"
        : "System theme"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className={cn("shrink-0", className)}
      aria-label={`Current theme: ${label}. Click to change theme.`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </Button>
  )
}
