import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

export default function Properties() {
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
          <Link href="/properties" className="text-black font-medium">
            Properties
          </Link>
          <Link href="/agents" className="text-gray-600 hover:text-black transition-colors">
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

      {/* Search Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-8">Find Your Perfect Property</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of premium properties tailored to your lifestyle and budget.
          </p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Enter location..." className="pl-10 h-12 rounded-full border-gray-200" />
            </div>
            <Select>
              <SelectTrigger className="h-12 rounded-full border-gray-200">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-12 rounded-full border-gray-200">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-500k">$0 - $500k</SelectItem>
                <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                <SelectItem value="2m+">$2M+</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full h-12 px-8">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                <Image
                  src={`/placeholder.svg?height=300&width=400&query=luxury modern house exterior ${i}`}
                  alt={`Property ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs">For Sale</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-black mb-2">Modern Family Home</h3>
                <p className="text-gray-600 text-sm mb-2">123 Oak Street, Downtown</p>
                <p className="text-gray-600 text-sm mb-4">4 bed • 3 bath • 2,400 sq ft</p>
                <p className="text-black font-bold text-xl">${(850000 + i * 50000).toLocaleString()}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
