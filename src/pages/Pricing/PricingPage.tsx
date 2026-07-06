import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Link } from "react-router-dom"

import { PageCta } from "@/components/common/PageCta"
import { PageHero } from "@/components/common/PageHero"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    description: "For small businesses getting started with on-demand delivery.",
    price: "Free",
    period: "to start",
    features: [
      "Up to 50 deliveries/month",
      "Standard vehicle types",
      "Live tracking",
      "Email support",
      "Pay per delivery",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Business",
    description: "For growing teams with regular shipping needs.",
    price: "$99",
    period: "/month",
    features: [
      "Unlimited deliveries",
      "Priority dispatch",
      "Team accounts (up to 10)",
      "API access",
      "Volume discounts",
      "Dedicated chat support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For high-volume shippers with custom requirements.",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited team members",
      "Dedicated account manager",
      "Custom SLAs",
      "White-label options",
      "Advanced analytics",
      "24/7 phone support",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
]

const faqs = [
  {
    question: "Is there a setup fee?",
    answer:
      "No. You can sign up and start booking deliveries immediately with no upfront costs.",
  },
  {
    question: "How does pay-per-delivery work?",
    answer:
      "On the Starter plan, you're charged per trip based on distance, vehicle type, and time of day. Rates are shown before you confirm.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes. Upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Business and Enterprise customers receive automatic volume discounts. Contact sales for custom pricing above 1,000 deliveries/month.",
  },
]

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="Start free and scale as you grow. No hidden fees, no long-term contracts."
      />

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="pricing-plans-heading">
        <Container>
          <SectionTitle
            eyebrow="Plans"
            title="Choose the plan that fits your business"
            titleId="pricing-plans-heading"
            className="sr-only"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={cn(
                    "relative flex h-full flex-col",
                    plan.highlighted &&
                      "border-primary shadow-lg ring-1 ring-primary/20",
                  )}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most popular
                    </span>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="font-heading text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="ml-1 text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3" role="list">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link to={routes.contact}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="border-t border-border bg-muted/30 py-16 sm:py-20"
        aria-labelledby="pricing-faq-heading"
      >
        <Container size="sm">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently asked questions"
            titleId="pricing-faq-heading"
          />
          <dl className="mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <dt className="text-base font-semibold text-foreground">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </dd>
              </motion.div>
            ))}
          </dl>
        </Container>
      </section>

      <PageCta />
    </>
  )
}
