import { Leaf, Wind, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Thoughtful Materials",
    description: "Organic cotton and recycled fibers selected with care.",
  },
  {
    icon: Wind,
    title: "Light & Durable",
    description: "Designed for comfort without compromising longevity.",
  },
  {
    icon: ShieldCheck,
    title: "Refined Construction",
    description: "Clean finishes and considered details in every piece.",
  },
];

export function FabricHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {highlights.map((highlight) => (
          <div key={highlight.title} className="text-center">
            <highlight.icon className="w-6 h-6 mx-auto mb-4" />
            <h3 className="text-lg mb-2">{highlight.title}</h3>
            <p className="text-sm text-[#666666]">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
