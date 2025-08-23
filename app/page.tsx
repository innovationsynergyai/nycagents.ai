import HeroSection from "@/components/hero-section"
import DataVisualizationSection from "@/components/data-visualization-section"
import PricingSection from "@/components/pricing-section"
import UrgencySection from "@/components/urgency-section"
import FinalCTASection from "@/components/final-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DataVisualizationSection />
      <PricingSection />
      <UrgencySection />
      <FinalCTASection />
    </>
  )
}
