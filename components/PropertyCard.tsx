import { Card } from "@/components/ui/card"
import Image from "next/image"

interface PropertyCardProps {
  id: number
  title?: string
  bedrooms?: number
  bathrooms?: number
  sqft?: number
  price?: string
  delay?: number
}

export default function PropertyCard({
  id,
  title = "Modern Family Home",
  bedrooms = 4,
  bathrooms = 3,
  sqft = 2400,
  price = "$850,000",
  delay = 0,
}: PropertyCardProps) {
  return (
    <Card
      className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
        <Image
          src={`/placeholder.svg?height=300&width=400&query=luxury modern house exterior ${id}`}
          alt={`Property ${id}`}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div
          className="absolute top-2 sm:top-4 left-2 sm:left-4 text-white px-2 sm:px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: "#ff6900" }}
        >
          View Details
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="font-medium mb-2 text-sm sm:text-base" style={{ color: "#004c98" }}>
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-2">
          {bedrooms} bed • {bathrooms} bath • {sqft.toLocaleString()} sq ft
        </p>
        <p className="font-semibold text-sm sm:text-base" style={{ color: "#ff6900" }}>
          {price}
        </p>
      </div>
    </Card>
  )
}
