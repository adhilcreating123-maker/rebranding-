import Link from "next/link";

export function EditorialCampaign() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Editorial campaign"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:pl-8">
          <p className="text-xs tracking-[0.3em] uppercase mb-4">Editorial</p>
          <h2 className="text-3xl lg:text-5xl tracking-tight leading-tight">
            The Art of Less
          </h2>
          <p className="mt-6 text-lg text-[#333333] max-w-md">
            Every piece is considered. Every detail refined. A wardrobe built to endure beyond seasons.
          </p>
          <Link
            href="/women"
            className="inline-flex mt-10 px-8 py-4 bg-[#111111] text-white !text-white text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
          >
            VIEW THE EDIT
          </Link>
        </div>
      </div>
    </section>
  );
}
