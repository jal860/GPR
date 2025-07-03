import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Zap, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#2D2D2D] text-white px-4 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#007BFF] rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl">Line Pros GPR</div>
              <div className="text-xs text-[#CCCCCC]">Precision Below the Surface</div>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#007BFF] transition-colors">
              HOME
            </Link>
            <Link href="/about" className="hover:text-[#007BFF] transition-colors">
              ABOUT
            </Link>
            <Link href="/services" className="hover:text-[#007BFF] transition-colors">
              SERVICES
            </Link>
            <Link href="/service-area" className="hover:text-[#007BFF] transition-colors">
              SERVICE AREA
            </Link>
            <Link href="/contact" className="text-[#007BFF]">
              CONTACT
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-4 h-4" />
            <span className="text-sm">(407) 900-4691</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#2D2D2D] to-[#007BFF] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Ready to get started with professional Ground Penetrating Radar services? Contact Line Pros GPR today for a
            free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">Phone</h3>
                <p className="text-2xl font-bold text-[#007BFF] mb-2">(407) 900-4691</p>
                <p className="text-[#CCCCCC]">Call us for immediate assistance</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">Email</h3>
                <p className="text-xl font-bold text-[#007BFF] mb-2">admin@lineprosgpr.com</p>
                <p className="text-[#CCCCCC]">Send us your project details</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">Service Area</h3>
                <p className="text-xl font-bold text-[#007BFF] mb-2">Central Florida</p>
                <p className="text-[#CCCCCC]">Orlando and surrounding areas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-[#2D2D2D] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Your Free Quote</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#CCCCCC]">Fill out the form below and we will be in contact shortly.</p>
            <p className="text-sm text-[#CCCCCC] mt-2">"*" indicates required fields</p>
          </div>

          <Card className="bg-white text-[#2D2D2D]">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input placeholder="Enter your first name" className="border-[#CCCCCC]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input placeholder="Enter your last name" className="border-[#CCCCCC]" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" placeholder="Enter your email" className="border-[#CCCCCC]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input type="tel" placeholder="Enter your phone number" className="border-[#CCCCCC]" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <Input placeholder="Enter your company name (optional)" className="border-[#CCCCCC]" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location (City or County) *</label>
                    <Input placeholder="Where is your project located?" className="border-[#CCCCCC]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed *</label>
                    <Select>
                      <SelectTrigger className="border-[#CCCCCC]">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utility-locating">Utility Locating</SelectItem>
                        <SelectItem value="concrete-scanning">Concrete Scanning</SelectItem>
                        <SelectItem value="triple-channel-gpr">Triple-Channel GPR</SelectItem>
                        <SelectItem value="site-clearance">Construction Site Clearance</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    className="border-[#CCCCCC] min-h-[120px]"
                  />
                </div>

                <div className="text-sm text-[#CCCCCC] bg-[#F8F9FA] p-4 rounded">
                  <p className="mb-2">
                    By providing my contact information to Line Pros GPR, I agree and acknowledge that Line Pros GPR may
                    send text messages to my wireless phone for any purpose, including marketing purposes.
                  </p>
                  <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white px-12 py-3">
                    Submit Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Clock className="w-16 h-16 text-[#007BFF] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Quick Response Guarantee</h2>
          <p className="text-xl text-[#CCCCCC] mb-8">
            We'll get back to you within 1 business day with a detailed quote and project timeline.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-[#007BFF] mx-auto mb-2" />
              <h4 className="font-semibold text-[#2D2D2D]">Fast Response</h4>
              <p className="text-sm text-[#CCCCCC]">Same-day response for urgent projects</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-[#007BFF] mx-auto mb-2" />
              <h4 className="font-semibold text-[#2D2D2D]">Detailed Quotes</h4>
              <p className="text-sm text-[#CCCCCC]">Comprehensive pricing with no hidden fees</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-[#007BFF] mx-auto mb-2" />
              <h4 className="font-semibold text-[#2D2D2D]">Flexible Scheduling</h4>
              <p className="text-sm text-[#CCCCCC]">Work around your project timeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-[#FF6F00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Need Emergency GPR Services?</h2>
          <p className="text-xl mb-8 opacity-90">
            For urgent utility locating or emergency site clearance, call us directly for immediate assistance.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#FF6F00] text-xl px-8 py-4 bg-transparent"
          >
            Call (407) 900-4691 Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#007BFF] rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold">Line Pros GPR</div>
                  <div className="text-xs text-[#CCCCCC]">Precision Below the Surface</div>
                </div>
              </div>
              <p className="text-[#CCCCCC] text-sm">
                Central Florida's trusted Ground Penetrating Radar specialists for utility locating and concrete
                scanning.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-[#CCCCCC]">
                <li>Utility Locating</li>
                <li>Concrete Scanning</li>
                <li>Triple-Channel GPR</li>
                <li>Construction Site Clearance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Area</h4>
              <ul className="space-y-2 text-sm text-[#CCCCCC]">
                <li>Orlando, FL</li>
                <li>Kissimmee, FL</li>
                <li>Winter Park, FL</li>
                <li>Sanford, FL</li>
                <li>Central Florida</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-[#CCCCCC]">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(407) 900-4691</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>admin@lineprosgpr.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Central Florida</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#CCCCCC]/20 mt-8 pt-8 text-center text-sm text-[#CCCCCC]">
            <p>&copy; 2025 Line Pros GPR. All rights reserved. | www.lineprosgpr.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
