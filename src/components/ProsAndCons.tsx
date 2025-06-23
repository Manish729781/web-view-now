
import React from 'react';
import { Card } from "@/components/ui/card";

interface ProsAndConsProps {
  toolDetails: any;
}

const ProsAndCons = ({ toolDetails }: ProsAndConsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 bg-white">
        <h3 className="text-xl font-bold text-[#22223b] mb-4">Pros</h3>
        <ul className="space-y-2">
          {toolDetails.pros.map((pro: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 font-bold">+</span>
              <span className="text-[#5f5f7a]">{pro}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6 bg-white">
        <h3 className="text-xl font-bold text-[#22223b] mb-4">Cons</h3>
        <ul className="space-y-2">
          {toolDetails.cons.map((con: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-red-500 font-bold">-</span>
              <span className="text-[#5f5f7a]">{con}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ProsAndCons;
