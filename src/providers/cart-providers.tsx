// src/providers/cart-provider.tsx
'use client'
import { ReactNode, useRef } from 'react'
import { useCart } from '@/stores/cart-store'

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialized = useRef(false)
  if (!initialized.current) {
    useCart.persist.rehydrate()
    initialized.current = true
  }
  return <>{children}</>
}
