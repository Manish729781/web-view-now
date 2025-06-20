
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// All tools data consolidated
const allTools = [
  // Writing & Editing
  { id: 'chatgpt', name: 'ChatGPT', description: 'A free-to-use AI system for conversations, insights, and tasks across various domains.', icon: 'chatgpt', category: 'Writing & Editing' },
  { id: 'deepseek', name: 'DeepSeek', description: 'DeepSeek is an AI company providing foundation models and AI-powered solutions.', icon: 'deepseek', category: 'Writing & Editing' },
  { id: 'deepl', name: 'DeepL', description: 'Accurate machine translation and AI-powered writing assistance for professional use.', icon: 'deepl', category: 'Writing & Editing' },
  { id: 'notion', name: 'Notion', description: 'All-in-one workspace for notes, docs, projects, and AI-powered productivity.', icon: 'notion', category: 'Writing & Editing' },
  { id: 'quillbot', name: 'QuillBot', description: 'AI-powered writing tool for paraphrasing, grammar checking, and content improvement.', icon: 'quillbot', category: 'Writing & Editing' },
  { id: 'grammarly', name: 'Grammarly', description: 'AI writing assistant for grammar, style, and tone correction and enhancement.', icon: 'grammarly', category: 'Writing & Editing' },
  
  // Image Generation & Editing
  { id: 'openai', name: 'OpenAI', description: 'AI research and deployment company focused on building safe and beneficial AI systems.', icon: 'openai', category: 'Image Generation & Editing' },
  { id: 'adobe', name: 'Adobe', description: 'Adobe provides creative, marketing, and document management solutions with AI integration.', icon: 'adobe', category: 'Image Generation & Editing' },
  { id: 'grok', name: 'Grok', description: 'Grok is a free AI assistant by xAI for truth, objectivity, real-time information and analysis.', icon: 'grok', category: 'Image Generation & Editing', isFree: true },
  { id: 'removebg', name: 'remove.bg', description: 'AI-powered background remover for images in 5 seconds with professional results.', icon: 'removebg', category: 'Image Generation & Editing' },
  
  // Chatbots & Virtual Companions
  { id: 'janitorai', name: 'Janitor AI', description: 'Janitor AI allows users to create NSFW fictional chatbot characters for conversations.', icon: 'janitorai', category: 'Chatbots & Virtual Companions' },
  { id: 'claude', name: 'Claude', description: 'Claude is an AI assistant from Anthropic that helps with tasks requiring reasoning and analysis.', icon: 'claude', category: 'Chatbots & Virtual Companions' },
  
  // Add more tools as needed...
];

const getIconStyle = (iconName: string) => {
  const iconStyles: { [key: string]: string } = {
    chatgpt: 'bg-[#22223b] rounded-full',
    deepseek: 'bg-[#7c5fff] rounded-full',
    deepl: 'bg-[#22223b] rounded-lg',
    notion: 'bg-white border-2 border-[#22223b] rounded-lg',
    quillbot: 'bg-[#b8f2e6] rounded-full',
    grammarly: 'bg-[#38b000] rounded-full',
    openai: 'bg-white border-2 border-[#22223b] rounded-full',
    adobe: 'bg-white border-2 border-[#ff3c00] rounded-lg',
    grok: 'bg-white border-2 border-[#22223b] rounded-full',
    removebg: 'bg-[#ffe066] rounded-full',
    janitorai: 'bg-[#38b6ff] rounded-full',
    claude: 'bg-[#ff914d] rounded-full',
  };
  
  return iconStyles[iconName] || 'bg-[#ede9fe] rounded-lg';
};

const ToolDetail = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = allTools.find(t => t.id === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f3f1ff]">
        <Header />
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#22223b] mb-4">Tool Not Found</h1>
            <p className="text-[#5f5f7a] mb-8">The tool you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-[#7c5fff] text-white px-6 py-3 rounded-xl hover:bg-[#5f4bb6] transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f1ff]">
      <Header />
      <Navbar />
      
      <div className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#7c5fff] hover:text-[#5f4bb6] mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Tools
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-6 mb-8">
            <div className={`w-16 h-16 ${getIconStyle(tool.icon)} flex items-center justify-center flex-shrink-0`}>
              {tool.icon === 'rf123' && <span className="text-white font-bold text-xl">RF</span>}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold text-[#22223b]">{tool.name}</h1>
                {tool.isFree && (
                  <span className="bg-[#ede9fe] text-[#7c5fff] text-sm font-bold rounded-lg px-3 py-1">
                    Free
                  </span>
                )}
              </div>
              
              <p className="text-[#5f5f7a] text-lg leading-relaxed mb-4">
                {tool.description}
              </p>
              
              <div className="text-sm text-[#7c5fff] font-semibold">
                Category: {tool.category}
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold text-[#22223b] mb-4">About {tool.name}</h2>
            <p className="text-[#5f5f7a] leading-relaxed mb-6">
              {tool.description} This AI tool provides comprehensive solutions for users looking to enhance their productivity and creativity through advanced artificial intelligence capabilities.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-[#7c5fff] text-white px-8 py-3 rounded-xl hover:bg-[#5f4bb6] transition-colors font-semibold">
                Visit Website
              </button>
              <button className="border-2 border-[#7c5fff] text-[#7c5fff] px-8 py-3 rounded-xl hover:bg-[#7c5fff] hover:text-white transition-colors font-semibold">
                Save Tool
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ToolDetail;
