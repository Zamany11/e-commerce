export interface Product {
    id: string;
    slug: string;
    title: string;
    price: number;
    oldPrice?: number | null;
    description: string;
    images: string[];
    specs: string[];
    category: string;
    discount?: number | null;
    quantity?: number;
  }
  