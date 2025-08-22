import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
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
          <Link href="/blog" className="text-gray-600 hover:text-black transition-colors">
            Blog
          </Link>
        </nav>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">Contact Us</Button>
      </header>

      {/* Contact Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-8">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your real estate journey? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-xl animate-in fade-in slide-in-from-left-6 duration-1000">
            <h2 className="text-2xl font-light text-black mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="h-12 rounded-full border-gray-200" />
                <Input placeholder="Last Name" className="h-12 rounded-full border-gray-200" />
              </div>
              <Input placeholder="Email Address" type="email" className="h-12 rounded-full border-gray-200" />
              <Input placeholder="Phone Number" type="tel" className="h-12 rounded-full border-gray-200" />
              <Input placeholder="Subject" className="h-12 rounded-full border-gray-200" />
              <Textarea placeholder="Your Message" className="min-h-32 rounded-2xl border-gray-200 resize-none" />
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 h-12 w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="animate-in fade-in slide-in-from-right-6 duration-1000 delay-300">
            <h2 className="text-2xl font-light text-black mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Email</h3>
                  <p className="text-gray-600">info@nestify.com</p>
                  <p className="text-gray-600">support@nestify.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Address</h3>
                  <p className="text-gray-600">123 Real Estate Ave</p>
                  <p className="text-gray-600">Downtown District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
