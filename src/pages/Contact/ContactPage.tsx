import { motion } from "framer-motion"
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import { useState } from "react"

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
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/config/site"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
    description: "Mon–Fri, 8am–8pm PT",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "548 Market St, San Francisco, CA",
    href: "https://maps.google.com",
    description: "Visit by appointment",
  },
  {
    icon: Clock,
    title: "Support hours",
    value: "24/7 for Enterprise",
    description: "Business: Mon–Fri 8am–8pm PT",
  },
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with our team"
        description="Have a question about pricing, enterprise plans, or partnerships? We'd love to hear from you."
      />

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="contact-form-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2
                id="contact-form-heading"
                className="font-heading text-2xl font-bold text-foreground"
              >
                Send us a message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and our team will get back to you shortly.
              </p>

              <div className="mt-8 space-y-4">
                {contactMethods.map((method) => (
                  <div
                    key={method.title}
                    className="flex gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <method.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {method.title}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-sm text-primary hover:underline"
                          {...(method.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{method.value}</p>
                      )}
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" aria-hidden="true" />
                    Contact form
                  </CardTitle>
                  <CardDescription>
                    All fields marked with * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div
                      className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center"
                      role="status"
                    >
                      <p className="font-semibold text-foreground">
                        Thank you for reaching out!
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We&apos;ve received your message and will respond within
                        24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name *</Label>
                          <Input
                            id="first-name"
                            name="firstName"
                            placeholder="Jane"
                            required
                            autoComplete="given-name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name *</Label>
                          <Input
                            id="last-name"
                            name="lastName"
                            placeholder="Smith"
                            required
                            autoComplete="family-name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Work email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@company.com"
                          required
                          autoComplete="email"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Acme Inc."
                          autoComplete="organization"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your logistics needs..."
                          required
                          rows={5}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        Send message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
