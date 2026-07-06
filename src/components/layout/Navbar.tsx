import { Menu, Truck, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

import { ThemeToggle } from "@/components/theme"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { mainNavItems, routes } from "@/config/routes"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between lg:h-18"
          aria-label="Main navigation"
        >
          <Link
            to={routes.home}
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Truck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-bold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link to={routes.signIn}>Sign in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to={routes.contact}>Get Started</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </nav>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
        >
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                      isActive
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="outline" asChild>
                <Link to={routes.signIn} onClick={() => setMobileOpen(false)}>
                  Sign in
                </Link>
              </Button>
              <Button asChild>
                <Link to={routes.contact} onClick={() => setMobileOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
