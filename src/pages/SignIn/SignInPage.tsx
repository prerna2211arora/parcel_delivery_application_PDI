import { motion } from "framer-motion"
import { ArrowRight, Truck } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

import { PageHero } from "@/components/common/PageHero"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { routes } from "@/config/routes"
import { siteConfig } from "@/config/site"

export function SignInPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Welcome back"
        title="Sign in to your account"
        description={`Access your ${siteConfig.name} dashboard to manage deliveries, track shipments, and view invoices.`}
      />

      <section className="pb-16 sm:pb-20 lg:pb-24" aria-labelledby="signin-form-heading">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="mx-auto max-w-md">
              <CardHeader className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Truck className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle id="signin-form-heading">Sign in</CardTitle>
                <CardDescription>
                  Enter your credentials to continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div
                    className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center"
                    role="status"
                  >
                    <p className="font-semibold text-foreground">
                      Sign-in is not yet available
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Authentication is coming soon. Contact us to get early
                      access to the platform.
                    </p>
                    <Button className="mt-4" asChild>
                      <Link to={routes.contact}>Contact us</Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        autoComplete="email"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <button
                          type="button"
                          className="text-xs text-primary hover:underline"
                          onClick={() => {}}
                        >
                          Forgot password?
                        </button>
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        autoComplete="current-password"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Sign in
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button type="button" variant="outline" disabled>
                        Google
                      </Button>
                      <Button type="button" variant="outline" disabled>
                        Microsoft
                      </Button>
                    </div>
                  </form>
                )}

                {!submitted && (
                  <p className="mt-6 text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link
                      to={routes.contact}
                      className="font-medium text-primary hover:underline"
                    >
                      Get started
                    </Link>
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
