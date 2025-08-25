'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAnalytics } from "@/hooks/useAnalytics"

export default function FinalCTASection() {
  const { trackCTAClick, trackButtonClick } = useAnalytics()
  return (
    <section className="py-32 bg-black-900 text-white-50">
      <div className="container max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-tiffany-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in-up stagger-0">
          READY TO AUTOMATE YOUR BUSINESS?
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light mb-8 animate-fade-in-up stagger-200">
          Automate Your <span className="text-tiffany-500">Operations</span>
        </h2>
        <p className="text-xl md:text-2xl text-neutral-300 mb-16 font-light animate-fade-in-up stagger-400">
          Professional AI consulting services to streamline your business operations 
          with voice agents and workflow automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="text-left animate-fade-in-up stagger-600">
            <h3 className="text-2xl font-semibold mb-6 text-tiffany-500">Why Choose Us?</h3>
            <ul className="space-y-4 text-neutral-300">
              <li className="flex items-start">
                <span className="text-tiffany-500 mr-3">•</span>
                <span>Professional AI consulting for small businesses</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-500 mr-3">•</span>
                <span>100% remote installation - no disruption to your business</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-500 mr-3">•</span>
                <span>Specialized in businesses with 5-500 employees</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-500 mr-3">•</span>
                <span>Built for business compliance and regulatory requirements</span>
              </li>
            </ul>
          </div>
          
          <div className="text-left animate-fade-in-up stagger-800">
            <h3 className="text-2xl font-semibold mb-6 text-tiffany-500">What You Get</h3>
            <ul className="space-y-4 text-neutral-300">
              <li className="flex items-start">
                <span className="text-tiffany-500 mr-3">•</span>
                <span>Custom voice AI agents that sound human</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-500 mr-3">•</span>
                <span>Automated workflows that save 4+ hours daily</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-500 mr-3">•</span>
                <span>Data enrichment systems for better decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-500 mr-3">•</span>
                <span>24/7 customer service without hiring staff</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-fade-in-up stagger-1000">
          <Button
            asChild
            className="bg-tiffany-500 text-black-900 font-semibold px-12 py-6 rounded-none hover:bg-tiffany-400 transition-all duration-300 tracking-wide uppercase text-base"
            onClick={() => trackCTAClick('Book Free Strategy Call', 500, 'final_cta_section')}
          >
            <Link
              href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK YOUR FREE STRATEGY CALL
            </Link>
          </Button>
          <Button
            asChild
            className="border border-white-50 text-white-50 font-semibold px-12 py-6 rounded-none hover:bg-white-50 hover:text-black-900 transition-all duration-300 tracking-wide uppercase text-base"
            onClick={() => trackButtonClick('Email Us Directly', 'final_cta_section', { contact_method: 'email' })}
          >
            <Link href="mailto:info@innovationsynergyai.com">
              EMAIL US DIRECTLY
            </Link>
          </Button>
        </div>

        <p className="text-neutral-400 text-sm mt-12 max-w-2xl mx-auto animate-fade-in-up stagger-1200">
          Innovation Synergy AI Inc. specializes in business automation consulting for small businesses. 
          All consultations are confidential and come with our 30-day satisfaction guarantee.
        </p>
      </div>
    </section>
  )
}