import { Suspense } from "react";
import ProductList from "./components/ProductList";
import SearchBox from "./components/SearchBox";
import api from "@/api/api";
import { Product } from "@/model/product.model";
import ProductListSkeleton from "./components/ProductListSkeleton";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  const products: Product[] = await api.search(q);

  return (
    <section className="w-full">
      <SearchBox />
      <Suspense key={q} fallback={<ProductListSkeleton />}>
        <ProductList products={products} />
      </Suspense>
    </section>
  );
}
