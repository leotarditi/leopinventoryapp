import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  category: { id: string; name: string };
  brand: string;
  price: number;
  sku: string;
}

const ProductCard = ({
  name,
  description,
  image,
  category,
  brand,
  price,
  sku,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col border rounded-lg shadow-lg overflow-hidden bg-[#faf8ff]">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            objectFit: "cover",
          }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-[#000540]">{name}</h2>
        <p className="text-sm text-[#000540] opacity-80 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-[#fffade] text-[#000540] py-1 px-2 rounded">
            {category.name}
          </span>
          <span className="text-xs bg-[#faf8ff] text-[#000540] py-1 px-2 rounded border border-[#000540]">
            {brand}
          </span>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-xl font-bold text-[#000540]">
            ${price.toFixed(2)}
          </span>
          <a
            href={`/products/${sku}`}
            className="text-sm text-[#fffade] bg-[#000540] hover:bg-[#000460] py-1 px-3 rounded"
          >
            Ver Detalle
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
