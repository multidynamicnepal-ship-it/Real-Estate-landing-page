import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto animate-in fade-in duration-700">
        <Link href="/" className="text-xl font-semibold text-black">
          Nestify™
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-black font-medium">
            About
          </Link>
          <Link href="/properties" className="text-gray-600 hover:text-black transition-colors">
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

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 leading-tight">About Nestify</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about helping people find their perfect home. With over 15 years of experience in real
            estate, we've built a reputation for excellence, integrity, and personalized service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-in fade-in slide-in-from-left-6 duration-1000">
            <h2 className="text-3xl font-light text-black mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2009, Nestify began with a simple mission: to make real estate transactions as smooth and
              stress-free as possible. What started as a small local agency has grown into a trusted name in the
              industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to uphold our founding principles of transparency, expertise, and client-first service,
              helping thousands of families find their dream homes.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-right-6 duration-1000 delay-300">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Nestify office"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
            />
          </div>
        </div>

        {/* Values Section */}
        <section className="py-16">
          <h2 className="text-3xl font-light text-black text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We believe in honest, transparent communication throughout every transaction.",
              },
              {
                title: "Excellence",
                desc: "We strive for the highest standards in everything we do, from service to results.",
              },
              { title: "Innovation", desc: "We embrace new technologies and methods to better serve our clients." },
            ].map((value, i) => (
              <Card
                key={i}
                className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-6 duration-1000"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <h3 className="text-xl font-semibold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
