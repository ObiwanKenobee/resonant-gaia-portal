
import InfoSection from "./InfoSection";
import { Check } from "lucide-react";

const WhyItMattersSection = () => {
  const bulletPoints = [
    "Clean energy networks for the Global South and climate-fragile zones",
    "Ethical AI protocols rooted in indigenous data sovereignty",
    "Zero-extraction principles and regenerative design",
    "Open access for local inventors, educators, and planetary stewards"
  ];

  return (
    <InfoSection 
      id="why-it-matters"
      title="Planetary Justice Through Technological Stewardship"
      variant="right"
      className="bg-gradient-to-br from-white to-slate-100"
    >
      <div className="max-w-2xl ml-auto">
        <ul className="space-y-4 text-left">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 bg-gaia-green/20 p-1 rounded-full">
                <Check className="h-5 w-5 text-gaia-green" />
              </span>
              <span className="text-lg text-slate-700">{point}</span>
            </li>
          ))}
        </ul>
        
        {/* Visual element */}
        <div className="mt-12 p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="h-4 w-4 rounded-full bg-gaia-amber"></div>
            <div className="h-4 w-4 rounded-full bg-gaia-green"></div>
            <div className="h-4 w-4 rounded-full bg-gaia-blue"></div>
            <div className="h-4 w-4 rounded-full bg-gaia-teal"></div>
          </div>
          <div className="my-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gaia-gradient w-2/3 rounded-full"></div>
          </div>
          <div className="text-sm text-center text-slate-500">
            Regenerative Index: Harmony with Planetary Boundaries
          </div>
        </div>
      </div>
    </InfoSection>
  );
};

export default WhyItMattersSection;
