import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import OrderForm from "@/components/OrderForm";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen" id="top">
      <HeroSection />
      <GallerySection />
      <StorySection />
      <FeaturesSection />
      <PricingSection />
      <TrustSection />
      <OrderForm />
      <FinalCTA />
      <footer className="py-8 text-center font-body text-sm text-muted-foreground border-t border-border">
        © 2026 Nova Lux Mode — Tous droits réservés
      </footer>
    </main>
  );
};

export default Index;
