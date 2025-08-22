import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

export default function Blog() {
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
          <Link href="/agents" className="text-gray-600 hover:text-black transition-colors">
            Agents
          </Link>
          <Link href="/blog" className="text-black font-medium">
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
          <h1 className="text-4xl md:text-5xl font-light text-black mb-8">Real Estate Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest market trends, buying tips, and industry insights from our expert team.
          </p>
        </div>

        {/* Featured Article */}
        <Card className="overflow-hidden border-0 shadow-xl mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="aspect-[4/3] lg:aspect-auto bg-gray-100 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Featured article"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Dec 20, 2024
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Sarah Johnson
                </div>
              </div>
              <h2 className="text-3xl font-light text-black mb-4">Real Estate Market Outlook for 2025</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As we approach 2025, the real estate market continues to evolve. Our comprehensive analysis reveals key
                trends that will shape the industry in the coming year, from interest rate impacts to emerging buyer
                preferences.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 w-fit">
                Read Full Article
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "First-Time Home Buyer's Guide",
              category: "Buying Tips",
              date: "Dec 18, 2024",
              author: "Michael Chen",
            },
            {
              title: "Investment Property Strategies",
              category: "Investing",
              date: "Dec 15, 2024",
              author: "Emily Rodriguez",
            },
            { title: "Home Staging Secrets", category: "Selling Tips", date: "Dec 12, 2024", author: "David Thompson" },
            {
              title: "Market Analysis: Downtown District",
              category: "Market Trends",
              date: "Dec 10, 2024",
              author: "Lisa Wang",
            },
            { title: "Mortgage Rate Predictions", category: "Finance", date: "Dec 8, 2024", author: "Robert Miller" },
            {
              title: "Luxury Home Features in Demand",
              category: "Luxury Market",
              date: "Dec 5, 2024",
              author: "Sarah Johnson",
            },
          ].map((article, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000 group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=250&width=350&query=real estate blog ${article.category.toLowerCase()}`}
                  alt={article.title}
                  width={350}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">{article.category}</div>
                <h3 className="font-semibold text-black mb-3 line-clamp-2">{article.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
