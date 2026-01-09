import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Package, Plus, BarChart3, Settings, TrendingUp, Eye, Edit, Trash2 } from 'lucide-react'

export default function SellerDashboard(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'analytics' | 'settings'>('products')
  const navigate = useNavigate()
  const userEmail = localStorage.getItem('userEmail') || 'seller@example.com'

  const handleLogout = () => {
    localStorage.removeItem('userType')
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  const products = [
    { id: 1, name: 'Wireless Headphones Pro', sku: 'WHP-001', price: '$199.00', stock: 45, sales: 234 },
    { id: 2, name: 'Smart Watch Ultra', sku: 'SWU-002', price: '$399.00', stock: 12, sales: 156 },
    { id: 3, name: 'Designer Backpack', sku: 'DBP-003', price: '$89.00', stock: 78, sales: 512 },
  ]

  const orders = [
    { id: 'ORD-001', buyer: 'Jane Smith', total: '$199.00', status: 'Completed', date: 'Jan 3, 2026' },
    { id: 'ORD-002', buyer: 'John Wilson', total: '$399.00', status: 'Pending', date: 'Jan 2, 2026' },
    { id: 'ORD-003', buyer: 'Sarah Johnson', total: '$89.00', status: 'Completed', date: 'Jan 1, 2026' },
  ]

  const stats = [
    { label: 'Total Sales', value: '$12,450', change: '+12.5%', color: 'from-green-500 to-emerald-600' },
    { label: 'Total Orders', value: '324', change: '+8.2%', color: 'from-blue-500 to-blue-600' },
    { label: 'Products', value: '45', change: '+2', color: 'from-purple-500 to-purple-600' },
    { label: 'Reviews (Avg)', value: '4.8/5', change: '+0.2', color: 'from-pink-500 to-pink-600' },
  ]

  return (
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-pink-400">Shoppora Seller</h1>
            <p className="text-sm text-slate-400">{userEmail}</p>
          </div>
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
        {/* Stats Grid */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className={`bg-linear-to-br ${stat.color} rounded-xl p-6 text-white`}>
                <p className="text-sm opacity-90 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs mt-2 opacity-75">{stat.change} vs last month</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 sticky top-20">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('products')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'products'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  Products
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'orders'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <TrendingUp className="w-5 h-5" />
                  Orders
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'analytics'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <BarChart3 className="w-5 h-5" />
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'settings'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">My Products</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition font-semibold">
                    <Plus className="w-5 h-5" />
                    Add Product
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-slate-600">
                      <tr>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Product Name</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">SKU</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Price</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Stock</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Sales</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                          <td className="py-3 px-4 text-white">{product.name}</td>
                          <td className="py-3 px-4 text-slate-400">{product.sku}</td>
                          <td className="py-3 px-4 text-pink-400 font-semibold">{product.price}</td>
                          <td className="py-3 px-4">
                            <span className={product.stock > 20 ? 'text-green-400' : 'text-yellow-400'}>
                              {product.stock} units
                            </span>
                          </td>
                          <td className="py-3 px-4 text-white">{product.sales}</td>
                          <td className="py-3 px-4 flex gap-2">
                            <button className="text-blue-400 hover:text-blue-300 transition">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-yellow-400 hover:text-yellow-300 transition">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300 transition">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Recent Orders</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600 flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold">{order.id}</p>
                        <p className="text-slate-400 text-sm">Buyer: {order.buyer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-pink-400 font-bold">{order.total}</p>
                        <p className="text-slate-400 text-sm">{order.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                    <h3 className="text-white font-semibold mb-4">Sales Overview</h3>
                    <div className="h-40 bg-slate-600/30 rounded-lg flex items-center justify-center">
                      <p className="text-slate-400">Chart visualization here</p>
                    </div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                    <h3 className="text-white font-semibold mb-4">Top Products</h3>
                    <div className="h-40 bg-slate-600/30 rounded-lg flex items-center justify-center">
                      <p className="text-slate-400">Chart visualization here</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Store Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Store Name</label>
                    <input
                      type="text"
                      defaultValue="My Store"
                      className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Store Description</label>
                    <textarea
                      defaultValue="Premium products at great prices"
                      className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      rows={4}
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
