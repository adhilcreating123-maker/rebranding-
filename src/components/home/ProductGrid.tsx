import Link from "next/link";
import { Product } from "@/data/products";

type ProductGridProps = {
  title: string;
  products: Product[];
};

export function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <h2 className="text-2xl lg:text-3xl tracking-tight mb-8">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#F4F4F2]">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-sm">{product.name}</p>
              <p className="text-sm">₹{product.price.toLocaleString("en-IN")}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
