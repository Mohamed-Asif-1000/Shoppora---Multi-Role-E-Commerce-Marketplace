import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Categories from './components/Categories'
import PromoSection from './components/PromoSection'
import ProductCart from './components/ProductCart'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Login from './pages/Login'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import CustomerDashboard from './pages/CustomerDashboard'
import SellerDashboard from './pages/SellerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import DeliveryDashboard from './pages/DeliveryDashboard'
import SearchResults from './pages/SearchResults'
import Signup from './pages/Signup'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-r from-violet-950 via-purple-950 to-indigo-950">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <PromoSection />
      <ProductCart />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/seller" element={<SellerDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/delivery" element={<DeliveryDashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

