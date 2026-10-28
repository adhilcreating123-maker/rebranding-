"use client";

import Link from "next/link";
import { useWishlist } from "@/contexts/WishlistContext";
import { X } from "lucide-react";

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl lg:text-3xl tracking-tight mb-8">Wishlist</h1>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg mb-4">Your wishlist is empty</p>
          <Link
            href="/women"
            className="inline-flex px-8 py-4 bg-[#111111] text-white !text-white text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((product) => (
            <div key={product.id} className="group relative">
              <button
                onClick={() => removeItem(product.id)}
                className="absolute top-2 right-2 z-10 p-2 bg-white/90 hover:bg-white"
                aria-label="Remove from wishlist"
              >
                <X className="w-4 h-4" />
              </button>
              <Link href={`/product/${product.slug}`}>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
