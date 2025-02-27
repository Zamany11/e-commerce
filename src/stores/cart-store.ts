import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartState } from '@/types/CartState'
import toast  from 'react-hot-toast';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      
      items: [],
      total: 0,
      
      addToCart: (product, quantity) => set((state) => {
        if (!product?.id) return state;

        const existingItem = state.items.find(item => item.id === product.id)
        const newItems = existingItem 
          ? state.items.map(item => 
              item.id === product.id 
                ? {...item, quantity: (item.quantity || 0) + 1}
                : item
            )
          : [...state.items, {...product, quantity: 1}]
          
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0),
        }
      }),

      updateQuantity: (itemId: string, quantity: number) => set((state) => {
        const newItems= state.items.map(item =>
          item.id === itemId ? {...item, quantity} : item
        );

        return {
          items: newItems,
          total: newItems.reduce((sum, item) => 
            sum + (item.price * (item.quantity || 0)), 0
          )
        }
      }),
      
      removeFromCart: (id) => set((state) => {
        const newItems = state.items.filter(item => item.id !== id);
        toast.success('Item removed from cart successfully!')

        return {
          items: newItems,
          total: newItems.reduce((sum, item) => 
          sum + (item.price * (item.quantity || 0)), 0
      ),
    }
      }),
      
      clearCart: () => set({ items: [], total: 0 })
    }),
    {
      name: 'cart-storage',
    }
  )
)
