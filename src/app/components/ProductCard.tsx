import { Product } from "@/model/product.model";
import Link from "next/link";

export default async function ProductCard({
  sku,
  name,
  image,
  price,
  description,
  category,
  brand,
  showLink = true,
}: Product & { showLink?: boolean }) {
  return (
    <article
      key={sku}
      className="flex flex-col border rounded-lg shadow-lg bg-white max-w-[400px] mx-auto"
    >
      <img
        alt={name}
        className="mb-4 h-[300px] w-full object-cover rounded-t-lg"
        src={image}
      />

      <div className="flex flex-col p-4">
        <h2 className="text-lg font-bold text-[#000540] mb-2 line-clamp-1">
          {name}
        </h2>
        <p className="text-sm text-[#333] opacity-80 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-[#fffade] text-[#000540] py-1 px-2 rounded">
            {category.name}
          </span>
          <span className="text-xs bg-[#faf8ff] text-[#000540] py-1 px-2 rounded border border-[#000540]">
            {brand}
          </span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-[#000540]">
            ${price.toFixed(2)}
          </p>
          {showLink && (
            <Link
              href={`/products/${sku}`}
              className="text-sm text-[#fffade] bg-[#000540] hover:bg-[#000460] py-1 px-3 rounded"
            >
              Ver Detalle
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
