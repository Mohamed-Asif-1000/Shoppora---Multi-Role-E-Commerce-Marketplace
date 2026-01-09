import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart } = useCart()

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <ShoppingCart /> Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-slate-400 mt-10">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid gap-4 mt-6">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex gap-4"
                >
                  <img
                    src={item.image}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-slate-400">
                      ${item.price} × {item.qty}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-white font-semibold">
                      ${item.price * item.qty}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-pink-400 mt-2 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-slate-900 rounded-xl p-4 border border-slate-700">
              <p className="text-slate-400">Subtotal</p>
              <p className="text-white text-2xl font-bold">${subtotal}</p>
              <button className="mt-4 w-full bg-pink-500 py-3 rounded-full cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
