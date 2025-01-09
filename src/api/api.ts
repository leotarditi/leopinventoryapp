import { Product } from "@/model/product.model";

async function fetchProductsFromCSV(url: string): Promise<Product[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching CSV: ${response.statusText}`);
    }

    const text = await response.text();
    const [headerRow, ...dataRows] = text.split("\n");

    const headers = headerRow.split(",").map((header) => header.trim());

    const products: Product[] = dataRows
      .filter((row) => row.trim() !== "")
      .map((row) => {
        const values = row.split(",");

        const product: Product = {
          sku: values[headers.indexOf("sku")],
          name: values[headers.indexOf("name")],
          description: values[headers.indexOf("description")],
          image: values[headers.indexOf("image")],
          category: {
            id: values[headers.indexOf("category_id")],
            name: values[headers.indexOf("category_name")],
          },
          brand: values[headers.indexOf("brand")],
          price: Number(values[headers.indexOf("price")]),
          stock: Number(values[headers.indexOf("stock")]),
          specifications: values[headers.indexOf("specifications")]
            .split(";")
            .map((spec) => {
              const [name, value] = spec.split(": ");
              return { name: name.trim(), value: value.trim() };
            }),
        };

        return product;
      });

    return products;
  } catch (error) {
    console.error("Error processing CSV:", error);
    return [];
  }
}

const api = {
  list: async (): Promise<Product[]> => {
    const products = await fetchProductsFromCSV(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBPlMZ42tCJkU3hmeA4FICatH2HoNDoFkn0X8GVhZYG55EIgDbhsCZykcT0zflOZ65dp5CxSfcdto4/pub?output=csv",
    );

    return products;
  },
  fetch: async (sku: Product["sku"]): Promise<Product> => {
    const products = await api.list();

    const product = products.find((product) => product.sku === sku);

    if (!product) {
      throw new Error(`Product with sku ${sku} not found`);
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
