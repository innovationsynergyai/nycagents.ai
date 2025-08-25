import Image from "next/image"
import { cn } from "@/lib/utils"

export default function DataVisualizationSection() {
  const services = [
    {
      id: "consultation",
      title: "AI Strategy Consultation",
      description: "Professional guidance on AI implementation opportunities for your business",
      className: "animate-fade-in-up stagger-0",
      titleClassName: "text-black-900",
      icon: (
        <svg className="h-16 w-16 text-steel-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: "development",
      title: "Custom AI Development",
      description: "Tailored artificial intelligence solutions designed for your specific requirements",
      className: "animate-fade-in-up stagger-200",
      titleClassName: "text-black-900",
      icon: (
        <svg className="h-16 w-16 text-steel-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: "automation",
      title: "Process Automation",
      description: "Streamline your business workflows with intelligent automation systems",
      className: "animate-fade-in-up stagger-400",
      titleClassName: "text-black-900",
      icon: (
        <svg className="h-16 w-16 text-steel-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ]

  return (
    <section id="crisis-data" className="py-32 bg-white-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-steel-600 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-6">
          OUR SERVICES
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light text-black-900 text-center mb-8">
          Miami AI Solutions
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 text-center mb-24 max-w-4xl mx-auto font-light leading-relaxed">
          Professional artificial intelligence consulting and development services for Miami businesses
        </p>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn("flex flex-col items-center text-center", service.className)}
            >
              {service.icon}
              <h3 className={cn("font-display text-2xl md:text-3xl font-semibold mb-4", service.titleClassName)}>
                {service.title}
              </h3>
              <p className="text-neutral-700 text-lg max-w-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
