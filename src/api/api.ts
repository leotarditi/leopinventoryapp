import { Product } from "@/model/product.model";
import { notFound } from "next/navigation";

const url = "http://localhost:3000";

const api = {
  list: async (): Promise<Product[]> => {
    const response = await fetch(`${url}/api/products`);
    const products = await response.json();
    return products;
  },

  fetch: async (sku: Product["sku"]): Promise<Product> => {
    const products = await api.list();

    const product = products.find((product) => product.sku === sku);

    if (!product) {
      notFound();
    }

    return product;
  },

  search: async (query: string = ""): Promise<Product[]> => {
    const products = await api.list();

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.sku.toLowerCase().includes(query.toLowerCase()),
    );
  },
};

export default api;
