"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black-900 text-white-50 py-20 border-t border-neutral-800">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-light text-white-50 tracking-wide">INNOVATION SYNERGY AI</h3>
          <p className="text-sm text-neutral-400 uppercase tracking-wide">
            BOSTON AI AGENT
          </p>
          <p className="text-sm text-steel-500 uppercase tracking-wide">
            GEOGRAPHIC-SPECIFIC AI SOLUTIONS FOR AMERICAN BUSINESSES
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white-50">Contact</h4>
          <p className="text-sm text-neutral-400">
            Email:{" "}
            <a href="mailto:info@innovationsynergyai.com" className="hover:text-steel-500 transition-colors">
              info@innovationsynergyai.com
            </a>
          </p>
          <p className="text-sm text-neutral-400">Phone: Available via consultation</p>
          <p className="text-sm text-neutral-400">Headquarters: New York City, MA | Incorporated in Delaware</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white-50">Legal</h4>
          <p className="text-sm text-neutral-400">© 2025 Innovation Synergy AI Inc. All rights reserved.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <Link href="/privacy-policy" className="text-sm text-neutral-400 hover:text-steel-500 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-neutral-400 hover:text-steel-500 transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="col-span-full border-t border-neutral-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <Link href="/privacy-policy" className="text-neutral-400 hover:text-steel-500 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-neutral-600">|</span>
              <Link href="/terms-of-service" className="text-neutral-400 hover:text-steel-500 transition-colors">
                Terms of Service
              </Link>
              <span className="text-neutral-600">|</span>
              <Link href="/cookie-policy" className="text-neutral-400 hover:text-steel-500 transition-colors">
                Cookie Policy
              </Link>
              <span className="text-neutral-600">|</span>
              <Link href="/ai-disclosure" className="text-neutral-400 hover:text-steel-500 transition-colors">
                AI Disclosure
              </Link>
            </div>
            <Link
              href="/do-not-sell" // Updated link
              className="text-neutral-400 hover:text-steel-500 transition-colors text-sm"
              onClick={(e) => {
                // Prevent default behavior if you want to handle it client-side,
                // but for a direct link to a new page, it's usually not needed.
                // e.preventDefault()
                // alert("Do Not Sell My Personal Information request submitted")
              }}
            >
              Do Not Sell My Personal Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
