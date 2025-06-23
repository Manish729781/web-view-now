
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

interface CoreFeaturesProps {
  toolDetails: any;
}

const CoreFeatures = ({ toolDetails }: CoreFeaturesProps) => {
  if (!toolDetails.features || toolDetails.features.length === 0) return null;

  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#22223b] mb-6">{toolDetails.name}'s Core Features</h2>
      <div className="space-y-3">
        {toolDetails.features.map((feature: string, index: number) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#7c5fff] mt-0.5 flex-shrink-0" />
            <span className="text-[#5f5f7a]">{feature}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CoreFeatures;
