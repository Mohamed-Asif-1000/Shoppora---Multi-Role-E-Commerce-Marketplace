import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Truck, MapPin, CheckCircle, Clock, Phone, Home } from 'lucide-react'

export default function DeliveryDashboard(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'route' | 'profile'>('active')
  const navigate = useNavigate()
  const userEmail = localStorage.getItem('userEmail') || 'delivery@example.com'

  const handleLogout = () => {
    localStorage.removeItem('userType')
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  const activeDeliveries = [
    { id: 'DEL-001', customer: 'Jane Smith', address: '123 Main St, NY 10001', phone: '+1 (555) 123-4567', status: 'In Transit', time: '2:30 PM' },
    { id: 'DEL-002', customer: 'John Wilson', address: '456 Park Ave, NY 10002', phone: '+1 (555) 234-5678', status: 'Arriving Soon', time: '3:15 PM' },
    { id: 'DEL-003', customer: 'Sarah Johnson', address: '789 Broadway, NY 10003', phone: '+1 (555) 345-6789', status: 'Picked Up', time: '4:00 PM' },
  ]

  const completedDeliveries = [
    { id: 'DEL-501', customer: 'Mike Brown', address: '321 5th Ave, NY 10004', date: 'Jan 3, 2026', rating: 5 },
    { id: 'DEL-502', customer: 'Emily Davis', address: '654 Madison Ave, NY 10005', date: 'Jan 2, 2026', rating: 5 },
    { id: 'DEL-503', customer: 'David Lee', address: '987 Park Ave, NY 10006', date: 'Jan 1, 2026', rating: 4 },
  ]

  const stats = [
    { label: 'Today Deliveries', value: '8', color: 'from-blue-500 to-blue-600' },
    { label: 'Completed', value: '5', color: 'from-green-500 to-emerald-600' },
    { label: 'Pending', value: '3', color: 'from-yellow-500 to-yellow-600' },
    { label: 'Rating', value: '4.9', color: 'from-pink-500 to-pink-600' },
  ]

  return (
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-pink-400">Shoppora Delivery</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-linear-to-br ${stat.color} rounded-xl p-6 text-white`}>
              <p className="text-sm opacity-90 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 sticky top-20">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('active')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'active'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Truck className="w-5 h-5" />
                  Active Deliveries
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'completed'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <CheckCircle className="w-5 h-5" />
                  Completed
                </button>
                <button
                  onClick={() => setActiveTab('route')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'route'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  Route Map
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'profile'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  Profile
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Active Deliveries Tab */}
            {activeTab === 'active' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Active Deliveries</h2>
                <div className="space-y-4">
                  {activeDeliveries.map((delivery) => (
                    <div key={delivery.id} className="p-6 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-pink-500 transition">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-white font-semibold text-lg">{delivery.id}</h3>
                          <p className="text-slate-400 text-sm">Customer: {delivery.customer}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          delivery.status === 'In Transit'
                            ? 'bg-blue-500/20 text-blue-400'
                            : delivery.status === 'Arriving Soon'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {delivery.status}
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-3">
                          <Home className="w-5 h-5 text-slate-400" />
                          <p className="text-slate-300">{delivery.address}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-slate-400" />
                          <p className="text-slate-300">{delivery.phone}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-slate-400" />
                          <p className="text-slate-300">Estimated: {delivery.time}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition font-semibold text-sm">
                          Update Status
                        </button>
                        <button className="flex-1 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition font-semibold text-sm">
                          Mark Delivered
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Completed Deliveries Tab */}
            {activeTab === 'completed' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Completed Deliveries</h2>
                <div className="space-y-4">
                  {completedDeliveries.map((delivery) => (
                    <div key={delivery.id} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600 flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold">{delivery.id}</p>
                        <p className="text-slate-400 text-sm">{delivery.customer} - {delivery.address}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-slate-400 text-sm">{delivery.date}</p>
                          <div className="flex gap-1 mt-1 justify-end">
                            {Array.from({ length: delivery.rating }).map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Route Map Tab */}
            {activeTab === 'route' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Delivery Route Map</h2>
                <div className="bg-slate-700/30 rounded-lg h-96 border border-slate-600 flex items-center justify-center">
                  <p className="text-slate-400">Route map visualization here</p>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Delivery Agent Profile</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="John Delivery"
                        className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">License Number</label>
                      <input
                        type="text"
                        defaultValue="DL-123456789"
                        className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 999-8888"
                        className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">Vehicle</label>
                      <input
                        type="text"
                        defaultValue="Honda Civic - ABC 1234"
                        className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
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
