import { Heart, Truck, CreditCard, Trash2, Clock } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'


export default function Wishlist(): React.JSX.Element {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const navigate = useNavigate()


  return (
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      <div className="max-w-6xl mx-auto p-6">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
          <Heart className="text-pink-500" /> Wishlist
        </h1>
        <p className="text-slate-400 mb-8">
          Save products you love and buy later
        </p>

        {/* EMPTY STATE */}
        {wishlist.length === 0 && (
          <div className="text-center py-24">
            <Heart size={48} className="mx-auto text-slate-600 mb-4" />
            <h2 className="text-xl text-white font-semibold mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-slate-400">
              Tap the ❤️ icon on products to add them here
            </p>
          </div>
        )}

        {/* WISHLIST ITEMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlist.map(item => (
            <div
              key={item.id}
              className="bg-slate-800/70 rounded-xl border border-slate-700 overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {item.title}
                </h3>

                <p className="text-pink-500 font-bold text-xl mb-2">
                  {item.price}
                </p>

                <p className="text-sm text-slate-400 mb-3">
                  ⭐ {item.rating} · {item.reviews.toLocaleString()} reviews
                </p>

                {/* EXTRA DETAILS */}
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Truck size={16} /> {item.delivery}
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard size={16} /> {item.payment}
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Clock size={16} /> {item.expiry}
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex justify-between items-center mt-5">
                  <button
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        qty: 1,
                      })
                      removeFromWishlist(item.id)
                      navigate('/cart') // optional but recommended
                    }}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold transition cursor-pointer"
                  >
                    Move to Cart
                  </button>


                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-red-400 hover:text-red-500 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
