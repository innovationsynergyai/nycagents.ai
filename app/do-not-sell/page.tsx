import type { Metadata } from "next"
import DoNotSellClientPage from "./DoNotSellClientPage"

// Metadata for the page (Note: This will be overridden by root layout metadata if present)
export const metadata: Metadata = {
  title: "Do Not Sell My Personal Information | New York City AI Agent - Innovation Synergy AI New York City",
  description: "Privacy rights request form for New York City AI Agent customers. Innovation Synergy AI New York City respects New York and federal privacy laws.",
  keywords: "Privacy Rights, Do Not Sell, Opt Out, Personal Information, New York Privacy, New York City AI, Innovation Synergy AI New York City",
  robots: "noindex, nofollow", // Set to noindex, nofollow as per common practice for legal forms
}

export default function DoNotSellPage() {
  return <DoNotSellClientPage />
}