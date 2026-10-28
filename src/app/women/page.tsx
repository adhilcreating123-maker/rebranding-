import { products, getProductsByCategory } from "@/data/products";
import Link from "next/link";

export default function WomenPage() {
  const womenProducts = getProductsByCategory("women");
  const subcategories = ["All Clothing", "T-Shirts", "Tops", "Shirts", "Knitwear", "Sweatshirts", "Trousers", "Jeans", "Dresses", "Skirts", "Outerwear", "Innerwear", "Accessories", "Everyday Essentials", "Seasonal Collection"];

  return (
    <div>
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Women collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-white text-xs tracking-[0.3em] uppercase mb-4">Women</p>
            <h1 className="text-white text-4xl lg:text-6xl tracking-tight">Refined Essentials</h1>
            <p className="mt-4 text-white/90">Thoughtfully designed for every day</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-[#666666] mb-8">
          <Link href="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <span className="text-[#111111]">Women</span>
        </nav>

        <div className="flex flex-wrap gap-3 mb-12">
          {subcategories.map((sub) => (
            <button
              key={sub}
              className="px-4 py-2 text-sm border border-[#E5E5E5] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-[#111111]"
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <p className="text-sm">{womenProducts.length} items</p>
          <div className="flex items-center gap-4">
            <button className="text-sm hover:opacity-60 text-[#111111]">Filter</button>
            <button className="text-sm hover:opacity-60 text-[#111111]">Sort: Newest</button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {womenProducts.map((product) => (
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
      </div>
    </div>
  );
}
