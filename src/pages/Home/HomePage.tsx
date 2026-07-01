import {
  CtaSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  StatsSection,
  TestimonialsSection,
} from "./sections"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
