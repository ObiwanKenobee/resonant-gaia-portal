
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <Card className={cn("backdrop-blur-sm border border-slate-200 hover:border-gaia-blue/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-3xl text-gaia-blue group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
