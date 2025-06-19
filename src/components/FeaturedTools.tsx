
import React from 'react';
import ToolCard from './ToolCard';

const FeaturedTools = () => {
  const featuredTools = [
    { name: 'seo.ing', description: 'AI SEO writing tool for generating high-ranking articles quickly.', icon: 'seoing' },
    { name: 'DreamVid', description: 'AI image to video generator for animating photos and creating…', icon: 'dreamvid' },
    { name: 'Novi AI', description: 'AI video generator creating high-quality videos from text with…', icon: 'novi' },
    { name: 'Skywork', description: 'AI-powered workspace agent for productivity and information…', icon: 'skywork' },
    { name: 'Zintra', description: 'Crypto automation and real-world investments for passive income.', icon: 'zintra' },
    { name: 'LIP-SYNC', description: 'AI lip sync technology transforms photos into lifelike talking videos.', icon: 'lipsync' },
    { name: 'Colorings', description: 'AI tool for custom and pre-designed printable coloring…', icon: 'colorings' },
    { name: 'KontextFlux.app', description: 'AI-powered image generation and natural language image…', icon: 'kontextflux' },
    { name: 'Wittro', description: 'Undetectable AI assistant for interviews and meetings.', icon: 'wittro' },
    { name: 'Shoplauncher AI', description: 'A fully optimized AI Shopify store with winning products, ready-to-sell…', icon: 'shoplauncher', isFree: true },
    { name: 'Tila', description: 'Visual AI workspace for multimodal projects and workflow…', icon: 'tila' },
    { name: 'BestModelAI', description: 'Automatically routes AI requests to the best model from 100+…', icon: 'bestmodel' },
    { name: 'Nural.News', description: 'AI-generated podcasts from articles, blogs, and news on…', icon: 'nuralnews' },
    { name: 'Keevx', description: 'Keevx: AI Video Generator with Realistic Avatars | Free to Start', icon: 'keevx' },
    { name: 'DeFiPulseX', description: 'Advanced trading bots, secure staking, and portfolio management…', icon: 'defipulse' },
    { name: 'Fluig', description: 'Free AI diagram generator for visual collaboration, turning ide…', icon: 'fluig' },
    { name: 'Study Space', description: 'Study Space – Turn any document into a personalized…', icon: 'studyspace', isFree: true },
    { name: 'Flux Kontext AI', description: 'AI image editor transforming photos with natural language…', icon: 'fluxkontext' },
    { name: 'Kontext AI', description: 'Free AI tool for context-aware image generation and editing.', icon: 'kontextai', isFree: true },
    { name: 'i10X', description: 'All-in-one AI platform with 500+ AI tools and top models under one…', icon: 'i10x' }
  ];

  return (
    <div className="px-[5vw] mb-8">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-4xl font-extrabold text-[#22223b]">
          Featured<span className="text-[#7c5fff]">*</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {featuredTools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTools;
