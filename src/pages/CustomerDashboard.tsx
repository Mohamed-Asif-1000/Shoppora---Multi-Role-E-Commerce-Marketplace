import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, ShoppingBag, Heart, User, MapPin, Settings, Package } from 'lucide-react'

export default function CustomerDashboard(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'profile' | 'addresses'>('orders')
  const navigate = useNavigate()
  const userEmail = localStorage.getItem('userEmail') || 'user@example.com'

  const handleLogout = () => {
    localStorage.removeItem('userType')
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  const orders = [
    { id: '001', product: 'Wireless Headphones Pro', price: '$199.00', date: 'Jan 3, 2026', status: 'Delivered' },
    { id: '002', product: 'Smart Watch Ultra', price: '$399.00', date: 'Jan 2, 2026', status: 'In Transit' },
    { id: '003', product: 'Designer Backpack', price: '$89.00', date: 'Dec 30, 2025', status: 'Delivered' },
  ]

  const wishlist = [
    { id: 1, title: 'Premium Leather Shoes', price: '$129.00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400' },
    { id: 2, title: 'Sports Water Bottle', price: '$34.99', image: 'https://images.unsplash.com/photo-1602143407151-7e406dc6ffff?q=80&w=400' },
  ]

  const addresses = [
    { id: 1, type: 'Home', address: '123 Main St, New York, NY 10001', default: true },
    { id: 2, type: 'Work', address: '456 Business Ave, New York, NY 10002', default: false },
  ]

  return (
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-pink-400">Shoppora</div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 sticky top-20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-3">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold">Customer Account</p>
                <p className="text-slate-400 text-sm">{userEmail}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'orders'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  My Orders
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'wishlist'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  Wishlist
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'addresses'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  Addresses
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'profile'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  Profile Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">My Orders</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                      <div className="flex items-center gap-4">
                        <ShoppingBag className="w-6 h-6 text-pink-400" />
                        <div>
                          <p className="text-white font-semibold">{order.product}</p>
                          <p className="text-slate-400 text-sm">Order #{order.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-right">
                          <p className="text-white font-semibold">{order.price}</p>
                          <p className="text-slate-400 text-sm">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          order.status === 'Delivered'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">My Wishlist</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="bg-slate-700/30 rounded-lg overflow-hidden border border-slate-600 hover:border-pink-500 transition">
                      <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <p className="text-white font-semibold">{item.title}</p>
                        <p className="text-pink-400 font-bold mt-2">{item.price}</p>
                        <button className="w-full mt-3 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Saved Addresses</h2>
                <div className="space-y-4 mb-6">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-white font-semibold">{addr.type}</p>
                          {addr.default && <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded">Default</span>}
                        </div>
                        <p className="text-slate-400 text-sm">{addr.address}</p>
                      </div>
                      <button className="text-slate-400 hover:text-pink-400 transition">Edit</button>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition font-semibold">
                  + Add New Address
                </button>
              </div>
            )}

            {/* Profile Settings Tab */}
            {activeTab === 'profile' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Profile Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={userEmail}
                      className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition font-semibold">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
