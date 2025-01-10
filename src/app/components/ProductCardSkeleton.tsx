interface Props {
  className?: string;
}

export default function ProductCardSkeleton({ className }: Props) {
  return (
    <article
      className={`w-full flex flex-col border rounded-lg shadow-lg shadow-[#fffade]/40 bg-white max-w-[400px] mx-auto ${className}`}
    >
      <div className="mb-4 h-[300px] w-full bg-gray-300 rounded-t-lg"></div>

      <div className="flex flex-col p-4">
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>

        <div className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-5/6"></div>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-24"></div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
          <div className="h-8 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    </article>
  );
}
