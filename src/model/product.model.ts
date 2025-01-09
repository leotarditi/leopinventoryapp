interface Specification {
  name: string;
  value: string;
}

interface Category {
  id: string;
  name: string;
}

export interface Product {
  sku: string;
  name: string;
  description: string;
  image: string;
  category: Category;
  brand: string;
  price: number;
  stock: number;
  specifications: Specification[];
}
