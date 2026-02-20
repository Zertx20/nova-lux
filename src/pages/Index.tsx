import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import OrderForm from "@/components/OrderForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
      <Footer />
    </main>
  );
};

export default Index;
