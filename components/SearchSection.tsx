"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useState } from "react"

export default function SearchSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <section className="relative px-4 sm:px-6 py-6 sm:py-8 max-w-7xl mx-auto">
      {/* Advanced Search Overlay */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-xs sm:max-w-2xl lg:max-w-4xl px-4 sm:px-6 transition-all duration-500 ${
          isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Card className="bg-white shadow-2xl border-0 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-6 duration-500 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-light" style={{ color: "#004c98" }}>
              Find Your Perfect Home
            </h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-[#ff6900]"
              onClick={() => setIsSearchOpen(false)}
            >
              ✕
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                placeholder="Enter location..."
                className="pl-8 sm:pl-10 h-10 sm:h-12 rounded-full border-gray-200 focus:border-[#ff6900] text-sm sm:text-base"
              />
            </div>
            <Select>
              <SelectTrigger className="h-10 sm:h-12 rounded-full border-gray-200 focus:border-[#ff6900] text-sm sm:text-base">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-10 sm:h-12 rounded-full border-gray-200 focus:border-[#ff6900] text-sm sm:text-base">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sale">For Sale</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
                <SelectItem value="lease">For Lease</SelectItem>
                <SelectItem value="investment">Investment</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-10 sm:h-12 rounded-full border-gray-200 focus:border-[#ff6900] text-sm sm:text-base">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-300k">$0 - $300k</SelectItem>
                <SelectItem value="300k-500k">$300k - $500k</SelectItem>
                <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                <SelectItem value="2m+">$2M+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Select>
              <SelectTrigger className="h-10 sm:h-12 rounded-full border-gray-200 focus:border-[#ff6900] text-sm sm:text-base">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1+ Bedroom</SelectItem>
                <SelectItem value="2">2+ Bedrooms</SelectItem>
                <SelectItem value="3">3+ Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
                <SelectItem value="5">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-10 sm:h-12 rounded-full border-gray-200 focus:border-[#ff6900] text-sm sm:text-base">
                <SelectValue placeholder="Bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1+ Bathroom</SelectItem>
                <SelectItem value="2">2+ Bathrooms</SelectItem>
                <SelectItem value="3">3+ Bathrooms</SelectItem>
                <SelectItem value="4">4+ Bathrooms</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-10 sm:h-12 rounded-full border-gray-200 focus:border-[#ff6900] text-sm sm:text-base">
                <SelectValue placeholder="Square Feet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1000">0 - 1,000 sq ft</SelectItem>
                <SelectItem value="1000-2000">1,000 - 2,000 sq ft</SelectItem>
                <SelectItem value="2000-3000">2,000 - 3,000 sq ft</SelectItem>
                <SelectItem value="3000+">3,000+ sq ft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              className="text-white hover:bg-[#e55a00] rounded-full px-6 sm:px-8 h-10 sm:h-12 flex-1 text-sm sm:text-base"
              style={{ backgroundColor: "#ff6900" }}
            >
              <Search className="w-4 h-4 mr-2" />
              Search Properties
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-4 sm:px-6 h-10 sm:h-12 bg-transparent border-[#ff6900] text-[#ff6900] hover:bg-[#ff6900] hover:text-white text-sm sm:text-base"
            >
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </Card>
      </div>

      {/* Search Trigger Button */}
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Button
          className="text-white hover:bg-[#e55a00] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "#ff6900" }}
          onClick={() => setIsSearchOpen(true)}
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Advanced Property Search
        </Button>
      </div>
    </section>
  )
}
