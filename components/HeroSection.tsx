import { Star } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto text-center">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000"
        style={{ color: "#004c98" }}
      >
        Discover trusted
        <br />
        partner in{" "}
        <span className="inline-flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="House icon"
            width={60}
            height={60}
            className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          />
        </span>{" "}
        finding
        <br />
        the perfect home
      </h1>

      {/* Hero Image */}
      <div className="relative max-w-xs sm:max-w-md lg:max-w-2xl mx-auto mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Modern luxury house"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <div
            className="absolute top-2 sm:top-4 left-2 sm:left-4 backdrop-blur-sm rounded-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-[#004c98]"
            style={{ backgroundColor: "#fabea0" }}
          >
            Search for homes
          </div>
          <div
            className="absolute top-2 sm:top-4 right-2 sm:right-4 rounded-full p-1.5 sm:p-2"
            style={{ backgroundColor: "#ff6900" }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-gray-400" />
          ))}
        </div>
        <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">
          Guiding you through every step of your property and
        </p>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">ensuring I found the perfect home.</p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600">Verified Reviews</span>
        </div>
      </div>
    </section>
  )
}
