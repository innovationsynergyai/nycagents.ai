import Image from "next/image"
import { cn } from "@/lib/utils"

export default function DataVisualizationSection() {
  const dataVisualizations = [
    {
      id: "properties-shortage",
      title: "Small Businesses Using Outdated Systems",
      stat: "87%",
      description: "Still relying on manual processes and inefficient workflows",
      chart: "/professional_chart_1_properties.png",
      className: "animate-fade-in-up stagger-0",
      titleClassName: "text-black-900", // Add this
      statClassName: "text-steel-500", // Add this
    },
    {
      id: "turnover-rate",
      title: "Daily Hours Lost to Manual Tasks",
      stat: "4.2 hrs",
      description: "Time that could be automated with AI infrastructure",
      chart: "/professional_chart_2_turnover.png",
      className: "animate-fade-in-up stagger-200",
      titleClassName: "text-black-900", // Add this
      statClassName: "text-steel-500", // Add this
    },
    {
      id: "response-time",
      title: "Customer Response Time Without AI",
      stat: "6+ Hours",
      description: "Average delay in customer service inquiries",
      chart: "/professional_chart_3_response.png",
      className: "animate-fade-in-up stagger-400",
      titleClassName: "text-black-900", // Add this
      statClassName: "text-steel-500", // Add this
    },
  ]

  return (
    <section id="crisis-data" className="py-32 bg-white-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-steel-600 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-6">
          REAL 2025 DATA
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light text-black-900 text-center mb-8">
          New York City Market Analysis
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 text-center mb-24 max-w-4xl mx-auto font-light leading-relaxed">
          New York City small businesses require specialized AI solutions for regional market optimization
        </p>

        <div className="grid grid-cols-1 gap-24">
          {dataVisualizations.map((item) => (
            <div
              key={item.id}
              className={cn("flex flex-col items-center text-center max-w-3xl mx-auto w-full", item.className)}
            >
              <h3 className={cn("font-display text-4xl md:text-5xl font-semibold mb-4", item.titleClassName)}>
                {item.title}
              </h3>
              <p className={cn("text-6xl md:text-7xl font-bold mb-6", item.statClassName)}>{item.stat}</p>
              <p className="text-neutral-700 text-lg mb-8 max-w-xs">{item.description}</p>
              <div className="w-full max-w-[900px] h-auto">
                <Image
                  src={item.chart || "/placeholder.svg"}
                  alt={item.title}
                  width={900} // Increased by 50% from 600
                  height={600} // Increased by 50% from 400
                  layout="responsive"
                  objectFit="contain"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
