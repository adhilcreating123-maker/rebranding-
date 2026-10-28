import Link from "next/link";
import { brand } from "@/config/brand";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="NOVA WEAR editorial campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.9]">
            {brand.slogan}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#333333] max-w-md">
            {brand.tagline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/women"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#111111] text-white !text-white text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
            >
              EXPLORE COLLECTION
            </Link>
            <Link
              href="/women?sort=newest"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#111111] text-[#111111] text-sm tracking-[0.2em] uppercase hover:bg-[#111111] hover:text-white transition-colors"
            >
              SHOP NEW ARRIVALS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
