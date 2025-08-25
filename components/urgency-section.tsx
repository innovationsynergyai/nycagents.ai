import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UrgencySection() {
  return (
    <section className="py-20 bg-steel-500 text-black-900">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <p className="text-2xl md:text-3xl font-semibold mb-8 tracking-wide">
          SCHEDULE YOUR MIAMI AI CONSULTATION TODAY
        </p>
        <Button
          asChild
          className="bg-black-900 text-white-50 font-semibold px-12 py-4 rounded-none hover:bg-neutral-800 transition-all duration-300 tracking-wide uppercase text-sm"
        >
          <Link
            href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            SECURE SLOT
          </Link>
        </Button>
      </div>
    </section>
  )
}
