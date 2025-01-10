"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto">
      <p className="text-center text-red-300">No se pudo cargar</p>
    </div>
  );
}
