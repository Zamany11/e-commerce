import { NextResponse } from 'next/server';
import { getCart } from '@/lib/cart'; // Your DB cart helper

export async function GET() {
  const cart = await getCart();
  return NextResponse.json(cart);
}
