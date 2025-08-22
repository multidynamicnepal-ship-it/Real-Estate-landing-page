import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className="text-white py-12 sm:py-16 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000"
      style={{ backgroundColor: "#004c98" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://multidynamic.com.au/assets/images/logo/logo.png"
                alt="MultiDynamic Logo"
                width={100}
                height={32}
                className="object-contain w-20 sm:w-24"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in finding the perfect home. Expert guidance, personalized service, and unmatched
              results.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services/buying" className="hover:text-[#ff6900] transition-colors">
                  Property Buying
                </Link>
              </li>
              <li>
                <Link href="/services/selling" className="hover:text-[#ff6900] transition-colors">
                  Property Selling
                </Link>
              </li>
              <li>
                <Link href="/services/rental" className="hover:text-[#ff6900] transition-colors">
                  Rental Management
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-[#ff6900] transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-[#ff6900] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#ff6900] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#ff6900] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ff6900] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/social/linkedin" className="hover:text-[#ff6900] transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="/social/twitter" className="hover:text-[#ff6900] transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/social/instagram" className="hover:text-[#ff6900] transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="/social/facebook" className="hover:text-[#ff6900] transition-colors">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-6 sm:pt-8 text-center">
          <p className="text-gray-300 text-xs sm:text-sm">
            © 2024 MultiDynamic. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-[#ff6900] transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-[#ff6900] transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
