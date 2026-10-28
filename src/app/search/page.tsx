"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Search } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = query
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl lg:text-3xl tracking-tight mb-8">Search</h1>
      <div className="relative max-w-md mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-12 pr-4 py-3 border border-[#E5E5E5] focus:outline-none focus:border-[#111111]"
        />
      </div>
      {query && (
        <div>
          <p className="text-sm text-[#666666] mb-6">{results.length} results for "{query}"</p>
          {results.length === 0 ? (
            <p className="text-sm">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {results.map((product) => (
                <Link key={product.id} href={`/product/${product.slug}`} className="group">
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
          )}
        </div>
      )}
    </div>
  );
}
