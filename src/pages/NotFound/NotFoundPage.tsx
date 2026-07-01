import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { routes } from "@/config/routes"

export function NotFoundPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        404
      </p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or is still under
        construction.
      </p>
      <Button className="mt-8" asChild>
        <Link to={routes.home}>Back to home</Link>
      </Button>
    </Container>
  )
}
