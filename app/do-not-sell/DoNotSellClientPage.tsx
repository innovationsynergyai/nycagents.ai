"use client"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z
  .object({
    fullName: z.string().min(1, { message: "Full Name is required." }),
    email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email Address is required." }),
    phoneNumber: z.string().optional(),
    hotelAssociation: z.string().optional(),
    verificationMethod: z.enum(["email", "phone", "account"], {
      required_error: "Please select a verification method.",
    }),
    optOutSale: z.boolean().default(false).optional(),
    optOutSharing: z.boolean().default(false).optional(),
    deletePersonalInformation: z.boolean().default(false).optional(),
    requestCopy: z.boolean().default(false).optional(),
    reasonForRequest: z.string().optional(),
    specificConcerns: z.string().optional(),
  })
  .refine((data) => data.optOutSale || data.optOutSharing || data.deletePersonalInformation || data.requestCopy, {
    message: "Please select at least one request type.",
    path: ["optOutSale"], // Attach error to the first checkbox for visibility
  })

export default function DoNotSellClientPage() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")
  const [submissionMessage, setSubmissionMessage] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      hotelAssociation: "",
      verificationMethod: "email",
      optOutSale: false,
      optOutSharing: false,
      deletePersonalInformation: false,
      requestCopy: false,
      reasonForRequest: "",
      specificConcerns: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmissionStatus("idle")
    setSubmissionMessage("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock success or error
    const success = Math.random() > 0.1 // 90% success rate for demo

    if (success) {
      setSubmissionStatus("success")
      setSubmissionMessage(
        "Your opt-out request has been submitted successfully. You will receive an email confirmation shortly.",
      )
      form.reset()
    } else {
      setSubmissionStatus("error")
      setSubmissionMessage("There was an error submitting your request. Please try again or contact us directly.")
    }
  }

  return (
    <div className="min-h-screen bg-white-50 pt-24 pb-16">
      <div className="container max-w-4xl mx-auto px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="font-display text-4xl md:text-5xl font-light text-black-900 mb-8">
            Do Not Sell My Personal Information
          </h1>
          <p className="text-neutral-600 mb-8">
            <strong>Innovation Synergy AI Inc.</strong>
            <br />
            Effective Date: January 31, 2025
            <br />
            Last Updated: January 31, 2025
          </p>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">Your New York Privacy Rights</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Under New York privacy laws, including the SHIELD Act, and applicable federal privacy regulations, New York
              residents have the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of their personal
              information. This page allows you to exercise that right.
            </p>
            <div className="bg-steel-50 border-l-4 border-steel-500 p-4 mb-6">
              <p className="text-black-900 font-semibold">
                <strong>Important AI Disclosure:</strong> Our services utilize artificial intelligence and machine
                learning technologies to process personal information. By using our services or interacting with our AI
                voice agents, you acknowledge that you are communicating with an AI system and consent to the processing
                of your personal information as described in our{" "}
                <Link href="/privacy-policy" className="underline hover:text-steel-500 transition-colors">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">
              What Does &quot;Sale&quot; or &quot;Sharing&quot; Mean?
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Under New York and federal privacy laws, &quot;sale&quot; means disclosing personal information to third parties for monetary
              or other valuable consideration. &quot;Sharing&quot; means disclosing personal information to third
              parties for cross-context behavioral advertising, including for marketing purposes.
            </p>

            <h3 className="font-display text-xl font-semibold text-black-900 mb-3">Information We May Share</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Innovation Synergy AI Inc. may share the following categories of personal information:
            </p>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>
                • <strong>Identifiers:</strong> Name and contact information, IP addresses and device identifiers, Hotel
                reservation confirmation numbers, Guest loyalty program identifiers
              </li>
              <li>
                • <strong>Audio and Visual Information:</strong> Voice recordings and transcriptions (for service
                delivery), Call recordings and voice interaction logs, Speech pattern analysis data
              </li>
              <li>
                • <strong>Commercial Information:</strong> Service preferences and interaction history, Hotel stay
                patterns and preferences, Service usage analytics
              </li>
              <li>
                • <strong>Internet Activity:</strong> Website browsing behavior, Interaction patterns with our AI
                systems, Service usage statistics
              </li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-black-900 mb-3">Third Parties We Share With</h3>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>• Hotel Partners: Properties using our Isabella Concierge services</li>
              <li>• Service Providers: Technology vendors, analytics providers, customer support platforms</li>
              <li>• Marketing Partners: Advertising networks, social media platforms (with consent)</li>
              <li>• Analytics Companies: Google Analytics, Hotjar, Mixpanel for service improvement</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">Your Opt-Out Rights</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You have the right to opt out of the sale or sharing of your personal information at any time. When you
              opt out:
            </p>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>• We will stop selling or sharing your personal information to third parties</li>
              <li>• We will honor your request for at least 12 months before asking you to reauthorize</li>
              <li>• We will not discriminate against you for exercising this right</li>
              <li>• Your opt-out applies to all personal information we have collected about you</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-black-900 mb-3">Important Service Limitations</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Please Note: Opting out may affect certain service features:
            </p>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>• AI Voice Agent Services: Core Isabella Concierge functionality will continue</li>
              <li>• Personalization: Reduced ability to customize services based on preferences</li>
              <li>• Analytics: Limited service improvement capabilities</li>
              <li>• Marketing: You will not receive personalized offers or recommendations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">How to Opt Out</h2>

            <h3 className="font-display text-xl font-semibold text-black-900 mb-3">
              Option 1: Online Form (Recommended)
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Complete the secure form below to submit your opt-out request:
            </p>

            <div className="bg-neutral-50 p-6 rounded-lg mb-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black-900">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black-900">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black-900">Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hotelAssociation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black-900">Hotel/Property Association (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="The Grand Hotel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="verificationMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-black-900">Verification Method Preference</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="email" />
                              </FormControl>
                              <FormLabel className="font-normal text-neutral-700">Email verification</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="phone" />
                              </FormControl>
                              <FormLabel className="font-normal text-neutral-700">Phone verification</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="account" />
                              </FormControl>
                              <FormLabel className="font-normal text-neutral-700">Account login verification</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <Label className="text-black-900">Request Type</Label>
                    <FormField
                      control={form.control}
                      name="optOutSale"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal text-neutral-700">
                              Opt out of sale of personal information
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="optOutSharing"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal text-neutral-700">
                              Opt out of sharing for advertising purposes
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="deletePersonalInformation"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal text-neutral-700">
                              Delete my personal information (separate CCPA right)
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="requestCopy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal text-neutral-700">
                              Request copy of my personal information (separate CCPA right)
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    {form.formState.errors.optOutSale && (
                      <p className="text-sm font-medium text-destructive">{form.formState.errors.optOutSale.message}</p>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="reasonForRequest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black-900">Reason for request (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., I no longer use your services." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="specificConcerns"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black-900">Specific concerns (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., I am concerned about data sharing with third-party advertisers."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-gold-500 text-black-900 font-semibold px-8 py-4 rounded-md hover:bg-gold-400 transition-all duration-300 tracking-wide uppercase text-sm"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Opt-Out Request"}
                  </Button>

                  {submissionStatus === "success" && <p className="text-green-600 mt-4">{submissionMessage}</p>}
                  {submissionStatus === "error" && <p className="text-red-600 mt-4">{submissionMessage}</p>}
                </form>
              </Form>
            </div>

            <h3 className="font-display text-xl font-semibold text-black-900 mb-3">Option 2: Contact Methods</h3>
            <div className="bg-neutral-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-black-900 mb-2">Email</h4>
              <p className="text-neutral-700 mb-3">
                <a
                  href="mailto:info@innovationsynergyai.com?subject=Do%20Not%20Sell%20My%20Personal%20Information%20Request"
                  className="underline text-gold-500 hover:text-gold-400 transition-colors"
                >
                  info@innovationsynergyai.com
                </a>
              </p>
              <p className="text-neutral-700 text-sm mb-4">
                Include in your email: Your full name and contact information, Specific opt-out preferences, Preferred
                verification method.
              </p>

              <h4 className="font-semibold text-black-900 mb-2">Phone</h4>
              <p className="text-neutral-700 mb-3">
                <a href="tel:18007748229" className="underline text-gold-500 hover:text-gold-400 transition-colors">
                  1-800-PRIVACY (1-800-774-8229)
                </a>
              </p>
              <p className="text-neutral-700 text-sm mb-4">Available Monday-Friday, 9 AM - 6 PM EST</p>

              <h4 className="font-semibold text-black-900 mb-2">Mail</h4>
              <p className="text-neutral-700 text-sm">
                Innovation Synergy AI Inc.
                <br />
                Privacy Department - CCPA Opt-Out
                <br />
                [Complete Address to be Added]
                <br />
                Miami, FL [ZIP Code]
              </p>
            </div>

            <h3 className="font-display text-xl font-semibold text-black-900 mb-3">Option 3: Authorized Agent</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You may designate an authorized agent to make requests on your behalf. The agent must:
            </p>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>• Provide written authorization signed by you</li>
              <li>• Verify their own identity</li>
              <li>• Provide proof of their authority to act on your behalf</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">Verification Process</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              To protect your privacy, we must verify your identity before processing opt-out requests:
            </p>

            <h3 className="font-display text-xl font-semibold text-black-900 mb-3">Individual Requests</h3>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>• Email Verification: We will send a confirmation link to your registered email</li>
              <li>• Phone Verification: We will call your registered phone number</li>
              <li>• Account Verification: Log into your account to confirm the request</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-black-900 mb-3">Business/Hotel Requests</h3>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>• Authorized Representative: Must provide business authorization</li>
              <li>• Account Manager: Contact your dedicated account manager</li>
              <li>• Legal Documentation: May require additional verification for business accounts</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">Processing Timeline</h2>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>• Acknowledgment: Within 10 business days of receiving your request</li>
              <li>• Processing: Within 45 business days of verification</li>
              <li>• Confirmation: You will receive written confirmation when complete</li>
              <li>• Effective Date: Opt-out takes effect immediately upon processing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">Global Privacy Control (GPC)</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We automatically recognize and honor Global Privacy Control (GPC) signals from your browser or device.
              When we detect a GPC signal, we will automatically:
            </p>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>• Opt you out of the sale of personal information</li>
              <li>• Opt you out of sharing for advertising purposes</li>
              <li>• Apply your preferences across all our services</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              To enable GPC, use a compatible browser or browser extension that supports the Global Privacy Control
              standard.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">Frequently Asked Questions</h2>
            <ul className="text-neutral-700 mb-6 space-y-4">
              <li>
                <strong>Will opting out affect my service?</strong>
                <br />
                Core Isabella Concierge AI voice agent services will continue to function normally. However, some
                personalization features may be reduced.
              </li>
              <li>
                <strong>Can I opt back in later?</strong>
                <br />
                Yes, you can opt back in at any time by contacting us using the same methods listed above.
              </li>
              <li>
                <strong>Does this apply to business accounts?</strong>
                <br />
                Yes, but business account opt-outs may require additional verification and may affect service
                agreements.
              </li>
              <li>
                <strong>What about emergency situations?</strong>
                <br />
                Opt-out preferences do not apply to emergency response situations or when required by law.
              </li>
              <li>
                <strong>How do I know my request was processed?</strong>
                <br />
                You will receive written confirmation via your preferred contact method within 45 business days.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">Contact Information</h2>
            <div className="bg-black-900 text-white-50 p-6 rounded-lg">
              <h3 className="font-display text-lg font-semibold mb-3">CCPA and Privacy Rights Questions</h3>
              <p className="mb-2">
                <strong>Privacy Officer:</strong>{" "}
                <a
                  href="mailto:info@innovationsynergyai.com"
                  className="underline text-gold-500 hover:text-gold-400 transition-colors"
                >
                  info@innovationsynergyai.com
                </a>
              </p>
              <p className="mb-2">
                <strong>CCPA Hotline:</strong>{" "}
                <a href="tel:18007748229" className="underline text-gold-500 hover:text-gold-400 transition-colors">
                  1-800-PRIVACY (1-800-774-8229)
                </a>
              </p>
              <p className="mb-4">
                <strong>Online Portal:</strong>{" "}
                <Link href="/do-not-sell" className="underline text-gold-500 hover:text-gold-400 transition-colors">
                  miamiagents.ai/privacy-request
                </Link>
              </p>
              <p className="mb-4">
                <strong>Mail:</strong>
                <br />
                Innovation Synergy AI Inc.
                <br />
                Privacy Department
                <br />
                [Complete Address to be Added]
                <br />
                Miami, FL [ZIP Code]
              </p>
              <h3 className="font-display text-lg font-semibold mb-3 mt-6">General Support</h3>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@innovationsynergyai.com"
                  className="underline text-gold-500 hover:text-gold-400 transition-colors"
                >
                  info@innovationsynergyai.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> Available via consultation booking
              </p>
              <p className="mb-4">
                <strong>Website:</strong>{" "}
                <a
                  href="https://miamiagents.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gold-500 hover:text-gold-400 transition-colors"
                >
                  miamiagents.ai
                </a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-black-900 mb-4">Legal Information</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              This Do Not Sell My Personal Information page is part of our comprehensive privacy framework and should be
              read in conjunction with our:
            </p>
            <ul className="text-neutral-700 mb-6 space-y-1">
              <li>
                •{" "}
                <Link href="/privacy-policy" className="underline hover:text-steel-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                •{" "}
                <Link href="/terms-of-service" className="underline hover:text-steel-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                •{" "}
                <Link href="/cookie-policy" className="underline hover:text-steel-500 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                •{" "}
                <Link href="/ai-disclosure" className="underline hover:text-steel-500 transition-colors">
                  AI Disclosure Notice
                </Link>
              </li>
            </ul>
            <p className="text-sm text-neutral-600">
              Effective Date: January 31, 2025 | Last Updated: January 31, 2025 | Version: 1.0
            </p>
            <p className="text-sm text-neutral-600 mt-4">
              Remember: You have the right to opt out of the sale or sharing of your personal information at any time.
              We are committed to honoring your privacy choices while continuing to provide excellent AI voice agent
              services.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
