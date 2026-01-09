import { useState } from 'react'
import { X, Mail, Lock, Phone, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<'login' | 'signup'>('login')
  const [accountType, setAccountType] = useState<'customer' | 'seller' | 'admin' | 'delivery'>('customer')
  const navigate = useNavigate()

  if (!open) return null

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // For demo, store user type and close
    localStorage.setItem('userType', accountType)
    onClose()
    switch (accountType) {
      case 'customer':
        navigate('/dashboard/customer')
        break
      case 'seller':
        navigate('/dashboard/seller')
        break
      case 'admin':
        navigate('/dashboard/admin')
        break
      case 'delivery':
        navigate('/dashboard/delivery')
        break
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div className="relative w-full max-w-lg mx-4 bg-linear-to-br from-slate-900 to-indigo-950 rounded-2xl shadow-2xl overflow-hidden">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-white">
          <X />
        </button>

        <div className="text-center max-h-[80vh] overflow-auto pr-2">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white mr-3">
              S
            </div>
            <h2 className="text-2xl font-bold text-pink-400">Shoppora</h2>
          </div>

          <p className="text-slate-300">Welcome to Shoppora</p>
          <p className="text-slate-400 mb-6 text-sm">Login or create an account to continue shopping</p>

          <div className="bg-slate-800/30 rounded-full p-1 mb-6 flex items-center justify-between">
            <button
              onClick={() => setTab('login')}
              className={`flex-1 py-2 rounded-full font-semibold ${tab === 'login' ? 'bg-slate-900 text-white' : 'text-slate-300'}`}
            >
              Login
            </button>
            <button
              onClick={() => setTab('signup')}
              className={`flex-1 py-2 rounded-full font-semibold ${tab === 'signup' ? 'bg-slate-900 text-white' : 'text-slate-300'}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4 text-left">
            {tab === 'signup' && (
              <div>
                <label className="text-sm text-slate-400">Full Name</label>
                <div className="mt-2 relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input className="w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white" placeholder="John Doe" />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm text-slate-400">Email</label>
              <div className="mt-2 relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input className="w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white" placeholder="your.email@example.com" />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-400">Password</label>
              <div className="mt-2 relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input type="password" className="w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white" placeholder="••••••••" />
              </div>
            </div>

            {tab === 'signup' && (
              <>
                <div>
                  <label className="text-sm text-slate-400">Phone (Optional)</label>
                  <div className="mt-2 relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input className="w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-slate-400">Address (Optional)</label>
                  <div className="mt-2 relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input className="w-full pl-10 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white" placeholder="123 Main St, City, State" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-slate-400 mb-2 block">Account Type</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button type="button" onClick={() => setAccountType('customer')} className={`p-4 rounded-xl text-left border ${accountType === 'customer' ? 'border-pink-500 bg-pink-500/10' : 'border-slate-700'} text-white`}>Customer<br/><span className="text-slate-400 text-sm">Shop and purchase products</span></button>
                    <button type="button" onClick={() => setAccountType('seller')} className={`p-4 rounded-xl text-left border ${accountType === 'seller' ? 'border-pink-500 bg-pink-500/10' : 'border-slate-700'} text-white`}>Seller<br/><span className="text-slate-400 text-sm">Sell products and manage inventory</span></button>
                    <button type="button" onClick={() => setAccountType('admin')} className={`p-4 rounded-xl text-left border ${accountType === 'admin' ? 'border-pink-500 bg-pink-500/10' : 'border-slate-700'} text-white`}>Admin<br/><span className="text-slate-400 text-sm">Manage platform and users</span></button>
                    <button type="button" onClick={() => setAccountType('delivery')} className={`p-4 rounded-xl text-left border ${accountType === 'delivery' ? 'border-pink-500 bg-pink-500/10' : 'border-slate-700'} text-white`}>Delivery Partner<br/><span className="text-slate-400 text-sm">Deliver orders to customers</span></button>
                  </div>
                </div>
              </>
            )}

            <div className="pt-4">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-semibold transition">
                {tab === 'login' ? 'Login' : 'Create Account'}
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-slate-400 mt-4">Your account will be saved locally. Use the same email and password to login next time.</p>
        </div>
      </div>
    </div>
  )
}
