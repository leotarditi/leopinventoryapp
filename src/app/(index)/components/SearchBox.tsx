"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query) {
        router.push(`/?q=${query}`);
      } else {
        router.push(`/`);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [query, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setQuery(value);
    router.replace(`/?q=${value}`);
  };

  return (
    <div className="container mx-auto">
      <input
        className="w-full rounded border p-2 mb-4"
        placeholder="Buscar por SKU o nombre"
        type="text"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}
