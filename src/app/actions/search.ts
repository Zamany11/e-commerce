"use server";

import prisma from "@/lib/db";

export async function searchProducts(query: string) {
  try {
    // Clean and prepare the search query
    const cleanQuery = query.trim().toLowerCase();
    
    // Remove common words that don't add search value
    const wordsToFilter = ['a', 'an', 'the', 'and', 'or', 'of', 'in', 'on', 'at'];
    
    // Split the query into words and filter out common words
    let searchTerms = cleanQuery.split(/\s+/).filter(word => 
      word.length > 1 && !wordsToFilter.includes(word)
    );
    
    // If no meaningful terms left, use the original query
    if (searchTerms.length === 0) {
      searchTerms = [cleanQuery];
    }
    
    // Handle plurals by removing trailing 's' if present
    const searchTermsWithSingulars = searchTerms.flatMap(term => {
      if (term.endsWith('s')) {
        return [term, term.slice(0, -1)]; // Include both plural and singular forms
      }
      return [term];
    });
    
    // Create unique list of search terms
    const uniqueTerms = [...new Set(searchTermsWithSingulars)];
    
    // Find products that match any of the search terms
    const products = await prisma.product.findMany({
      where: {
        OR: uniqueTerms.flatMap(term => [
          { title: { contains: term, mode: "insensitive" } },
          { description: { contains: term, mode: "insensitive" } },
          { category: { contains: term, mode: "insensitive" } }
        ])
      },
    });
    
    return products;
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}