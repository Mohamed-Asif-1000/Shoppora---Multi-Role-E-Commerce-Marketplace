import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Store, BarChart3, Truck } from 'lucide-react'

export default function Login(): React.JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState<'customer' | 'seller' | 'admin' | 'delivery'>('customer')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
  e.preventDefault()

  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const foundUser = users.find(
    (u: any) => u.email === email && u.password === password
  )

  if (!foundUser) {
    alert('Invalid credentials')
    return
  }
  if (foundUser.status === 'disabled') {
  alert('Your account has been disabled by admin')
  return
}


  localStorage.setItem('userType', foundUser.role)
  localStorage.setItem('userEmail', foundUser.email)

  switch (foundUser.role) {
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
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-lg bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-3xl font-bold text-pink-400">Shoppora</span>
          </div>
          <p className="text-slate-400">Welcome back to shopping</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 space-y-6">
          {/* User Type Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-white mb-4">Login As</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType('customer')}
                className={`p-3 rounded-lg border-2 transition flex flex-col items-center gap-2 ${
                  userType === 'customer'
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="text-xs font-medium">Customer</span>
              </button>
              <button
                type="button"
                onClick={() => setUserType('seller')}
                className={`p-3 rounded-lg border-2 transition flex flex-col items-center gap-2 ${
                  userType === 'seller'
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                }`}
              >
                <Store className="w-5 h-5" />
                <span className="text-xs font-medium">Seller</span>
              </button>
              <button
                type="button"
                onClick={() => setUserType('admin')}
                className={`p-3 rounded-lg border-2 transition flex flex-col items-center gap-2 ${
                  userType === 'admin'
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span className="text-xs font-medium">Admin</span>
              </button>
              <button
                type="button"
                onClick={() => setUserType('delivery')}
                className={`p-3 rounded-lg border-2 transition flex flex-col items-center gap-2 ${
                  userType === 'delivery'
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                }`}
              >
                <Truck className="w-5 h-5" />
                <span className="text-xs font-medium">Delivery</span>
              </button>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400 cursor-pointer hover:text-slate-300">
              <input type="checkbox" className="w-4 h-4 rounded" />
              Remember me
            </label>
            <a href="#" className="text-pink-400 hover:text-pink-300">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2.5 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-slate-400 text-sm">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-pink-400 hover:text-pink-300 font-semibold"
            >
              Sign up
            </button>

          </p>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 bg-slate-800/30 border border-slate-700 rounded-lg p-4">
          <p className="text-xs text-slate-400 mb-2">Demo Credentials:</p>
          <div className="space-y-1 text-xs text-slate-500">
            <p>Email: <span className="text-slate-300">demo@shoppora.com</span></p>
            <p>Password: <span className="text-slate-300">demo123</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
