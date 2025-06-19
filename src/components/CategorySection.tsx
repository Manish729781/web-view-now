
import React, { useState } from 'react';
import ToolCard from './ToolCard';

interface CategorySectionProps {
  title: string;
  categories: string[];
  tools: Array<{
    name: string;
    description: string;
    icon: string;
    isFree?: boolean;
  }>;
  sidebarTools?: Array<{
    name: string;
    description: string;
    icon: string;
    isFree?: boolean;
  }>;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  title, 
  categories, 
  tools, 
  sidebarTools 
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="px-[5vw] py-12">
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold mb-6 text-[#22223b]">{title}</h1>
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 text-lg font-semibold rounded-xl transition-all duration-200 shadow-sm
                ${activeCategory === category
                  ? 'bg-[#7c5fff] text-white'
                  : category === 'More »'
                  ? 'bg-[#ede9fe] text-[#22223b] font-bold'
                  : 'bg-white text-[#7c5fff] hover:bg-[#7c5fff] hover:text-white'
                }
              `}
            >
              {category}
            </button>
          ))}
          <button className="bg-[#ede9fe] text-[#22223b] font-bold px-6 py-3 text-lg rounded-xl">
            More »
          </button>
        </div>
      </div>

      <div className="flex gap-8 items-start">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>

        {sidebarTools && (
          <div className="hidden lg:flex flex-col gap-6 min-w-[340px] max-w-[370px]">
            {sidebarTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySection;
