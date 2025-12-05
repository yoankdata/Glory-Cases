import { Hero } from "@/components/sections/Hero";
import { BestSellers } from "@/components/sections/BestSellers";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { CustomTeaser } from "@/components/sections/CustomTeaser";
import { WhatsAppFloater } from "@/components/business/WhatsAppFloater";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <BestSellers />
      <Craftsmanship />
      <CustomTeaser />
      <WhatsAppFloater />
    </div>
  );
}
