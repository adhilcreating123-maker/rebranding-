"use client";

import Link from "next/link";
import { products } from "@/data/products";

export default function ShowroomPage() {
  const womenTops = products.filter(
    (p) =>
      p.category === "women" &&
      ["T-Shirts", "Sweatshirts", "Fleece", "Bra Tops", "Graphic T-Shirts", "Everyday Essentials", "Dresses"].includes(p.subcategory)
  );

  const columns = [
    { title: "T-Shirts", items: womenTops.filter((p) => p.subcategory === "T-Shirts") },
    { title: "Sweatshirts", items: womenTops.filter((p) => p.subcategory === "Sweatshirts") },
    { title: "Fleece", items: womenTops.filter((p) => p.subcategory === "Fleece") },
    { title: "Bra Tops", items: womenTops.filter((p) => p.subcategory === "Bra Tops") },
    { title: "Graphic T-Shirts", items: womenTops.filter((p) => p.subcategory === "Graphic T-Shirts") },
    { title: "Dresses", items: womenTops.filter((p) => p.subcategory === "Dresses") },
    { title: "Everyday Essentials", items: womenTops.filter((p) => p.subcategory === "Everyday Essentials") },
  ].filter((col) => col.items.length > 0);

  if (columns.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl lg:text-3xl tracking-tight mb-4">Interactive Clothing Showroom</h1>
        <p className="text-[#666666] mb-8">No products available in the showroom at this time.</p>
        <Link href="/women" className="inline-flex px-8 py-4 bg-[#111111] text-white text-sm tracking-[0.2em] uppercase hover:bg-black">
          SHOP WOMEN
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl lg:text-3xl tracking-tight mb-2">Interactive Clothing Showroom</h1>
        <p className="text-[#666666] mb-8">Women's Tops — displayed on premium racks</p>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-8 px-4 sm:px-6 lg:px-8 pb-8 min-w-max">
          {columns.map((column) => (
            <div key={column.title} className="w-[280px] flex-shrink-0">
              <div className="border-b border-[#E5E5E5] pb-4 mb-6">
                <h2 className="text-lg tracking-tight">{column.title}</h2>
                <p className="text-sm text-[#666666]">{column.items.length} items</p>
              </div>
              <div className="space-y-8">
                {column.items.map((product) => (
                  <Link key={product.id} href={`/product/${product.slug}`} className="group block">
                    <div className="relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-8 bg-[#CCCCCC]" />
                      <div className="pt-6">
                        <div className="relative aspect-[3/4] bg-white border border-[#E5E5E5] overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center space-y-1">
                      <p className="text-sm">{product.name}</p>
                      <p className="text-sm">₹{product.price.toLocaleString("en-IN")}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
