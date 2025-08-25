'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Consulting Services
          </h2>
          <p className="text-xl text-gray-600">
            Professional AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Voice AI Agents</CardTitle>
              <CardDescription>
                Automated phone systems that handle customer inquiries and appointment scheduling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 phone answering</li>
                <li>• Appointment scheduling</li>
                <li>• Customer inquiry handling</li>
                <li>• Custom voice training</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>Workflow Automation</CardTitle>
              <CardDescription>
                Streamline business processes and integrate existing tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Process optimization</li>
                <li>• System integration</li>
                <li>• Data management</li>
                <li>• Task automation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>Custom Solutions</CardTitle>
              <CardDescription>
                Tailored AI implementations for specific business requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom development</li>
                <li>• Industry-specific solutions</li>
                <li>• Ongoing support</li>
                <li>• Training & consultation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to discuss your AI consulting needs?
          </p>
          <a
            href="https://calendly.com/innovationsynergyai/30-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}