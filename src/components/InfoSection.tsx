
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "left" | "center" | "right";
  id?: string;
}

const InfoSection = ({ title, children, className, variant = "center", id }: InfoSectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24 px-4",
        variant === "left" && "bg-slate-50",
        variant === "center" && "bg-white",
        variant === "right" && "bg-slate-50",
        className
      )}
    >
      <div 
        className={cn(
          "container max-w-6xl mx-auto",
          variant === "left" && "text-left",
          variant === "center" && "text-center",
          variant === "right" && "text-right"
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 inline-block relative">
          {title}
          <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gaia-gradient rounded-full"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default InfoSection;
