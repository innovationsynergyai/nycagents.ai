import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCTASection() {
  return (
    <section id="final-cta" className="py-32 bg-white-50 text-black-900">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="font-display text-5xl md:text-7xl font-light mb-8">Transform Your Guest Experience</h2>
        <p className="text-xl md:text-2xl text-neutral-600 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
          Join New York City businesses accessing Innovation Synergy AI's market-specific solutions
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-steel-500 to-steel-400 text-black-900 font-bold px-12 py-5 rounded-none hover:shadow-2xl transition-all duration-300 tracking-wider uppercase text-sm mb-16"
        >
          <Link
            href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            SCHEDULE CONSULTATION
          </Link>
        </Button>
        <div className="text-neutral-500 text-center text-sm tracking-wide">
          
          <p>
            
          </p>
        </div>
      </div>
    </section>
  )
}
