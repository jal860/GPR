import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, CheckCircle, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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
            <Link href="/contact" className="hover:text-[#007BFF] transition-colors">
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
      <section className="relative h-screen bg-gradient-to-br from-[#2D2D2D] to-[#007BFF] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ground Penetrating Radar</h1>
          <p className="text-2xl md:text-3xl mb-8 text-[#CCCCCC]">Precision Below the Surface</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white px-8 py-4 text-lg">
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2D2D2D] px-8 py-4 text-lg bg-transparent"
            >
              Schedule a Scan
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-[#007BFF] mb-4" />
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">Serving Central Florida</h3>
              <p className="text-[#CCCCCC]">Orlando, Kissimmee, Winter Park, Sanford and surrounding areas</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-[#007BFF] mb-4" />
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">Trusted by Leading Contractors</h3>
              <p className="text-[#CCCCCC]">Working with utility providers and construction professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-[#007BFF] mb-4" />
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">US Radar Quantum GPR</h3>
              <p className="text-[#CCCCCC]">Advanced technology for precise underground detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-8">Trusted by Industry Leaders</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-3xl font-bold text-[#007BFF]">AT&T</div>
            <div className="text-2xl font-semibold text-[#2D2D2D]">Central Florida Contractors</div>
            <div className="text-2xl font-semibold text-[#2D2D2D]">Utility Providers</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-[#2D2D2D] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Specialties</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
              Line Pros GPR provides comprehensive underground utility detection and concrete scanning services using
              advanced Ground Penetrating Radar technology for safer, more efficient projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#007BFF]/10 border-[#007BFF]/20 hover:bg-[#007BFF]/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div
                  className="h-32 mb-4 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                  }}
                />
                <h3 className="text-lg font-semibold mb-2">Utility Locating</h3>
                <p className="text-sm text-[#CCCCCC]">
                  Pinpoint underground pipes, cables, and conduits before you dig
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#007BFF]/10 border-[#007BFF]/20 hover:bg-[#007BFF]/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div
                  className="h-32 mb-4 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                  }}
                />
                <h3 className="text-lg font-semibold mb-2">Concrete Scanning</h3>
                <p className="text-sm text-[#CCCCCC]">Identify rebar, post-tension cables, and voids before coring</p>
              </CardContent>
            </Card>

            <Card className="bg-[#007BFF]/10 border-[#007BFF]/20 hover:bg-[#007BFF]/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div
                  className="h-32 mb-4 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                  }}
                />
                <h3 className="text-lg font-semibold mb-2">Triple-Channel GPR</h3>
                <p className="text-sm text-[#CCCCCC]">Enhanced imaging clarity for safer decisions</p>
              </CardContent>
            </Card>

            <Card className="bg-[#007BFF]/10 border-[#007BFF]/20 hover:bg-[#007BFF]/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div
                  className="h-32 mb-4 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                  }}
                />
                <h3 className="text-lg font-semibold mb-2">Site Clearance</h3>
                <p className="text-sm text-[#CCCCCC]">Reduce costly delays and avoid liabilities</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Why Choose Line Pros GPR?</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Triple-Channel Scanning</h3>
              <p className="text-[#CCCCCC]">Advanced multi-frequency technology for comprehensive detection</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Non-Destructive</h3>
              <p className="text-[#CCCCCC]">Clean approach that preserves your property and surfaces</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Fast Reporting</h3>
              <p className="text-[#CCCCCC]">Clear, detailed reports delivered quickly for project continuity</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Experienced Team</h3>
              <p className="text-[#CCCCCC]">Proven expertise with large-scale and residential projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#007BFF] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Scan Below the Surface?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get precise underground utility detection and concrete scanning services from Central Florida's trusted GPR
            specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white">
              Request Your Quote Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#007BFF] bg-transparent"
            >
              Call (407) 900-4691
            </Button>
          </div>
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
