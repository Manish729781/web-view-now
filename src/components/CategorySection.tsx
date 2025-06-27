
import React, { useState } from 'react';
import { Card3DList, CardData } from '@/components/ui/animated-3d-card';
import { useNavigate } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  Users, 
  Zap, 
  Globe, 
  Heart, 
  Star, 
  Database, 
  Shield 
} from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  icon: string;
  isFree?: boolean;
}

interface CategorySectionProps {
  title: string;
  categories: string[];
  tools: Tool[];
  sidebarTools?: Tool[];
}

const getIconForTool = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    chatgpt: <Code />,
    deepseek: <Database />,
    deepl: <Globe />,
    notion: <Palette />,
    quillbot: <Zap />,
    grammarly: <Shield />,
    studocu: <Users />,
    gamma: <Star />,
    zerogpt: <Heart />,
    // Add more icon mappings as needed
  };
  return iconMap[iconName] || <Code />;
};

const getThemeForIndex = (index: number) => {
  const themes = ['primary', 'secondary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'] as const;
  return themes[index % themes.length];
};

const CategorySection: React.FC<CategorySectionProps> = ({ 
  title, 
  categories, 
  tools, 
  sidebarTools 
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const mainCards: CardData[] = tools.slice(0, 12).map((tool, index) => ({
    id: tool.name.toLowerCase().replace(/\s+/g, '-'),
    title: tool.name,
    description: tool.description,
    icon: getIconForTool(tool.icon),
    theme: getThemeForIndex(index),
    onClick: () => navigate(`/tool/${tool.name.toLowerCase().replace(/\s+/g, '-')}`),
  }));

  const sidebarCards: CardData[] = sidebarTools ? sidebarTools.map((tool, index) => ({
    id: `sidebar-${tool.name.toLowerCase().replace(/\s+/g, '-')}`,
    title: tool.name,
    description: tool.description,
    icon: getIconForTool(tool.icon),
    theme: getThemeForIndex(index + 4),
    onClick: () => navigate(`/tool/${tool.name.toLowerCase().replace(/\s+/g, '-')}`),
  })) : [];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#22223b] mb-6">{title}</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[#7c5fff] text-white'
                      : 'bg-gray-100 text-[#5f5f7a] hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Main Tools Grid */}
            <Card3DList
              cards={mainCards}
              columns={4}
              gap="md"
              size="sm"
              variant="default"
              animated={true}
              staggerDelay={0.05}
            />
          </div>

          {/* Sidebar Tools */}
          {sidebarTools && sidebarTools.length > 0 && (
            <div className="w-80 ml-8">
              <h3 className="text-lg font-semibold text-[#22223b] mb-4">Trending Tools</h3>
              <Card3DList
                cards={sidebarCards}
                columns={1}
                gap="sm"
                size="sm"
                variant="minimal"
                animated={true}
                staggerDelay={0.1}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
