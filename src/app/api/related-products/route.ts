// Create API route: /api/related-products/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const { cartItems } = await req.json()
  
  const categories = Array.from(
    new Set(cartItems.flatMap(item => item.categories))
  )

  const relatedProducts = await prisma.product.findMany({
    where: {
      categories: {
        hasSome: categories,
      },
      id: {
        notIn: cartItems.map(item => item.id),
      }
    },
    take: 4
  })

  return NextResponse.json(relatedProducts)
}
