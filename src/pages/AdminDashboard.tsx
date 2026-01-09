import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Users, Store, AlertCircle, TrendingUp, CheckCircle, Ban } from 'lucide-react'

export default function AdminDashboard(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'users' | 'sellers' | 'reports' | 'settings'>('dashboard')
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userType')
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  const stats = [
    { label: 'Total Users', value: '2,450', change: '+125', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Sellers', value: '345', change: '+28', icon: Store, color: 'from-green-500 to-emerald-600' },
    { label: 'Total Revenue', value: '$125,420', change: '+$12,540', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { label: 'Pending Issues', value: '12', change: '-3', icon: AlertCircle, color: 'from-red-500 to-red-600' },
  ]

  const users = JSON.parse(localStorage.getItem('users') || '[]')


  const pendingApprovals = [
    { id: 1, name: 'New Store', type: 'Seller Registration', date: 'Jan 3, 2026', priority: 'High' },
    { id: 2, name: 'Product Listing', type: 'Product Review', date: 'Jan 2, 2026', priority: 'Medium' },
    { id: 3, name: 'Complaint Report', type: 'Customer Issue', date: 'Jan 1, 2026', priority: 'High' },
  ]

  return (
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-pink-400">Shoppora Admin Panel</h1>
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
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {(['dashboard', 'users', 'sellers', 'reports', 'settings'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-pink-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className={`bg-linear-to-br ${stat.color} rounded-xl p-6 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm opacity-90 mb-2">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <Icon className="w-8 h-8 opacity-50" />
                    </div>
                    <p className="text-xs opacity-75">{stat.change} vs last month</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Users */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Recent Users</h2>
                <div className="space-y-4">
                  {users.map((user: any) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                      <div>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-400 text-sm">{user.joined}</p>
                        <span className="inline-block mt-1 px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">
                          {user.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Approvals */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Pending Approvals</h2>
                <div className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-semibold">{item.name}</p>
                          <p className="text-slate-400 text-sm">{item.type}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded font-semibold ${
                          item.priority === 'High'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {item.priority}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="flex-1 flex items-center justify-center gap-1 py-2 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition text-sm font-semibold">
                          <CheckCircle className="w-4 h-4" /> Approve
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-1 py-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition text-sm font-semibold">
                          <Ban className="w-4 h-4" /> Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-6">User Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-600">
                  <tr>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">User ID</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user: any) => (
                    <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                      <td className="py-3 px-4 text-slate-300">#{user.id.toString().padStart(3, '0')}</td>
                      <td className="py-3 px-4 text-white">{user.name}</td>
                      <td className="py-3 px-4 text-slate-400">{user.email}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 flex gap-2">
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition">View</button>
                        <button className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition">Edit</button>
                        <button
                          onClick={() => {
                            const updatedUsers = users.map((u: any) =>
                              u.id === user.id ? { ...u, status: 'disabled' } : u
                            )
                            localStorage.setItem('users', JSON.stringify(updatedUsers))
                            window.location.reload()
                          }}
                          className="text-red-400 hover:text-red-300 text-sm font-semibold transition"
                        >
                          Disable
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Sellers Tab */}
        {activeTab === 'sellers' && (
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Seller Management</h2>
            <p className="text-slate-400">Manage sellers, verify documents, and monitor store performance.</p>
            <div className="mt-6 bg-slate-700/30 rounded-lg p-8 border border-slate-600 text-center">
              <p className="text-slate-400">Seller details coming soon...</p>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Reports & Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                <h3 className="text-white font-semibold mb-4">Sales Report</h3>
                <div className="h-40 bg-slate-600/30 rounded-lg flex items-center justify-center">
                  <p className="text-slate-400">Chart visualization here</p>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
                <h3 className="text-white font-semibold mb-4">User Growth</h3>
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
            <h2 className="text-2xl font-bold text-white mb-6">Admin Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Platform Name</label>
                <input
                  type="text"
                  defaultValue="Shoppora"
                  className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Commission Rate (%)</label>
                <input
                  type="number"
                  defaultValue="5"
                  className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-slate-400">Maintenance Mode</span>
                </label>
              </div>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition font-semibold">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
