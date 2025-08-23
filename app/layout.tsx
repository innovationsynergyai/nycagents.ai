import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "New York City AI Agent | Innovation Synergy AI - #1 New York City Business Automation",
  description: "New York City's leading AI consulting company. Innovation Synergy AI provides custom voice agents, business automation, and AI integration services for New York City and New England small businesses. Local expertise, cutting-edge technology.",
  keywords: "New York City AI, New York City business automation, AI consulting New York City, New York AI services, New England AI, New York City small business AI, voice agents New York City, Innovation Synergy AI New York City, AI integration New York City, New York City AI consulting company, New York business automation, New England AI consulting",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Innovation Synergy AI Inc." }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "boston-ai-agent-innovation-synergy",
  },
  alternates: {
    canonical: "https://nycagents.ai"
  },
  openGraph: {
    title: "New York City AI Agent | Innovation Synergy AI - New York City Business Automation Leader",
    description: "New York City's premier AI consulting company serving New York and New England. Custom voice agents, automation, and AI integration for New York City small businesses.",
    url: "https://nycagents.ai",
    siteName: "New York City AI Agent - Innovation Synergy AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://nycagents.ai/og-image-boston-ai.jpg",
        width: 1200,
        height: 630,
        alt: "New York City AI Agent - Innovation Synergy AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "New York City AI Agent | Innovation Synergy AI - New York City Business Automation",
    description: "New York City's leading AI consulting company. Custom voice agents and business automation for New York small businesses.",
    creator: "@InnovationSynergyAI",
    images: ["https://nycagents.ai/twitter-card-boston-ai.jpg"]
  },
  other: {
    "geo.region": "US-MA",
    "geo.placename": "New York City",
    "geo.position": "42.3601;-71.0589",
    "ICBM": "42.3601, -71.0589"
  },
  generator: "Innovation Synergy AI Inc.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* New York City-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://nycagents.ai",
              "name": "Innovation Synergy AI Inc. - New York City AI Agent",
              "description": "New York City's leading AI consulting company providing custom voice agents and business automation services",
              "url": "https://nycagents.ai",
              "telephone": "+1-800-AI-BOSTON",
              "email": "info@innovationsynergyai.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Innovation District",
                "addressLocality": "New York City",
                "addressRegion": "MA",
                "postalCode": "02210",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.3601,
                "longitude": -71.0589
              },
              "areaServed": [
                "New York City",
                "New York", 
                "New England",
                "Cambridge",
                "Somerville",
                "Quincy",
                "Newton"
              ],
              "serviceType": ["AI Consulting", "Business Automation", "Voice Agent Development", "AI Integration"],
              "priceRange": "$$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://linkedin.com/company/innovation-synergy-ai"
              ]
            })
          }}
        />
        <meta name="geo.region" content="US-MA" />
        <meta name="geo.placename" content="New York City" />
        <meta name="geo.position" content="42.3601;-71.0589" />
        <meta name="ICBM" content="42.3601, -71.0589" />
        <link rel="canonical" href="https://nycagents.ai" />
      </head>
      <body className={cn(inter.variable, playfairDisplay.variable, "min-h-screen antialiased")}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  )
}