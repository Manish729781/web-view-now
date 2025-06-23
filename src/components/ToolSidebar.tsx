
import React from 'react';
import { Card } from "@/components/ui/card";

interface ToolSidebarProps {
  toolDetails: any;
}

const ToolSidebar = ({ toolDetails }: ToolSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Tool Info */}
      <Card className="p-6 bg-white">
        <h3 className="text-xl font-bold text-[#22223b] mb-4">Tool Information</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-[#22223b]">Category</label>
            <p className="text-[#5f5f7a]">{toolDetails.category}</p>
          </div>
          <div>
            <label className="text-sm font-semibold text-[#22223b]">Pricing</label>
            <p className="text-[#5f5f7a]">{toolDetails.pricing}</p>
          </div>
          <div>
            <label className="text-sm font-semibold text-[#22223b]">Website</label>
            <a 
              href={toolDetails.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#7c5fff] hover:underline block text-sm"
            >
              {toolDetails.website}
            </a>
          </div>
        </div>
      </Card>

      {/* Related Tools */}
      <Card className="p-6 bg-white">
        <h3 className="text-xl font-bold text-[#22223b] mb-4">Related Tools</h3>
        <div className="space-y-3">
          {['Claude', 'Gemini', 'Perplexity'].map((tool, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f3f1ff] cursor-pointer">
              <div className="w-8 h-8 bg-[#ede9fe] rounded-lg flex items-center justify-center">
                <span className="text-[#7c5fff] font-bold text-sm">
                  {tool.substring(0, 2)}
                </span>
              </div>
              <span className="text-[#22223b] font-medium">{tool}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ToolSidebar;
