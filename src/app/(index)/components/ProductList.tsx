import { Product } from "@/model/product.model";
import ProductCard from "@/app/components/ProductCard";

interface Props {
  products: Product[];
}

export default async function ProductList({ products }: Props) {
  return (
    <div className="container mx-auto">
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
