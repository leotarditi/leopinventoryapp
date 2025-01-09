import ProductList from "./components/ProductList";
import SearchBox from "./components/SearchBox";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <section className="w-full">
      <SearchBox />
      <ProductList query={q} />
    </section>
  );
}
