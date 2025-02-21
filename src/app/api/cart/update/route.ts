import { NextResponse } from 'next/server';
import { updateCartItem } from '@/lib/cart';

export async function POST(req: Request) {
  const { productId, quantity } = await req.json();
  await updateCartItem(productId, quantity);
  return NextResponse.json({ success: true });
}
