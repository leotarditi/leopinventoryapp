import { Product } from "@/model/product.model";
import ProductCard from "@/app/components/ProductCard";
import api from "@/api/api";

export default async function ProductList() {
  const products: Product[] = await api.list();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-[#000540] mb-6">
        Nuestros Productos
      </h1>
      {products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.sku} {...product} />
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
