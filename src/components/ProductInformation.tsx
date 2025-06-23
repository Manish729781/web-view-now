
import React from 'react';
import { Card } from "@/components/ui/card";

interface ProductInformationProps {
  toolDetails: any;
}

const ProductInformation = ({ toolDetails }: ProductInformationProps) => {
  if (!toolDetails.productInfo) return null;

  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#22223b] mb-6">{toolDetails.name} Product Information</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-[#22223b] mb-3">What is {toolDetails.name}?</h3>
          <p className="text-[#5f5f7a] leading-relaxed">
            {toolDetails.productInfo.whatIs}
          </p>
        </div>

        {toolDetails.productInfo.howToUse && (
          <div>
            <h3 className="text-xl font-bold text-[#22223b] mb-3">How to use {toolDetails.name}?</h3>
            <p className="text-[#5f5f7a] leading-relaxed">
              {toolDetails.productInfo.howToUse}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductInformation;
