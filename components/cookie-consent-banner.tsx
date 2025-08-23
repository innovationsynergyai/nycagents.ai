"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if consent has been given previously
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setIsVisible(false)
    // Here you would typically initialize analytics or other cookie-dependent scripts
    console.log("Cookies accepted!")
  }

  const handleManagePreferences = () => {
    // In a real application, this would open a modal or navigate to a preferences page
    alert("Manage Preferences functionality would go here.")
    console.log("Manage preferences clicked.")
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black-900 text-white-50 p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50 shadow-lg">
      <p className="text-sm text-center md:text-left">
        We use cookies to improve your experience and comply with privacy laws.{" "}
        <Link href="/cookie-policy" className="underline text-gold-500 hover:text-gold-400 transition-colors">
          Learn more
        </Link>
      </p>
      <div className="flex gap-2">
        <Button
          onClick={handleAcceptAll}
          className="bg-gold-500 text-black-900 hover:bg-gold-600 transition-colors px-4 py-2 rounded-md text-sm font-semibold"
        >
          Accept All
        </Button>
        <Button
          onClick={handleManagePreferences}
          variant="outline"
          className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-900 transition-colors px-4 py-2 rounded-md text-sm font-semibold bg-transparent"
        >
          Manage Preferences
        </Button>
      </div>
    </div>
  )
}
