import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServiceAreaPage() {
  const cities = [
    { name: "Orlando", description: "Downtown, International Drive, Airport area" },
    { name: "Kissimmee", description: "Tourist corridor, residential areas" },
    { name: "Winter Park", description: "Historic districts, commercial zones" },
    { name: "Sanford", description: "Historic downtown, industrial areas" },
    { name: "Altamonte Springs", description: "Business districts, residential" },
    { name: "Apopka", description: "Growing communities, commercial development" },
    { name: "Oviedo", description: "Residential neighborhoods, business parks" },
    { name: "Winter Garden", description: "Historic downtown, new developments" },
    { name: "Clermont", description: "Lake communities, commercial areas" },
    { name: "Mount Dora", description: "Historic areas, waterfront properties" },
    { name: "Leesburg", description: "Downtown district, residential areas" },
    { name: "Eustis", description: "Lakefront properties, commercial zones" },
  ]

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
            <Link href="/service-area" className="text-[#007BFF]">
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
          <h1 className="text-5xl font-bold mb-6">Service Area</h1>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Serving Central Florida with professional Ground Penetrating Radar services. From Orlando to surrounding
            communities, we're your local GPR specialists.
          </p>
        </div>
      </section>

      {/* Main Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Central Florida Coverage</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
              We proudly serve the greater Central Florida region with comprehensive GPR services for residential,
              commercial, and industrial projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-[#2D2D2D] mb-6">Primary Service Counties</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#007BFF]" />
                  <span className="text-lg text-[#2D2D2D]">Orange County</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#007BFF]" />
                  <span className="text-lg text-[#2D2D2D]">Osceola County</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#007BFF]" />
                  <span className="text-lg text-[#2D2D2D]">Seminole County</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#007BFF]" />
                  <span className="text-lg text-[#2D2D2D]">Lake County</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#007BFF]" />
                  <span className="text-lg text-[#2D2D2D]">Polk County (Northern)</span>
                </div>
              </div>
            </div>
            <div
              className="h-96 rounded-lg bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Cities We Serve</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
              Professional GPR services available throughout these Central Florida communities and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">{city.name}</h3>
                  <p className="text-[#CCCCCC] text-sm">{city.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Coverage */}
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
            <h2 className="text-4xl font-bold mb-4">Don't See Your Area?</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
              We regularly travel throughout Central Florida for projects. Contact us to discuss service availability in
              your specific location.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Coverage</h3>
              <p className="text-[#CCCCCC]">We can travel to project sites throughout the region for larger jobs</p>
            </div>
            <div>
              <Phone className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-[#CCCCCC]">Fast scheduling and response times for urgent projects</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 text-[#007BFF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Job Too Small</h3>
              <p className="text-[#CCCCCC]">From residential scans to large commercial projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types by Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Services Available Throughout Our Coverage Area</h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div
                  className="h-32 mb-4 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                  }}
                />
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Residential</h3>
                <p className="text-[#CCCCCC] text-sm">Home renovations, pool installations, landscaping projects</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div
                  className="h-32 mb-4 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                  }}
                />
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Commercial</h3>
                <p className="text-[#CCCCCC] text-sm">Office buildings, retail centers, parking structures</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div
                  className="h-32 mb-4 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                  }}
                />
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Industrial</h3>
                <p className="text-[#CCCCCC] text-sm">Manufacturing facilities, warehouses, distribution centers</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div
                  className="h-32 mb-4 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                  }}
                />
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">Municipal</h3>
                <p className="text-[#CCCCCC] text-sm">Roads, sidewalks, public facilities, infrastructure projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#007BFF] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Schedule Your GPR Service?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your project and confirm service availability in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white">
              Request a Quote
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
