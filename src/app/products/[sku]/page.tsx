import api from "@/api/api";
import ProductCard from "@/app/components/ProductCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = await api.fetch(sku);

  return {
    title: `${product.name} - LeoPinventory`,
    description: product.description,
    keywords: product.category.name,
  };
}

export async function generateStaticParams() {
  const products = await api.list();

  return products.map((product) => ({
    sku: product.sku,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = await api.fetch(sku);

  return <ProductCard {...product} showLink={false} />;
}
