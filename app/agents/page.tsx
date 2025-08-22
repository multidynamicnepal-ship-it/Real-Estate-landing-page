import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Star, Phone, Mail } from "lucide-react"

export default function Agents() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto animate-in fade-in duration-700">
        <Link href="/" className="text-xl font-semibold text-black">
          Nestify™
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
            About
          </Link>
          <Link href="/properties" className="text-gray-600 hover:text-black transition-colors">
            Properties
          </Link>
          <Link href="/agents" className="text-black font-medium">
            Agents
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-black transition-colors">
            Blog
          </Link>
        </nav>
        <Link href="/contact">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">Contact Us</Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-8">Meet Our Expert Agents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of real estate professionals is dedicated to helping you achieve your property goals.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", role: "Senior Agent", experience: "12 years", sales: "200+ properties" },
            { name: "Michael Chen", role: "Property Specialist", experience: "8 years", sales: "150+ properties" },
            { name: "Emily Rodriguez", role: "Luxury Homes Expert", experience: "10 years", sales: "180+ properties" },
            { name: "David Thompson", role: "Commercial Agent", experience: "15 years", sales: "300+ properties" },
            { name: "Lisa Wang", role: "First-Time Buyer Specialist", experience: "6 years", sales: "120+ properties" },
            { name: "Robert Miller", role: "Investment Advisor", experience: "20 years", sales: "400+ properties" },
          ].map((agent, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000 group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=400&query=professional real estate agent ${i + 1}`}
                  alt={agent.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-black text-xl mb-1">{agent.name}</h3>
                <p className="text-gray-600 mb-4">{agent.role}</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-2">{agent.experience} experience</p>
                <p className="text-sm text-gray-600 mb-4">{agent.sales} sold</p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full flex-1">
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full flex-1 bg-transparent">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
