
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 circuit-overlay opacity-30"></div>
      
      {/* Animated energy orbs - purely decorative */}
      <div className="absolute w-32 h-32 rounded-full bg-gaia-green/20 blur-xl animate-float top-1/4 left-1/4"></div>
      <div className="absolute w-40 h-40 rounded-full bg-gaia-blue/20 blur-xl animate-float animation-delay-2000 bottom-1/4 right-1/3"></div>
      <div className="absolute w-24 h-24 rounded-full bg-gaia-amber/20 blur-xl animate-pulse-slow top-1/3 right-1/4"></div>
      
      <div className="container relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gaia-green to-gaia-blue bg-clip-text text-transparent animate-pulse-slow">
          Resonant Gaia
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-700 max-w-3xl mx-auto">
          Decentralized Energy. Ethical AI. Planetary Resilience.
        </p>
        <p className="text-lg md:text-xl mb-12 text-slate-600 max-w-2xl mx-auto">
          A visionary platform fusing clean fusion, wireless power, and indigenous AI to co-create an energy commons — for Earth and beyond.
        </p>
        <Button asChild className="energy-wave bg-gaia-gradient text-white text-lg px-8 py-6 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <Link to="/auth">
            🔐 Enter the Energy Mesh
          </Link>
        </Button>
      </div>
      
      {/* Energy wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gaia-blue/10 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
