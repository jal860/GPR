import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Zap, Search, Hammer, Layers, Shield, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
            <Link href="/services" className="text-[#007BFF]">
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
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Comprehensive Ground Penetrating Radar services for safe, accurate underground detection and concrete
            analysis throughout Central Florida.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Utility Locating */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=600')`,
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="w-8 h-8 text-[#007BFF]" />
                  <h2 className="text-2xl font-bold text-[#2D2D2D]">Utility Locating</h2>
                </div>
                <p className="text-[#CCCCCC] mb-6">
                  Pinpoint underground pipes, cables, and conduits before you dig. Our advanced GPR technology
                  identifies water lines, sewer pipes, electrical cables, gas lines, and telecommunications
                  infrastructure with precision.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Water and sewer line detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Electrical and telecommunications cables</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Gas line identification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Depth and location mapping</span>
                  </div>
                </div>
                <Button className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">Learn More</Button>
              </CardContent>
            </Card>

            {/* Concrete Scanning */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=600')`,
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Hammer className="w-8 h-8 text-[#007BFF]" />
                  <h2 className="text-2xl font-bold text-[#2D2D2D]">Concrete Scanning</h2>
                </div>
                <p className="text-[#CCCCCC] mb-6">
                  Identify rebar, post-tension cables, and voids before coring or cutting. Essential for safe
                  renovation, drilling, and construction work on concrete structures.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Rebar location and spacing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Post-tension cable detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Void and air pocket identification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Safe coring and cutting guidance</span>
                  </div>
                </div>
                <Button className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">Learn More</Button>
              </CardContent>
            </Card>

            {/* Triple-Channel GPR */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=600')`,
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Layers className="w-8 h-8 text-[#007BFF]" />
                  <h2 className="text-2xl font-bold text-[#2D2D2D]">Triple-Channel GPR Scanning</h2>
                </div>
                <p className="text-[#CCCCCC] mb-6">
                  Enhanced imaging clarity for safer decisions. Our advanced triple-channel technology provides
                  comprehensive detection across multiple frequencies simultaneously.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Multi-frequency scanning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Enhanced depth penetration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Superior image clarity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Comprehensive detection coverage</span>
                  </div>
                </div>
                <Button className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">Learn More</Button>
              </CardContent>
            </Card>

            {/* Construction Site Clearance */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=600')`,
                }}
              />
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-[#007BFF]" />
                  <h2 className="text-2xl font-bold text-[#2D2D2D]">Construction Site Clearance</h2>
                </div>
                <p className="text-[#CCCCCC] mb-6">
                  Reduce costly delays and avoid liabilities with pre-build scans. Comprehensive site assessment to
                  identify all underground hazards before construction begins.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Pre-construction site assessment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Hazard identification and mapping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Risk mitigation planning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-[#2D2D2D]">Compliance documentation</span>
                  </div>
                </div>
                <Button className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why GPR is Essential */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Why Ground Penetrating Radar is Essential</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
              Avoid costly mistakes, ensure worker safety, and prevent project delays with professional GPR services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <AlertTriangle className="w-12 h-12 text-[#FF6F00] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">Prevent Accidents</h3>
                <p className="text-[#CCCCCC]">
                  Avoid dangerous utility strikes that can cause injuries, service outages, and environmental hazards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">$</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">Save Money</h3>
                <p className="text-[#CCCCCC]">
                  Prevent expensive repairs, fines, and project delays caused by accidental utility damage.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">Ensure Compliance</h3>
                <p className="text-[#CCCCCC]">
                  Meet regulatory requirements and industry standards for safe excavation and construction practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
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
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
              From initial consultation to detailed reporting, we ensure every step delivers precision and value.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-[#CCCCCC] text-sm">Discuss your project needs and site requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Site Survey</h3>
              <p className="text-[#CCCCCC] text-sm">Comprehensive GPR scanning of the designated area</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analysis</h3>
              <p className="text-[#CCCCCC] text-sm">Expert interpretation of GPR data and findings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Reporting</h3>
              <p className="text-[#CCCCCC] text-sm">Detailed report with maps, depths, and recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#007BFF] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free estimate on your Ground Penetrating Radar needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white">
              Get a Free Estimate
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
