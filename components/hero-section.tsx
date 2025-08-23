import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-black-900 text-white-50 flex items-center justify-center relative py-20 md:py-0"
      style={{ paddingTop: "120px" }}
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-steel-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in-up stagger-0">
          AMERICAN SMALL BUSINESS TRANSFORMATION
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light mb-4 animate-fade-in-up stagger-200">
          New York City's AI-Powered Business <span className="text-steel-500">Agent</span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold tracking-[0.2em] mt-16 mb-4 animate-fade-in-up stagger-600">
          NYC AI AGENT
        </p>
        <p className="text-lg md:text-xl text-neutral-300 tracking-wide mb-3 animate-fade-in-up stagger-700">
          POWERED BY INNOVATION SYNERGY AI
        </p>
        <p className="text-steel-500 text-sm font-medium tracking-[0.15em] mb-16 animate-fade-in-up stagger-800">
          VOICE AI • AUTOMATION • OPTIMIZATION • CUSTOM INTEGRATION
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Button
            asChild
            className="bg-steel-500 text-black-900 font-semibold px-8 py-4 rounded-none hover:bg-steel-400 transition-all duration-300 tracking-wide uppercase text-sm animate-fade-in-up stagger-1000"
          >
            <Link
              href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCHEDULE CONSULTATION
            </Link>
          </Button>
          <Button
            asChild
            className="border border-white-50 text-white-50 font-semibold px-8 py-4 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-sm animate-fade-in-up stagger-1100"
          >
            <Link href="#crisis-data">VIEW DATA</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
