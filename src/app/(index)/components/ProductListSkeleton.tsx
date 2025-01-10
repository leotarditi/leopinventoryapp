import ProductCardSkeleton from "@/app/components/ProductCardSkeleton";

export default async function ProductListSkeleton() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton className="hidden md:block" />
      <ProductCardSkeleton className="hidden lg:block" />
    </div>
  );
}
