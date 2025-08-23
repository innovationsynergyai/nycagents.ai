"use client"
import { XIcon } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AiDisclosureBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if the banner has been dismissed previously
    const dismissed = localStorage.getItem("ai_disclosure_banner_dismissed")
    if (dismissed) {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("ai_disclosure_banner_dismissed", "true")
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="bg-gold-500 text-black-900 text-center py-2 px-4 text-sm flex items-center justify-center relative">
      <p className="flex-grow">
        <span className="font-semibold">🤖 Our services use AI technology.</span>{" "}
        <Link href="/ai-disclosure" className="underline hover:text-neutral-700 transition-colors">
          Learn more about our AI systems.
        </Link>
      </p>
      <button
        onClick={handleDismiss}
        className="ml-4 text-black-900 hover:text-neutral-700 transition-colors focus:outline-none"
        aria-label="Dismiss AI disclosure banner"
      >
        <XIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
