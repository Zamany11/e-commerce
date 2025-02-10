import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Product {
    id: string;
    slug: string;
    title: string;
    price: number;
    oldPrice?: number;
    description: string;
    imageUrl: string[];
    specs: string[];
    category: string;
    discount?: number;
  }

const AllProducts: Product[] = [/* your product array */]

async function main() {
  // Clear existing products
  await prisma.product.deleteMany()

  // Create products with transformed data
  const products = AllProducts.map(product => ({
    title: product.title,
    slug: product.slug,
    price: product.price,
    oldPrice: product.oldPrice,
    description: product.description,
    images: product.imageUrl, // Use the imageUrl array directly
    specs: product.specs,
    category: product.category,
    discount: product.discount
  }))

  // Batch insert products
  await prisma.product.createMany({
    data: products,
    skipDuplicates: true
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
