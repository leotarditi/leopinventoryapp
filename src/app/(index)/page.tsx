import { Suspense } from "react";
import ProductList from "./components/ProductList";
import SearchBox from "./components/SearchBox";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <section className="w-full">
      <SearchBox />
      <Suspense
        key={q}
        fallback={
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton className="hidden md:block" />
            <ProductCardSkeleton className="hidden lg:block" />
          </div>
        }
      >
        <ProductList query={q} />
      </Suspense>
    </section>
  );
}
