import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// All tools data consolidated with complete tool list
const allTools = [
  // AI Tools from the original app
  { id: 'seoing', name: 'SEO.ing', description: 'Advanced SEO analysis and optimization tool powered by AI for better search rankings.', icon: 'seoing', category: 'SEO & Marketing' },
  { id: 'dreamvid', name: 'DreamVid', description: 'AI-powered video creation and editing platform for stunning visual content.', icon: 'dreamvid', category: 'Video Creation' },
  { id: 'novi', name: 'Novi', description: 'Smart AI assistant for productivity and task management with intelligent automation.', icon: 'novi', category: 'Productivity' },
  { id: 'skywork', name: 'Skywork', description: 'Cloud-based AI development platform for building and deploying machine learning models.', icon: 'skywork', category: 'Development' },
  { id: 'zintra', name: 'Zintra', description: 'AI-driven data analytics and business intelligence platform for insights.', icon: 'zintra', category: 'Analytics' },
  { id: 'lipsync', name: 'LipSync', description: 'Advanced AI lip-syncing technology for video content creation and dubbing.', icon: 'lipsync', category: 'Video Creation' },
  { id: 'colorings', name: 'Colorings', description: 'AI-powered color palette generator and design tool for creative projects.', icon: 'colorings', category: 'Design' },
  { id: 'kontextflux', name: 'KontextFlux', description: 'Context-aware AI writing assistant for content creation and editing.', icon: 'kontextflux', category: 'Writing & Editing' },
  { id: 'wittro', name: 'Wittro', description: 'AI-powered social media management and content optimization platform.', icon: 'wittro', category: 'Social Media' },
  { id: 'shoplauncher', name: 'ShopLauncher', description: 'AI-driven e-commerce platform builder with automated store setup.', icon: 'shoplauncher', category: 'E-commerce' },
  { id: 'tila', name: 'Tila', description: 'AI personal assistant for scheduling, reminders, and task organization.', icon: 'tila', category: 'Productivity' },
  { id: 'bestmodel', name: 'BestModel', description: 'AI model comparison and selection platform for machine learning projects.', icon: 'bestmodel', category: 'Development' },
  { id: 'nuralnews', name: 'NuralNews', description: 'AI-curated news aggregation and personalized content delivery platform.', icon: 'nuralnews', category: 'News & Media' },
  { id: 'keevx', name: 'KeevX', description: 'Advanced AI security and monitoring solution for digital assets protection.', icon: 'keevx', category: 'Security' },
  { id: 'defipulse', name: 'DeFiPulse', description: 'AI-powered DeFi analytics and investment tracking platform.', icon: 'defipulse', category: 'Finance' },
  { id: 'fluig', name: 'Fluig', description: 'Business process management platform with AI-driven workflow optimization.', icon: 'fluig', category: 'Business' },
  { id: 'studyspace', name: 'StudySpace', description: 'AI-enhanced learning platform with personalized study plans and content.', icon: 'studyspace', category: 'Education' },
  { id: 'fluxkontext', name: 'FluxKontext', description: 'Context-aware AI content generation for marketing and communications.', icon: 'fluxkontext', category: 'Marketing' },
  { id: 'kontextai', name: 'KontextAI', description: 'Advanced contextual AI for natural language processing and understanding.', icon: 'kontextai', category: 'AI Development' },
  { id: 'i10x', name: 'i10X', description: 'AI-powered productivity multiplier for enhanced work efficiency and output.', icon: 'i10x', category: 'Productivity' },
  
  // Popular AI Tools
  { id: 'chatgpt', name: 'ChatGPT', description: 'A free-to-use AI system for conversations, insights, and tasks across various domains.', icon: 'chatgpt', category: 'Writing & Editing' },
  { id: 'deepseek', name: 'DeepSeek', description: 'DeepSeek is an AI company providing foundation models and AI-powered solutions.', icon: 'deepseek', category: 'Writing & Editing' },
  { id: 'deepl', name: 'DeepL', description: 'Accurate machine translation and AI-powered writing assistance for professional use.', icon: 'deepl', category: 'Writing & Editing' },
  { id: 'notion', name: 'Notion', description: 'All-in-one workspace for notes, docs, projects, and AI-powered productivity.', icon: 'notion', category: 'Writing & Editing' },
  { id: 'quillbot', name: 'QuillBot', description: 'AI-powered writing tool for paraphrasing, grammar checking, and content improvement.', icon: 'quillbot', category: 'Writing & Editing' },
  { id: 'grammarly', name: 'Grammarly', description: 'AI writing assistant for grammar, style, and tone correction and enhancement.', icon: 'grammarly', category: 'Writing & Editing' },
  { id: 'studocu', name: 'StudoCu', description: 'AI-powered study platform with document sharing and learning resources.', icon: 'studocu', category: 'Education' },
  { id: 'gamma', name: 'Gamma', description: 'AI-powered presentation and content creation platform for professional docs.', icon: 'gamma', category: 'Presentation' },
  { id: 'zerogpt', name: 'ZeroGPT', description: 'AI content detection tool to identify AI-generated text and content.', icon: 'zerogpt', category: 'AI Detection' },
  { id: 'beacons', name: 'Beacons', description: 'AI-powered link-in-bio tool for creators and influencers.', icon: 'beacons', category: 'Creator Tools' },
  { id: 'perchance', name: 'Perchance', description: 'AI random generator platform for creative content and idea generation.', icon: 'perchance', category: 'Creative Tools' },
  { id: 'monica', name: 'Monica', description: 'AI assistant powered by ChatGPT for browsing, searching, and productivity.', icon: 'monica', category: 'AI Assistant' },
  { id: 'fluxx', name: 'Fluxx', description: 'AI-powered workflow automation and business process optimization tool.', icon: 'fluxx', category: 'Business' },
  
  // Image & Creative Tools
  { id: 'openai', name: 'OpenAI', description: 'AI research and deployment company focused on building safe and beneficial AI systems.', icon: 'openai', category: 'Image Generation & Editing' },
  { id: 'adobe', name: 'Adobe', description: 'Adobe provides creative, marketing, and document management solutions with AI integration.', icon: 'adobe', category: 'Image Generation & Editing' },
  { id: 'grok', name: 'Grok', description: 'Grok is a free AI assistant by xAI for truth, objectivity, real-time information and analysis.', icon: 'grok', category: 'Image Generation & Editing', isFree: true },
  { id: 'removebg', name: 'remove.bg', description: 'AI-powered background remover for images in 5 seconds with professional results.', icon: 'removebg', category: 'Image Generation & Editing' },
  { id: 'shutterstock', name: 'Shutterstock', description: 'Stock photography and AI-generated content platform for creative projects.', icon: 'shutterstock', category: 'Stock Media' },
  { id: 'capcut', name: 'CapCut', description: 'AI-powered video editing app with advanced effects and editing tools.', icon: 'capcut', category: 'Video Editing' },
  { id: 'seaart', name: 'SeaArt', description: 'AI art generation platform for creating stunning digital artwork and illustrations.', icon: 'seaart', category: 'AI Art' },
  { id: 'photoroom', name: 'PhotoRoom', description: 'AI-powered photo editing and background removal tool for professional results.', icon: 'photoroom', category: 'Photo Editing' },
  { id: 'pixelcut', name: 'PixelCut', description: 'AI background remover and photo editor for e-commerce and product photos.', icon: 'pixelcut', category: 'Photo Editing' },
  { id: 'deepai', name: 'DeepAI', description: 'AI tools for image generation, enhancement, and creative content creation.', icon: 'deepai', category: 'AI Tools' },
  { id: 'freepik', name: 'Freepik', description: 'Vector graphics, stock photos, and AI-generated design resources platform.', icon: 'freepik', category: 'Design Resources' },
];

