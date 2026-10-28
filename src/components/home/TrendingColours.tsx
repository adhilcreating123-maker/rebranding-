import Link from "next/link";

const colours = [
  { name: "Noir", color: "#111111", href: "/women?color=black" },
  { name: "Ivory", color: "#FFFFFF", href: "/women?color=white", border: true },
  { name: "Soft Grey", color: "#F4F4F2", href: "/women?color=grey" },
  { name: "Crimson", color: "#D92332", href: "/women?color=red" },
];

export function TrendingColours() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl tracking-tight">Trending Colours</h2>
        <p className="mt-4 text-[#333333]">A refined palette for every mood</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {colours.map((colour) => (
          <Link key={colour.name} href={colour.href} className="group text-center">
            <div
              className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full ${colour.border ? "border border-[#E5E5E5]" : ""}`}
              style={{ backgroundColor: colour.color }}
            />
            <p className="mt-3 text-sm group-hover:opacity-60 transition-opacity">{colour.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
