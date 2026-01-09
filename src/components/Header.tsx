import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShoppingCart, Search, Menu, User, Heart, ShoppingBag } from "lucide-react"
import LoginModal from './LoginModal'
import { useWishlist } from '../context/WishlistContext'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'




export default function Header(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const [loginOpen, setLoginOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { wishlist } = useWishlist()
  const wishlistCount = wishlist.length
  const { cart } = useCart()
  const cartCount = cart.length

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-100 w-full bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-6">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden p-2 hover:bg-purple-700 rounded-lg transition"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <div className="h-10 w-10 rounded-lg bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
              <ShoppingBag className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-pink-400">Shoppora</span>
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:block flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands and more..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"
            />
          </div>
        </form>

        {/* Right Icons with Text */}
        <div className="hidden md:flex items-center gap-2 sm:gap-6">
          <Link to="/wishlist" className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors duration-200 group">
            <div className="relative">
              <Heart className="h-6 w-6" fill="none" strokeWidth={2} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="hidden lg:inline font-medium text-sm group-hover:text-pink-400">Wishlist</span>
          </Link>

          <button onClick={() => setLoginOpen(true)} type="button" className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors duration-200 group">
            <User className="h-6 w-6" strokeWidth={2} />
            <span className="hidden lg:inline font-medium text-sm group-hover:text-pink-400">Login</span>
          </button>

          <Link to="/cart" className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors duration-200 group">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden lg:inline font-medium text-sm group-hover:text-pink-400">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <form onSubmit={handleSearch} className="md:hidden border-t border-white/20 px-6 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-sm"
          />
        </div>
      </form>
      </header>
      {loginOpen && <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />}
      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-90 md:hidden bg-indigo-950 border-t border-white/10 px-6 py-6 flex flex-col gap-6 overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-white text-lg">Home</Link>
            <Link to="/search" onClick={() => setMenuOpen(false)} className="text-white text-lg">Categories</Link>
          </nav>

          <div className="h-px bg-white/10 w-full" />

          {/* User Actions moved here */}
          <div className="flex flex-col gap-4">
            <Link to="/wishlist" className="flex items-center gap-3 text-white">
              <Heart className="h-6 w-6 text-pink-400" />
              <span>Wishlist ({wishlistCount})</span> {/* This updates automatically */}
            </Link>

            <Link to="/cart" className="flex items-center gap-3 text-white">
              <ShoppingCart className="h-6 w-6 text-pink-400" />
              <span>Cart ({cartCount})</span> {/* This updates automatically */}
            </Link>

            <button 
              onClick={() => {
                setLoginOpen(true);
                setMenuOpen(false);
              }} 
              className="flex items-center gap-3 text-white text-left"
            >
              <User className="h-6 w-6 text-pink-400" />
              <span>Login / Register</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
