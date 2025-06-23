
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from 'lucide-react';

interface AlternativesSectionProps {
  toolDetails: any;
}

const AlternativesSection = ({ toolDetails }: AlternativesSectionProps) => {
  if (!toolDetails.alternatives || toolDetails.alternatives.length === 0) return null;

  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#22223b] mb-6 flex items-center gap-2">
        Alternatives
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolDetails.alternatives.map((alternative: any, index: number) => (
          <Card key={index} className="p-4 border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#ede9fe] rounded-lg flex items-center justify-center">
                <span className="text-[#7c5fff] font-bold">
                  {alternative.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-[#22223b]">{alternative.name}</h3>
                <Badge className="bg-green-100 text-green-700 text-xs">Free</Badge>
              </div>
            </div>
            
            <p className="text-sm text-[#5f5f7a] mb-3">{alternative.description}</p>
            
            <div className="flex items-center gap-4 text-xs text-[#5f5f7a] mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span>{alternative.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{alternative.users}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {alternative.features.slice(0, 2).map((feature: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
            
            <Button size="sm" className="w-full bg-[#7c5fff] hover:bg-[#5f4bb6] text-white">
              Visit
            </Button>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default AlternativesSection;
