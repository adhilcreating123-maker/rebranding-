"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type ProductCarouselProps = {
  title: string;
  products: Product[];
};

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl lg:text-3xl tracking-tight">{title}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-[#E5E5E5] hover:border-[#111111] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-[#E5E5E5] hover:border-[#111111] transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group flex-shrink-0 w-[280px] sm:w-[320px]"
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
