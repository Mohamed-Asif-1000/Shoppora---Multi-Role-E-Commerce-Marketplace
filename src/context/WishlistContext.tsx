import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'


export type WishlistItem = {
  id: number
  title: string
  price: number
  image: string
  rating: number
  reviews: number
  delivery: string
  payment: string
  expiry: string
}

type WishlistContextType = {
  wishlist: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: number) => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  const addToWishlist = (item: WishlistItem) => {
    setWishlist(prev =>
      prev.some(p => p.id === item.id) ? prev : [...prev, item]
    )
  }

  const removeFromWishlist = (id: number) => {
    setWishlist(prev => prev.filter(item => item.id !== id))
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used inside WishlistProvider')
  }
  return context
}
