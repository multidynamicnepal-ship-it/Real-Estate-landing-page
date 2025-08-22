"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="flex items-center gap-3">
        <Image
          src="https://multidynamic.com.au/assets/images/logo/logo.png"
          alt="MultiDynamic Logo"
          width={120}
          height={40}
          className="object-contain w-20 sm:w-24 md:w-32"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
        <Link href="/about" className="text-gray-600 hover:text-[#ff6900] transition-colors text-sm xl:text-base">
          About
        </Link>
        <Link href="/properties" className="text-gray-600 hover:text-[#ff6900] transition-colors text-sm xl:text-base">
          Properties
        </Link>
        <Link href="/agents" className="text-gray-600 hover:text-[#ff6900] transition-colors text-sm xl:text-base">
          Agents
        </Link>
        <Link href="/blog" className="text-gray-600 hover:text-[#ff6900] transition-colors text-sm xl:text-base">
          Blog
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden text-gray-600 hover:text-[#ff6900]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Desktop Contact Button */}
      <Link href="/contact" className="hidden lg:block">
        <Button
          className="text-white hover:bg-[#e55a00] rounded-full px-4 xl:px-6 text-sm xl:text-base"
          style={{ backgroundColor: "#ff6900" }}
        >
          Contact Us
        </Button>
      </Link>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t lg:hidden z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/about" className="text-gray-600 hover:text-[#ff6900] transition-colors py-2">
              About
            </Link>
            <Link href="/properties" className="text-gray-600 hover:text-[#ff6900] transition-colors py-2">
              Properties
            </Link>
            <Link href="/agents" className="text-gray-600 hover:text-[#ff6900] transition-colors py-2">
              Agents
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#ff6900] transition-colors py-2">
              Blog
            </Link>
            <Link href="/contact" className="pt-2">
              <Button
                className="text-white hover:bg-[#e55a00] rounded-full px-6 w-full"
                style={{ backgroundColor: "#ff6900" }}
              >
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
