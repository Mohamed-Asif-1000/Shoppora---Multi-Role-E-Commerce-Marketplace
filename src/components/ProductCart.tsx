import { useState } from 'react'
import { Search, Heart, ShoppingCart } from 'lucide-react'
import { products } from '../data/Products'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'


export default function ProductCart(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewAll, setViewAll] = useState<Record<string, boolean>>({})
  const { addToWishlist } = useWishlist()
  const { addToCart } = useCart()


  const filtered = searchQuery
    ? products.filter(
        p =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products

  const categories = Array.from(new Set(filtered.map(p => p.category)))

  return (
    <section id="shop" className="bg-slate-900 py-16">
      <div className="container mx-auto px-6">

        {/* Search */}
        <div className="mb-10 max-w-xl relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-700 text-white"
          />
        </div>

        {categories.map(category => {
          const items = filtered.filter(p => p.category === category)
          const showAll = viewAll[category] ?? false
          const visible = showAll ? items : items.slice(0, 4)

          return (
            <div key={category} className="mb-14">
              <h3 className="text-2xl font-bold text-white mb-6">
                {category}{' '}
                <span className="text-sm text-slate-400">
                  ({items.length})
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
                {visible.map(p => (
                  <motion.article
                    key={p.id}
                    whileHover={{ y:-8, scale:1.02, boxShadow:"0px 10px 30px rgba(236,72,153,0.2)"}}
                    transition={{ type:"spring", stiffness:400, damping:10}}
                    className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700"
                  >
                    {/* IMAGE HOVER */}
                    <div className="relative h-64 overflow-hidden group">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="
                          w-full h-full object-cover
                          transition-transform duration-500
                          group-hover:scale-110 group-hover:blur-[1px]
                        "
                      />

                      <span
                        className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-full ${p.badgeColor}`}
                      >
                        {p.badge}
                      </span>

                      <div
                        className="
                          absolute inset-0
                          flex items-center justify-center gap-4
                          opacity-100
                          pointer-events-auto
                          md:opacity-0
                          md:pointer-events-none
                          md:group-hover:opacity-100
                          md:group-hover:pointer-events-auto
                          transition-all duration-300
                        "
                      >
                      <button type='button'
                        onClick={() => {
                          console.log('ADD TO CART CLICKED:', p)
                          addToCart({
                            id: p.id,
                            title: p.title,
                            price: p.price,
                            image: p.image,
                            qty: 1,
                          })
                        }}
                        className="bg-pink-500 p-3 rounded-full cursor-pointer"
                      >

                          <ShoppingCart size={18} className="text-white" />
                        </button>


                        <button type='button'
                          onClick={() =>
                            addToWishlist({
                              id: p.id,
                              title: p.title,
                              price: p.price,
                              image: p.image,
                              rating: p.rating,
                              reviews: p.buyers,
                              delivery: 'Delivery in 2–3 days',
                              payment: 'Cash on Delivery / UPI',
                              expiry: 'Offer expires in 3 days',
                            })
                          }
                          className="bg-slate-800 p-3 rounded-full cursor-pointer hover:bg-pink-500 transition"
                        >
                          <Heart size={18} className="text-white" />
                        </button>

                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="p-4">
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-400 mb-2">
                        ⭐ {p.rating} · {p.buyers.toLocaleString()} buyers
                      </p>
                      <p className="text-pink-500 font-bold">₹ {p.price.toLocaleString()}</p>
                    </div>
                  </motion.article>
                ))}
              </div>

              {items.length > 4 && (
                <div className="text-center mt-6">
                  <button
                    onClick={() =>
                      setViewAll(prev => ({
                        ...prev,
                        [category]: !prev[category],
                      }))
                    }
                    className="px-6 py-2 border border-pink-500 text-pink-400 rounded-lg cursor-pointer"
                  >
                    {showAll ? 'View Less' : 'View All'}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
