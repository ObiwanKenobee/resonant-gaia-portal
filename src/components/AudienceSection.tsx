
import InfoSection from "./InfoSection";
import FeatureCard from "./FeatureCard";

const AudienceSection = () => {
  return (
    <InfoSection 
      id="who-is-it-for"
      title="Built for the Bold" 
      variant="left"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon="🌱"
          title="Eco-Innovators"
          description="Build regenerative microgrids and AI-guided biotech"
        />
        <FeatureCard
          icon="⚙️"
          title="Tech Scientists"
          description="Prototype energy mesh components and protocols"
        />
        <FeatureCard
          icon="🛡️"
          title="Policy Makers"
          description="Craft planetary frameworks for just energy governance"
        />
        <FeatureCard
          icon="🔭"
          title="Explorers & Artists"
          description="Visualize, simulate, and story-shape futures"
        />
      </div>
    </InfoSection>
  );
};

export default AudienceSection;
