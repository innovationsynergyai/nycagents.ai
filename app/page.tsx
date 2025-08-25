import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/TestimonialsSection"
import PricingSection from "@/components/pricing-section"
import FinalCTASection from "@/components/final-cta-section"
import { LocalBusinessStructuredData, FAQStructuredData } from "@/components/StructuredData"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  description: "Professional AI consulting services for small businesses. Custom voice AI agents, workflow automation, and business process optimization.",
  pathname: "",
  keywords: [
    "AI consulting",
    "voice AI agents",
    "workflow automation",
    "business process automation",
    "AI integration",
    "custom AI solutions"
  ]
})

// FAQ data for structured data
const homepageFAQs = [
  {
    question: "What AI consulting services do you provide?",
    answer: "We provide custom voice AI agents, workflow automation, and business process optimization tailored to your specific business needs."
  },
  {
    question: "How do AI agents work for small businesses?",
    answer: "AI agents can handle phone calls, schedule appointments, answer common questions, and automate repetitive tasks, allowing you to focus on growing your business."
  },
  {
    question: "Do you serve businesses nationwide?",
    answer: "Yes, we provide AI consulting services nationwide with specialized teams in Boston, New York City, and Miami. All implementations include remote support."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with various industries including healthcare, legal, real estate, restaurants, and professional services, customizing AI solutions for each sector."
  },
  {
    question: "How do we get started with AI consulting?",
    answer: "Contact us for a consultation where we'll discuss your business needs and explore how AI solutions can be tailored to your specific requirements."
  }
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData />
      <FAQStructuredData faqs={homepageFAQs} />
      
      <HeroSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
    </>
  )
}