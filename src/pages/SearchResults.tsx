import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Search, ArrowLeft } from 'lucide-react'
import { products } from '../data/Products'


export default function SearchResults(): React.JSX.Element {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') || ''
  const [localQuery, setLocalQuery] = useState(query)

  const filteredProducts = products.filter(
  (p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  )


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(localQuery)}`)
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-4 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <form onSubmit={handleSearch} className="relative max-w-2xl">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
            />
          </form>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Search Results for "<span className="text-pink-400">{query}</span>"
          </h1>
          <p className="text-slate-400">
            Found {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden hover:shadow-lg transition-all border border-slate-700 hover:border-pink-500"
              >
                <div className="relative bg-slate-100 h-64 flex items-center justify-center">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-4">
                  <p className="text-slate-400 text-xs mb-2">{product.category}</p>
                  <h3 className="font-semibold text-white mb-3 text-sm line-clamp-2">{product.title}</h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-pink-500 font-bold">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>

                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full text-sm font-medium transition">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg mb-4">
              No products found matching "<span className="text-pink-400">{query}</span>"
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
