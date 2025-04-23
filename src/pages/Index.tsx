
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DevelopmentSection } from "@/components/DevelopmentSection";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-sold-bg">
      <HeroSection />
      <BenefitsSection />
      <DevelopmentSection />
      <WaitlistForm />
    </div>
  );
};

export default Index;
