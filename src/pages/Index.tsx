
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import AudienceSection from "@/components/AudienceSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <WhatIsSection />
        <WhyItMattersSection />
        <AudienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
