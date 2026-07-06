import { motion } from "framer-motion"
import { Globe, Heart, Shield, Target, Users, Zap } from "lucide-react"

import { PageCta } from "@/components/common/PageCta"
import { PageHero } from "@/components/common/PageHero"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { routes } from "@/config/routes"
import { siteConfig } from "@/config/site"

const values = [
  {
    icon: Zap,
    title: "Speed",
    description:
      "We obsess over pickup times and delivery windows so your customers never wait.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Every shipment is insured, tracked, and handled by verified professionals.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "We treat every package like it matters — because to your business, it does.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "No hidden fees, no surprises. You see the price before you book, every time.",
  },
]

const milestones = [
  { year: "2019", event: "Founded in San Francisco with a fleet of 10 vehicles" },
  { year: "2021", event: "Expanded to 5 major metros, reached 10K monthly deliveries" },
  { year: "2023", event: "Launched API and enterprise platform for B2B clients" },
  { year: "2025", event: "50K+ deliveries/month across 15 cities nationwide" },
]

const team = [
  { name: "Alex Morgan", role: "CEO & Co-founder", initials: "AM" },
  { name: "Jordan Lee", role: "CTO & Co-founder", initials: "JL" },
  { name: "Sam Rivera", role: "Head of Operations", initials: "SR" },
  { name: "Taylor Kim", role: "VP of Engineering", initials: "TK" },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`We're redefining how businesses move goods`}
        description={`${siteConfig.name} was built on a simple belief: logistics should be as easy as ordering a ride.`}
      />

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="about-story-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                eyebrow="Our story"
                title="From a garage startup to a national logistics network"
                align="left"
                titleId="about-story-heading"
                animated={false}
              />
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  FleetFlow started when two founders — frustrated by slow,
                  opaque courier services — decided to build something better.
                  What began as a same-day delivery app for local shops has
                  grown into a full-stack logistics platform serving thousands
                  of businesses.
                </p>
                <p className="leading-relaxed">
                  Today, we operate across 15 cities with a network of verified
                  drivers, temperature-controlled vehicles, and enterprise-grade
                  technology. Our mission remains the same: make logistics
                  simple, fast, and transparent for every business.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-muted/50 p-8 lg:p-12"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Globe className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-foreground">
                    15+
                  </p>
                  <p className="text-sm text-muted-foreground">Cities served</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">
                    2,000+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Business customers
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">
                    500+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Active drivers
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">
                    50K+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monthly deliveries
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">
                    99.2%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    On-time rate
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-muted/30 py-16 sm:py-20"
        aria-labelledby="about-values-heading"
      >
        <Container>
          <SectionTitle
            eyebrow="Our values"
            title="What drives us every day"
            titleId="about-values-heading"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="about-timeline-heading">
        <Container size="sm">
          <SectionTitle
            eyebrow="Milestones"
            title="Our journey so far"
            titleId="about-timeline-heading"
          />
          <ol className="relative mt-12 space-y-8 border-l border-border pl-8">
            {milestones.map((milestone, index) => (
              <motion.li
                key={milestone.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <span
                  className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-primary"
                  aria-hidden="true"
                >
                  {milestone.year.slice(2)}
                </span>
                <p className="text-sm font-semibold text-primary">
                  {milestone.year}
                </p>
                <p className="mt-1 text-muted-foreground">{milestone.event}</p>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="border-t border-border bg-muted/30 py-16 sm:py-20"
        aria-labelledby="about-team-heading"
      >
        <Container>
          <SectionTitle
            eyebrow="Leadership"
            title="Meet the team"
            description="Experienced operators and engineers building the future of logistics."
            titleId="about-team-heading"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary"
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" aria-hidden="true" />
            <span>120+ team members across engineering, ops, and support</span>
          </div>
        </Container>
      </section>

      <PageCta
        title="Want to join our mission?"
        description="We're always looking for talented people who care about logistics and technology."
        primaryLabel="View open roles"
        primaryHref={routes.careers}
        secondaryLabel="Contact us"
        secondaryHref={routes.contact}
      />
    </>
  )
}
