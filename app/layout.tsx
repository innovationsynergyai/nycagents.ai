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
  title: "NYC AI Agent | Innovation Synergy AI - #1 NYC Business Automation",
  description: "NYC's leading AI consulting company. Innovation Synergy AI provides custom voice agents, business automation, and AI integration services for New York City small businesses. Manhattan expertise, cutting-edge technology.",
  keywords: "NYC AI, NYC business automation, AI consulting NYC, New York AI services, Manhattan AI, NYC small business AI, voice agents NYC, Innovation Synergy AI NYC, AI integration NYC, NYC AI consulting company, New York business automation, Manhattan AI consulting",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Innovation Synergy AI Inc." }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "nyc-ai-agent-innovation-synergy",
  },
  alternates: {
    canonical: "https://nycagents.ai"
  },
  openGraph: {
    title: "New York City AI Agent | Innovation Synergy AI - New York City Business Automation Leader",
    description: "New York City's premier AI consulting company serving Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Custom voice agents, automation, and AI integration for New York City small businesses.",
    url: "https://nycagents.ai",
    siteName: "New York City AI Agent - Innovation Synergy AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://nycagents.ai/og-image-nyc-ai.jpg",
        width: 1200,
        height: 630,
        alt: "New York City AI Agent - Innovation Synergy AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "New York City AI Agent | Innovation Synergy AI - New York City Business Automation",
    description: "New York City's leading AI consulting company. Custom voice agents and business automation for NYC small businesses.",
    creator: "@InnovationSynergyAI",
    images: ["https://nycagents.ai/twitter-card-nyc-ai.jpg"]
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "New York City",
    "geo.position": "40.7128;-74.0060",
    "ICBM": "40.7128, -74.0060"
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
              "telephone": "+1-800-AI-NYC",
              "email": "info@innovationsynergyai.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Financial District",
                "addressLocality": "New York City",
                "addressRegion": "NY",
                "postalCode": "10005",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7128,
                "longitude": -74.0060
              },
              "areaServed": [
                "New York City",
                "Manhattan",
                "Brooklyn", 
                "Queens",
                "Bronx",
                "Staten Island",
                "Long Island",
                "Westchester County"
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
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York City" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />
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