const getIconStyle = (iconName: string) => {
  const iconStyles: { [key: string]: string } = {
    seoing: 'bg-gradient-to-br from-[#7c5fff] to-[#b8b5ff]',
    dreamvid: 'bg-gradient-to-br from-[#a0c4ff] to-[#b8b5ff]',
    novi: 'bg-gradient-to-br from-[#b8b5ff] to-[#7c5fff]',
    skywork: 'bg-gradient-to-br from-[#7c5fff] to-[#a0c4ff]',
    zintra: 'bg-gradient-to-br from-[#ffe066] to-[#ffd60a]',
    lipsync: 'bg-gradient-to-br from-[#ff4b4b] to-[#ffb4a2]',
    colorings: 'bg-gradient-to-br from-[#ffb4a2] to-[#b8b5ff]',
    kontextflux: 'bg-gradient-to-br from-[#b8b5ff] to-[#a0c4ff]',
    wittro: 'bg-gradient-to-br from-[#22223b] to-[#b8b5ff]',
    shoplauncher: 'bg-gradient-to-br from-[#ede9fe] to-[#b8b5ff]',
    tila: 'bg-gradient-to-br from-[#ffb4a2] to-[#ede9fe]',
    bestmodel: 'bg-gradient-to-br from-[#b8b5ff] to-[#22223b]',
    nuralnews: 'bg-gradient-to-br from-[#a0c4ff] to-[#ede9fe]',
    keevx: 'bg-gradient-to-br from-[#b8b5ff] to-[#7c5fff]',
    defipulse: 'bg-gradient-to-br from-[#b8b5ff] to-[#ffd60a]',
    fluig: 'bg-gradient-to-br from-[#b8b5ff] to-[#a0c4ff]',
    studyspace: 'bg-gradient-to-br from-[#ede9fe] to-[#7c5fff]',
    fluxkontext: 'bg-gradient-to-br from-[#7c5fff] to-[#b8b5ff]',
    kontextai: 'bg-gradient-to-br from-[#b8b5ff] to-[#ede9fe]',
    i10x: 'bg-gradient-to-br from-[#b8b5ff] to-[#a0c4ff]',
    chatgpt: 'bg-[#22223b] rounded-full',
    deepseek: 'bg-[#7c5fff] rounded-full',
    deepl: 'bg-[#22223b] rounded-lg',
    notion: 'bg-white border-2 border-[#22223b] rounded-lg',
    quillbot: 'bg-[#b8f2e6] rounded-full',
    grammarly: 'bg-[#38b000] rounded-full',
    studocu: 'bg-black rounded-lg',
    gamma: 'bg-[#003566] rounded-full',
    zerogpt: 'bg-[#b8b5ff] rounded-full',
    beacons: 'bg-[#22223b] rounded-full',
    perchance: 'bg-[#ede9fe] rounded-full',
    monica: 'bg-[#ede9fe] rounded-full',
    fluxx: 'bg-[#22223b] rounded-lg',
    openai: 'bg-white border-2 border-[#22223b] rounded-full',
    adobe: 'bg-white border-2 border-[#ff3c00] rounded-lg',
    grok: 'bg-white border-2 border-[#22223b] rounded-full',
    removebg: 'bg-[#ffe066] rounded-full',
    shutterstock: 'bg-[#ff3c00] rounded-full',
    capcut: 'bg-white border-2 border-[#22223b] rounded-lg',
    seaart: 'bg-gradient-to-br from-[#38b6ff] to-[#6ee7b7] rounded-full',
    photoroom: 'bg-[#22223b] rounded-full',
    pixelcut: 'bg-white border-2 border-[#ffb4a2] rounded-lg',
    deepai: 'bg-white border-2 border-[#22223b] rounded-full',
    freepik: 'bg-[#3b82f6] rounded-full',
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
