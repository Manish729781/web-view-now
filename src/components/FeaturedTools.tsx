
import React from 'react';
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

const FeaturedTools = () => {
  const navigate = useNavigate();

  const featuredCards: CardData[] = [
    {
      id: "chatgpt",
      title: "ChatGPT",
      description: "A free-to-use AI system for conversations, insights, and tasks. Experience the power of advanced language AI for writing, coding, and problem-solving.",
      icon: <Code />,
      theme: "primary",
      onClick: () => navigate('/tool/chatgpt'),
    },
    {
      id: "deepseek",
      title: "DeepSeek",
      description: "DeepSeek is an AI company providing foundation models and advanced AI solutions for developers and businesses worldwide.",
      icon: <Database />,
      theme: "secondary",
      onClick: () => navigate('/tool/deepseek'),
    },
    {
      id: "deepl",
      title: "DeepL",
      description: "Accurate machine translation and AI-powered writing assistance for professional and personal communication needs.",
      icon: <Globe />,
      theme: "info",
      onClick: () => navigate('/tool/deepl'),
    },
    {
      id: "notion",
      title: "Notion",
      description: "All-in-one workspace for notes, docs, projects, and AI-powered productivity tools that transform how teams collaborate.",
      icon: <Palette />,
      theme: "accent",
      onClick: () => navigate('/tool/notion'),
    },
    {
      id: "quillbot",
      title: "QuillBot",
      description: "AI-powered writing tool for paraphrasing, grammar checking, and content enhancement to improve your writing quality.",
      icon: <Zap />,
      theme: "warning",
      onClick: () => navigate('/tool/quillbot'),
    },
    {
      id: "grammarly",
      title: "Grammarly",
      description: "AI writing assistant for grammar, style, and tone correction and suggestions to make your writing more effective.",
      icon: <Shield />,
      theme: "success",
      onClick: () => navigate('/tool/grammarly'),
    },
    {
      id: "studocu",
      title: "Studocu",
      description: "Studocu is a platform for students to share and access study materials, notes, and educational resources globally.",
      icon: <Users />,
      theme: "neutral",
      onClick: () => navigate('/tool/studocu'),
    },
    {
      id: "gamma",
      title: "Gamma",
      description: "AI-powered platform for creating presentations, webpages, and documents with beautiful design and smart automation.",
      icon: <Star />,
      theme: "danger",
      onClick: () => navigate('/tool/gamma'),
    },
    {
      id: "zerogpt",
      title: "ZeroGPT",
      description: "ZeroGPT is an AI content detector and offers various writing tools for content authenticity and quality assurance.",
      icon: <Heart />,
      theme: "secondary",
      onClick: () => navigate('/tool/zerogpt'),
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#22223b] mb-4">Featured AI Tools</h2>
          <p className="text-lg text-[#5f5f7a] max-w-2xl mx-auto">
            Discover the most powerful AI tools that are transforming how we work, create, and innovate
          </p>
        </div>
        
        <Card3DList
          cards={featuredCards}
          columns={3}
          gap="lg"
          size="md"
          variant="premium"
          animated={true}
          staggerDelay={0.1}
        />
      </div>
    </div>
  );
};

export default FeaturedTools;
