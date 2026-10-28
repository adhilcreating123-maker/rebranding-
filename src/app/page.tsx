import { HeroSection } from "@/components/home/HeroSection";
import { CategoryCards } from "@/components/home/CategoryCards";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { ProductGrid } from "@/components/home/ProductGrid";
import { EditorialCampaign } from "@/components/home/EditorialCampaign";
import { EverydayEssentials } from "@/components/home/EverydayEssentials";
import { FabricHighlights } from "@/components/home/FabricHighlights";
import { TrendingColours } from "@/components/home/TrendingColours";
import { Collaborations } from "@/components/home/Collaborations";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { Newsletter } from "@/components/home/Newsletter";
import { getNewArrivals, getBestSellers } from "@/data/products";

export default function Home() {
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();

  return (
    <div>
      <HeroSection />
      <CategoryCards />
      <ProductCarousel title="New Arrivals" products={newArrivals} />
      <ProductGrid title="Best Sellers" products={bestSellers} />
      <EditorialCampaign />
      <EverydayEssentials />
      <FabricHighlights />
      <TrendingColours />
      <Collaborations />
      <BrandPhilosophy />
      <Newsletter />
    </div>
  );
}
