import { Product } from "@/model/product.model";
import ProductCard from "@/app/components/ProductCard";
import api from "@/api/api";
import Link from "next/link";

export default async function ProductList() {
  const products: Product[] = await api.list();

  return (
    <div className="container mx-auto">
      {products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.sku} href={`/products/${product.sku}`}>
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-[#000540] opacity-60">
          No se encontraron productos
        </p>
      )}
    </div>
  );
}
