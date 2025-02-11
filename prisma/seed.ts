import { PrismaClient } from '@prisma/client'
import { AllProducts } from "../src/components/AllProducts";

const prisma = new PrismaClient()

const allProductsData = AllProducts

async function main() {

  // Create products with transformed data
  const products = allProductsData.map(product => ({
    title: product.title,
    slug: product.slug,
    price: product.price,
    oldPrice: product.oldPrice,
    description: product.description,
    images: [product.imageUrl], // Use the imageUrl array directly
    specs: [product.specs],
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
