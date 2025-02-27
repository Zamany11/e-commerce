import { Product } from "./product";


export interface CartState {
    items: Product[],
    total: number
    addToCart: (item: Product, quantity: number) => void
    removeFromCart: (id: string) => void
    clearCart: () => void
    updateQuantity: (itemId: string, quantity: number) => void
  }