
import React from 'react';
import { Card } from "@/components/ui/card";

interface UseCasesProps {
  toolDetails: any;
}

const UseCases = ({ toolDetails }: UseCasesProps) => {
  if (!toolDetails.useCases || toolDetails.useCases.length === 0) return null;

  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#22223b] mb-6">{toolDetails.name}'s Use Cases</h2>
      <div className="space-y-4">
        {toolDetails.useCases.map((useCase: any, index: number) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#7c5fff] text-white rounded-full flex items-center justify-center font-bold text-sm">
              #{useCase.number}
            </div>
            <p className="text-[#5f5f7a] flex-1">{useCase.title}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UseCases;
