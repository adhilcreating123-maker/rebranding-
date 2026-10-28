import Link from "next/link";

export function Collaborations() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="relative aspect-[16/6] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Special collaborations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-white text-xs tracking-[0.3em] uppercase mb-4">Special Collaborations</p>
            <h2 className="text-white text-3xl lg:text-5xl tracking-tight mb-8">Limited Edition Series</h2>
            <Link
              href="/women"
              className="inline-flex px-8 py-4 bg-white text-[#111111] text-sm tracking-[0.2em] uppercase hover:bg-[#F4F4F2] transition-colors"
            >
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
