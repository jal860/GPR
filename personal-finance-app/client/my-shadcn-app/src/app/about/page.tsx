import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Zap, CheckCircle, Users, Award, Clock } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-[#007BFF]">
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
          <h1 className="text-5xl font-bold mb-6">About Line Pros GPR</h1>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Central Florida's premier Ground Penetrating Radar specialists, delivering precision underground detection
            services with cutting-edge technology and unmatched expertise.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">Who We Are</h2>
              <div className="w-24 h-1 bg-[#007BFF] mb-6"></div>
              <p className="text-lg text-[#CCCCCC] mb-6">
                Line Pros GPR is a Central Florida-based utility locating service using advanced Ground Penetrating
                Radar (GPR) technology. We specialize in identifying underground utilities and structures for
                construction projects, renovations, and safety-critical operations.
              </p>
              <p className="text-lg text-[#CCCCCC] mb-8">
                Our team combines years of industry experience with state-of-the-art US Radar Quantum GPR technology to
                provide accurate, reliable, and comprehensive underground detection services throughout the Central
                Florida region.
              </p>
              <Button className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">See Our Services</Button>
            </div>
            <div
              className="h-96 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">What Makes Us Different</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
              Our commitment to precision, advanced technology, and exceptional service sets us apart in the underground
              detection industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">Triple-Channel Scanning</h3>
                <p className="text-[#CCCCCC]">
                  Advanced multi-frequency technology provides enhanced imaging clarity and comprehensive detection
                  capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">Clean, Non-Destructive</h3>
                <p className="text-[#CCCCCC]">
                  Our GPR approach preserves your property and surfaces while providing accurate underground detection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">Experienced Team</h3>
                <p className="text-[#CCCCCC]">
                  Proven expertise with both large-scale commercial projects and residential applications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">Fast, Clear Reporting</h3>
                <p className="text-[#CCCCCC]">
                  Detailed reports delivered quickly to keep your projects on schedule and within budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Technology */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              }}
            />
            <div>
              <h2 className="text-4xl font-bold mb-6">Advanced GPR Technology</h2>
              <div className="w-24 h-1 bg-[#007BFF] mb-6"></div>
              <p className="text-lg text-[#CCCCCC] mb-6">
                We utilize the latest US Radar Quantum GPR technology, featuring triple-channel scanning capabilities
                that provide unparalleled accuracy and depth penetration for underground utility detection.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Multi-Frequency Detection</h4>
                    <p className="text-[#CCCCCC]">
                      Simultaneous scanning at multiple frequencies for comprehensive utility identification
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Imaging</h4>
                    <p className="text-[#CCCCCC]">
                      Instant visualization of underground structures and utilities during scanning
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#007BFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Precise Depth Measurement</h4>
                    <p className="text-[#CCCCCC]">
                      Accurate depth calculations for safe excavation and construction planning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">Our Commitment to Excellence</h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-8"></div>
          <p className="text-xl text-[#CCCCCC] mb-8">
            At Line Pros GPR, we're committed to providing the highest level of service and accuracy in underground
            detection. Our goal is to help you avoid costly mistakes, ensure worker safety, and keep your projects on
            schedule.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Award className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Quality Assurance</h3>
              <p className="text-[#CCCCCC]">Every scan is thoroughly reviewed and verified for accuracy</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Customer Focus</h3>
              <p className="text-[#CCCCCC]">Dedicated to exceeding client expectations on every project</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Safety First</h3>
              <p className="text-[#CCCCCC]">Preventing accidents and protecting infrastructure is our priority</p>
            </div>
          </div>
          <Button size="lg" className="bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white">
            Get Started Today
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
