import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup(): React.JSX.Element {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('users') || '[]')

    const alreadyExists = users.find((u: any) => u.email === form.email)
    if (alreadyExists) {
      alert('User already exists')
      return
    }

    users.push({
      id: Date.now(),
      ...form,
      status: 'active',
      createdAt: new Date().toISOString()
    })

    localStorage.setItem('users', JSON.stringify(users))
    alert('Signup successful')
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form onSubmit={handleSignup} className="bg-slate-800 p-8 rounded-xl w-96 space-y-4">
        <h2 className="text-white text-2xl font-bold">Sign Up</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 rounded" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full p-2 rounded" />

        <select name="role" onChange={handleChange} className="w-full p-2 rounded">
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
          <option value="delivery">Delivery</option>
          <option value="admin">Admin</option>
        </select>

        <button className="w-full bg-pink-500 py-2 rounded text-white font-semibold">
          Create Account
        </button>
      </form>
    </div>
  )
}
