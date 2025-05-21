
import InfoSection from "./InfoSection";

const WhatIsSection = () => {
  return (
    <InfoSection
      id="what-is"
      title="A New Energy Paradigm for a Post-Carbon Planet"
      variant="center"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          Born from the imagined convergence of Tesla's wireless power, Mallove's cold fusion dream, and Afro-Indigenous AI ethics, Resonant Gaia is a decentralized clean energy mesh.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Governed by intelligent climate protocols. Accessible to all. Aligned with the Earth.
        </p>
        
        {/* Decorative energy node visualization */}
        <div className="mt-12 relative h-48 w-full max-w-2xl mx-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gaia-green/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gaia-blue/20 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gaia-teal/20 rounded-full animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="50%" x2="33%" y2="50%" stroke="#27AB83" strokeWidth="2" strokeOpacity="0.5" />
            <line x1="50%" y1="50%" x2="67%" y2="50%" stroke="#2E5BE0" strokeWidth="2" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
    </InfoSection>
  );
};

export default WhatIsSection;
