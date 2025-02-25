// src/stores/cart-store.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
  total: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const existing = get().items.find(i => i.id === item.id)
        set({
          items: existing 
            ? get().items.map(i => 
                i.id === item.id ? {...i, quantity: i.quantity + 1} : i
              )
            : [...get().items, {...item, quantity: 1}],
          total: get().total + item.price
        })
      },
      removeItem: (id) => {
        const item = get().items.find(i => i.id === id)
        set({
          items: get().items.filter(i => i.id !== id),
          total: get().total - (item?.price || 0) * (item?.quantity || 0)
        })
      },
      clearCart: () => set({ items: [], total: 0 })
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
