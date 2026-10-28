import Link from "next/link";

export function EverydayEssentials() {
  return (
    <section className="bg-[#F4F4F2] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4">Collection</p>
          <h2 className="text-3xl lg:text-4xl tracking-tight">Everyday Essentials</h2>
          <p className="mt-4 text-[#333333]">Timeless pieces designed for constant rotation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/women?sub=T-Shirts" className="group relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="T-Shirts"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-sm tracking-[0.2em] uppercase">T-Shirts</p>
            </div>
          </Link>
          <Link href="/women?sub=Sweatshirts" className="group relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sweatshirts"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-sm tracking-[0.2em] uppercase">Sweatshirts</p>
            </div>
          </Link>
          <Link href="/women?sub=Trousers" className="group relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Trousers"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-sm tracking-[0.2em] uppercase">Trousers</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
