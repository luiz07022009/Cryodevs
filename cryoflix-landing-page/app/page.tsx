import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProductSection } from "@/components/product-section";
import { PricingSection } from "@/components/pricing-section";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
      <PricingSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
