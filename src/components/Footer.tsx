import { Heart, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950/80 text-slate-300 border-t border-slate-800/50">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-pink-400">Shoppora</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Your destination for premium products at unbeatable prices. Shop smarter, not harder.
            </p>
            <div className="flex gap-3">
              <motion.a 
                whileHover={{scale:1.2, color:"#f472b6"}}
                whileTap={{ scale:0.9}}
                href="#" className="text-slate-400 hover:text-pink-400 transition">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{scale:1.2, color:"#f472b6"}}
                whileTap={{ scale:0.9}}
                href="#" className="text-slate-400 hover:text-pink-400 transition">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{scale:1.2, color:"#f472b6"}}
                whileTap={{ scale:0.9}}
                href="#" className="text-slate-400 hover:text-pink-400 transition">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{scale:1.2, color:"#f472b6"}}
                whileTap={{ scale:0.9}}
                href="#" className="text-slate-400 hover:text-pink-400 transition">
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/electronics" className="hover:text-pink-400 transition">
                  Electronics
                </a>
              </li>
              <li>
                <a href="/fashion" className="hover:text-pink-400 transition">
                  Fashion
                </a>
              </li>
              <li>
                <a href="/home" className="hover:text-pink-400 transition">
                  Home & Living
                </a>
              </li>
              <li>
                <a href="/sports" className="hover:text-pink-400 transition">
                  Sports & Outdoors
                </a>
              </li>
              <li>
                <a href="/deals" className="hover:text-pink-400 transition">
                  Hot Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact" className="hover:text-pink-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-pink-400 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-pink-400 transition">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-pink-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/track" className="hover:text-pink-400 transition">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-pink-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-pink-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-pink-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-pink-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-pink-400 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-sm text-slate-400 mb-4">Get exclusive deals and latest updates straight to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                // Added w-full to ensure it uses available space
                className="w-full flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <motion.button 
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                // Added w-full sm:w-auto to stack on mobile
                className="w-full sm:w-auto px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800/50 bg-slate-950/60">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>&copy; {currentYear} Shoppora. All rights reserved. Made with <Heart className="w-4 h-4 text-pink-500 inline" /> by Team Shoppora.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-pink-400 transition">
                Privacy
              </a>
              <a href="/terms" className="hover:text-pink-400 transition">
                Terms
              </a>
              <a href="/accessibility" className="hover:text-pink-400 transition">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
