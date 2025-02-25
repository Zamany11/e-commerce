import { Product } from "./product";

export interface CartState {
    items: Product[]
    total: number
    addToCart: (item: Product) => void
    removeFromCart: (id: string) => void
    clearCart: () => void
  }