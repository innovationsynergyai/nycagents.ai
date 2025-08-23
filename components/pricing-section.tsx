import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  paymentUrl: string
  variant?: "default" | "featured" | "premium" | "dark"
  badge?: string
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  paymentUrl,
  variant = "default",
  badge,
  className,
  ...props
}: PricingCardProps) {
  const cardClasses = cn(
    "p-8 flex flex-col h-full relative",
    {
      "bg-white-50 border border-neutral-200 hover:shadow-xl transition-all duration-300": variant === "default",
      "bg-black-900 text-white-50 border-2 border-steel-500 hover:shadow-2xl transition-all duration-300":
        variant === "featured",
      "bg-black-900 text-white-50 border border-steel-500 hover:shadow-2xl transition-all duration-300":
        variant === "premium",
      "bg-black-900 text-white-50 border border-steel-500 p-8 hover:shadow-2xl transition-all duration-300":
        variant === "dark",
    },
    className,
  )

  const buttonClasses = cn(
    "font-semibold px-8 py-4 rounded-none transition-all duration-300 tracking-wide uppercase text-sm mt-auto w-full", // Added w-full to ensure consistent width
    {
      "bg-steel-500 text-black-900 hover:bg-gold-400": true, // All variants now use this style
    },
  )

  return (
    <Card className={cardClasses} {...props}>
      {badge && (
        <div
          className={cn(
            "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase rounded-full",
            {
              "bg-steel-500 text-black-900": variant === "featured",
            },
          )}
        >
          {badge}
        </div>
      )}
      <CardHeader className="pb-6 text-center">
        <CardTitle
          className={cn("font-display text-4xl font-light", variant === "default" ? "text-black-900" : "text-white-50")}
        >
          {name}
        </CardTitle>
        <CardDescription className={cn("text-lg", variant === "default" ? "text-neutral-600" : "text-neutral-300")}>
          {description}
        </CardDescription>
        <div className={cn("text-5xl font-bold mt-4", variant === "default" ? "text-black-900" : "text-steel-500")}>
          {price}
          <span className="text-xl font-normal">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn("flex items-center", variant === "default" ? "text-neutral-700" : "text-neutral-300")}
            >
              <CheckIcon className={cn("mr-3 h-5 w-5", variant === "default" ? "text-black-900" : "text-steel-500")} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button asChild className={buttonClasses}>
          <Link href={paymentUrl} target="_blank" rel="noopener noreferrer">
            {cta}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function PricingSection() {
  const packages = [
    {
      id: "foundation",
      name: "Foundation",
      price: "$2,997",
      period: "month",
      description: "Small businesses with 5-20 employees",
      features: [
        "Voice AI integration",
        "Basic automation setup",
        "Customer service optimization",
        "Standard system integration",
        "Email support",
      ],
      cta: "SELECT FOUNDATION",
      paymentUrl: "https://buy.stripe.com/cNifZh38VaoreZjdg23sI0J",
      variant: "dark",
      className: "animate-fade-in-up stagger-0",
    },
    {
      id: "professional",
      name: "Professional",
      price: "$5,997",
      period: "month",
      description: "Growing businesses with 20-100 employees",
      features: [
        "Custom voice synthesis",
        "Advanced workflow automation",
        "Multi-channel integration",
        "Custom system prompts",
        "Priority support",
        "Real-time analytics",
      ],
      cta: "SELECT PROFESSIONAL",
      paymentUrl: "https://buy.stripe.com/6oU3cvcJv68bg3nek63sI0K",
      variant: "featured",
      badge: "RECOMMENDED",
      className: "animate-fade-in-up stagger-200",
    },
    {
      id: "elite",
      name: "Elite",
      price: "$9,997",
      period: "month",
      description: "Enterprise businesses with 100+ employees",
      features: [
        "Hyper-specific voice agents",
        "Complete infrastructure overhaul",
        "Custom AI personality development",
        "White-glove implementation",
        "Dedicated account manager",
        "Custom features & integrations",
      ],
      cta: "SELECT ELITE",
      paymentUrl: "https://buy.stripe.com/bJe3cveRD8gj5oJ4Jw3sI0L",
      variant: "premium",
      className: "animate-fade-in-up stagger-400",
    },
  ]

  return (
    <section id="investment-packages" className="py-32 bg-black-900 text-white-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-steel-500 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-6">
          INVESTMENT PACKAGES
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light text-center mb-8">New York City Agent Packages</h2>
        <p className="text-xl md:text-2xl text-neutral-300 text-center mb-24 font-light">
          Geographic-specific AI solutions deployed by Innovation Synergy AI Inc.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>

        <p className="text-neutral-400 text-center mt-16 text-sm tracking-wide">
          30-day satisfaction guarantee included
        </p>
      </div>
    </section>
  )
}
