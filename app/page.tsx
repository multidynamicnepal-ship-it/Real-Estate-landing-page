"use client"

import Header from "@/components/Header"
import SearchSection from "@/components/SearchSection"
import HeroSection from "@/components/HeroSection"
import PropertyCard from "@/components/PropertyCard"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Star } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <SearchSection />

      <HeroSection />

      {/* Services Section - Made fully responsive with better mobile layout */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-xs sm:text-sm text-gray-500 mb-4">Services</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8" style={{ color: "#004c98" }}>
            Explore our range of expert
            <br />
            real estate services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Services List */}
          <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-left-6 duration-1000 delay-200">
            <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-200 hover:bg-[#fabea0] hover:bg-opacity-30 transition-colors duration-300 rounded-lg px-2">
              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2" style={{ color: "#004c98" }}>
                  Property buying
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our expert team helps you find and secure your dream property, providing comprehensive market analysis
                  and negotiation strategies for buying experience.
                </p>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#ff6900] ml-2">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {["Property selling", "Rental management", "Property management", "Real estate consulting"].map(
              (service, i) => (
                <div
                  key={service}
                  className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-200 hover:bg-[#fabea0] hover:bg-opacity-30 transition-colors duration-300 rounded-lg px-2"
                >
                  <h3 className="text-base sm:text-lg font-medium" style={{ color: "#004c98" }}>
                    {service}
                  </h3>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#ff6900]">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              ),
            )}
          </div>

          {/* Services Image */}
          <div className="relative animate-in fade-in slide-in-from-right-6 duration-1000 delay-400">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-500 hover:scale-105 transition-transform">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Modern house with pool"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section - Using PropertyCard component with responsive grid */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-xs sm:text-sm text-gray-500 mb-4">Properties</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light" style={{ color: "#004c98" }}>
            Discover homes tailored to
            <br />
            your lifestyle and needs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <PropertyCard key={i} id={i} delay={i * 150} />
          ))}
        </div>
      </section>

      {/* Team Section - Made responsive with better mobile layout */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="lg:w-1/2 animate-in fade-in slide-in-from-left-6 duration-1000">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional real estate agent"
                width={600}
                height={500}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="lg:w-1/2 animate-in fade-in slide-in-from-right-6 duration-1000 delay-300 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6" style={{ color: "#004c98" }}>
              Meet your dedicated
              <br />
              real estate expert
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              With over 10 years of experience in the real estate industry, our team provides personalized service and
              expert guidance throughout your property journey.
            </p>
            <Button
              className="text-white hover:bg-[#e55a00] rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
              style={{ backgroundColor: "#ff6900" }}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section - Improved responsive layout and spacing */}
      <section
        className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        style={{ backgroundColor: "#fabea0" }}
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-3 sm:mb-4" style={{ color: "#004c98" }}>
            Experience unmatched
            <br />
            convenience and reliability
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our comprehensive approach ensures every aspect of your real estate journey is handled with precision and
            care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "Market Analysis", desc: "Comprehensive market insights and property valuations" },
            { title: "Legal Support", desc: "Expert legal guidance throughout the transaction process" },
            { title: "24/7 Support", desc: "Round-the-clock assistance for all your real estate needs" },
          ].map((feature, i) => (
            <div
              key={i}
              className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center"
                style={{ backgroundColor: "#ff6900" }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: "#004c98" }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics and Benefits sections with responsive improvements */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8" style={{ color: "#004c98" }}>
            Why we stand out in finding
            <br />
            your perfect home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            { number: "2K+", label: "Properties Sold", desc: "Successfully completed transactions" },
            { number: "98%", label: "Client Satisfaction", desc: "Happy customers and referrals" },
            { number: "15+", label: "Years Experience", desc: "Proven track record in real estate" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 sm:p-8 hover:bg-[#fabea0] hover:bg-opacity-30 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2" style={{ color: "#ff6900" }}>
                {stat.number}
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: "#004c98" }}>
                {stat.label}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: "🏠", title: "Personalized Service", desc: "Tailored approach for each client's unique needs" },
            { icon: "📊", title: "Market Expertise", desc: "Deep knowledge of local market trends and pricing" },
            { icon: "🤝", title: "Trusted Network", desc: "Established relationships with industry professionals" },
          ].map((benefit, i) => (
            <div
              key={i}
              className="text-center p-4 sm:p-6 hover:bg-[#fabea0] hover:bg-opacity-30 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000"
              style={{ animationDelay: `${(i + 3) * 200}ms` }}
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{benefit.icon}</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: "#004c98" }}>
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section - Improved responsive layout */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8" style={{ color: "#004c98" }}>
            Hear from our clients about
            <br />
            their experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Homebuyer",
              text: "The team made our home buying process incredibly smooth. Their expertise and dedication helped us find our dream home.",
            },
            {
              name: "Michael Chen",
              role: "Property Investor",
              text: "Outstanding service and market knowledge. They helped me build a profitable real estate portfolio.",
            },
          ].map((testimonial, i) => (
            <Card
              key={i}
              className="p-6 sm:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000"
              style={{ animationDelay: `${i * 300}ms` }}
            >
              <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" style={{ color: "#ff6900" }} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm sm:text-base" style={{ color: "#004c98" }}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Journey CTA Section - Improved responsive layout */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 animate-in fade-in slide-in-from-bottom-4 duration-1000"
          style={{ backgroundColor: "#fabea0" }}
        >
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Luxury interior"
                width={200}
                height={200}
                className="rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Modern kitchen"
                width={200}
                height={200}
                className="rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6" style={{ color: "#004c98" }}>
              Your journey to finding
              <br />
              the perfect home starts
              <br />
              with us
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Let our experienced team guide you through every step of your real estate journey, from initial
              consultation to closing day.
            </p>
            <Button
              className="text-white hover:bg-[#e55a00] rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
              style={{ backgroundColor: "#ff6900" }}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section - Improved responsive grid and card layout */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8" style={{ color: "#004c98" }}>
            Stay updated with the latest
            <br />
            real estate news
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: "Market Trends 2024",
              desc: "Understanding the current real estate market dynamics",
              date: "Dec 15, 2024",
            },
            { title: "Home Buying Tips", desc: "Essential advice for first-time home buyers", date: "Dec 10, 2024" },
            { title: "Investment Strategies", desc: "Smart approaches to real estate investing", date: "Dec 5, 2024" },
          ].map((article, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000 group"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=250&width=350&query=real estate blog article ${i + 1}`}
                  alt={article.title}
                  width={350}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-xs text-gray-500 mb-2">{article.date}</div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: "#004c98" }}>
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{article.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA Section - Improved responsive layout */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8" style={{ color: "#004c98" }}>
          Take the first step toward your
          <br />
          dream home with us
        </h2>
        <Button
          className="text-white hover:bg-[#e55a00] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105 transition-transform duration-300"
          style={{ backgroundColor: "#ff6900" }}
        >
          Get Started Today
        </Button>
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full"></div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full"></div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full"></div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
