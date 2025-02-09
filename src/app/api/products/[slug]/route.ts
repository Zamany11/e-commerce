import { NextResponse } from 'next/server';
import { AllProducts } from '../../../../components/AllProducts'; // Your products data source

export async function GET(
  _request: Request,
  context: { params: { slug: string } }
) {
  const { params } = context;
  const product = AllProducts.find(p => p.slug === params.slug);
  
  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
