import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, Heart, Share2, User, Check, Calendar, Youtube, Download, Search, Eye, MessageCircle, ThumbsUp, Plus, Minus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { ScrollArea } from '../components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

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
  const [activeTab, setActiveTab] = useState('Product Information');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [socialFilter, setSocialFilter] = useState('All');
  const [socialSort, setSocialSort] = useState('Most Viewed');
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent tool! Really helped improve my SEO rankings. The interface is intuitive and the results are impressive.',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 4,
      comment: 'Great features and easy to use. Could use more advanced analytics but overall very satisfied.',
      date: '2024-01-10'
    },
    {
      id: 3,
      name: 'Emily Davis',
      rating: 5,
      comment: 'This tool has transformed how I approach SEO. The AI-powered suggestions are spot on.',
      date: '2024-01-08'
    }
  ]);

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Explore your first AI Agent with limited usage (100 AI Credits/Month, 512MB Brain Storage, 1 Project/Workspace, Basic Meeting Agent, 1 Chat Agent). No Voice/Email/Application/Content Agents, no Advanced Brain Features, no APIs/Chrome Extension.',
      features: [
        '100 AI Credits/Month',
        '512MB Brain Storage',
        '1 Project/Workspace',
        'Basic Meeting Agent',
        '1 Chat Agent'
      ],
      limitations: [
        'No Voice/Email/Application/Content Agents',
        'No Advanced Brain Features',
        'No APIs/Chrome Extension'
      ],
      isPopular: false
    },
    {
      name: 'Starter',
      price: '$9 per month',
      description: 'Perfect to start automating key workflows (270 AI Credits/Month, 512MB Brain Storage, Multi-calendar Sync Meeting Agent, 1 Voice Agent, 1 Email Mailbox, Application Agent, Content Agent, APIs & Chrome Extension).',
      features: [
        '270 AI Credits/Month',
        '512MB Brain Storage',
        'Multi-calendar Sync Meeting Agent',
        '1 Voice Agent',
        '1 Email Mailbox',
        'Application Agent',
        'Content Agent',
        'APIs & Chrome Extension'
      ],
      limitations: [],
      isPopular: false
    },
    {
      name: 'Basic',
      price: '$99 per month',
      description: 'Perfect to start automating key workflows (540 AI Credits/Month, 2GB Brain Storage, Unlimited Chat/Voice Agents, 3 Email Mailboxes, Advanced Brain Features, APIs).',
      features: [
        '540 AI Credits/Month',
        '2GB Brain Storage',
        'Unlimited Chat/Voice Agents',
        '3 Email Mailboxes',
        'Advanced Brain Features',
        'APIs'
      ],
      limitations: [],
      isPopular: false
    },
    {
      name: 'Standard',
      price: '$199 per month',
      description: 'Scale automation across teams with multiple agents (1000 AI Credits/Month, 20GB Brain Storage, 3 Projects/Workspaces, Unlimited Chat/Voice/Email Agents, Advanced Brain Features, APIs).',
      features: [
        '1000 AI Credits/Month',
        '20GB Brain Storage',
        '3 Projects/Workspaces',
        'Unlimited Chat/Voice/Email Agents',
        'Advanced Brain Features',
        'APIs'
      ],
      limitations: [],
      isPopular: true
    },
    {
      name: 'Premium',
      price: '$499 per month',
      description: 'Best for Full AI automation across all touchpoints (2000 AI Credits/Month, Unlimited Brain Storage, Unlimited Projects/Workspaces, Unlimited Agents, Advanced Brain Features, APIs).',
      features: [
        '2000 AI Credits/Month',
        'Unlimited Brain Storage',
        'Unlimited Projects/Workspaces',
        'Unlimited Agents',
        'Advanced Brain Features',
        'APIs'
      ],
      limitations: [],
      isPopular: false
    },
    {
      name: 'Enterprise',
      price: 'Contact for Pricing',
      description: 'Custom plans with higher limits, dedicated support, advanced security, and custom integrations for unique workflows.',
      features: [
        'Custom AI Credits',
        'Unlimited Brain Storage',
        'Unlimited Projects/Workspaces',
        'Unlimited Agents',
        'Advanced Brain Features',
        'Custom Integrations',
        'Dedicated Support',
        'Advanced Security'
      ],
      limitations: [],
      isPopular: false
    }
  ];

  const trafficData = [
    { month: '2025-03-01', visits: 9500 },
    { month: '2025-04-01', visits: 6000 },
    { month: '2025-05-01', visits: 1200 }
  ];

  const trafficSources = [
    { name: 'Direct', value: 47.85, color: '#ff6b9d' },
    { name: 'Search', value: 40.06, color: '#4285f4' },
    { name: 'Referrals', value: 6.89, color: '#ffc107' },
    { name: 'Social', value: 3.25, color: '#10b981' },
    { name: 'Display Ads', value: 1.89, color: '#00bcd4' },
    { name: 'Mail', value: 0.06, color: '#6366f1' }
  ];

  const keywordData = [
    { keyword: 'thunai', traffic: '--', cpc: '--' },
    { keyword: 'thunai ai', traffic: '--', cpc: '--' },
    { keyword: 'jegan thun', traffic: '--', cpc: '--' },
    { keyword: 'ai calling agent', traffic: '--', cpc: '$25.61' },
    { keyword: 'ai call agent', traffic: '--', cpc: '$1.68' }
  ];

  const geographyData = [
    { country: 'India', percentage: 97.77, flag: '🇮🇳' },
    { country: 'United States', percentage: 2.23, flag: '🇺🇸' }
  ];

  const socialMediaData = [
    {
      id: 1,
      platform: 'YouTube',
      title: 'How Thunai.AI Helps You Rep...',
      description: 'Stop wasting hours on email! 💡 Discover the secret to replying 10X...',
      author: 'ThunAI',
      date: 'Mar 07 2025',
      duration: '1:31',
      views: 85,
      comments: 0,
      likes: 7,
      thumbnail: '/lovable-uploads/placeholder-video.jpg',
      url: 'https://www.youtube.com/watch?v=...'
    },
    {
      id: 2,
      platform: 'YouTube',
      title: 'Mind-Blowing AI Voice Agent ...',
      description: 'Get ready to experience the future of enterprise support with Thunai.AI\'s...',
      author: 'ThunAI',
      date: 'Mar 10 2025',
      duration: '5:42',
      views: 75,
      comments: 0,
      likes: 7,
      thumbnail: '/lovable-uploads/placeholder-video.jpg',
      url: 'https://www.youtube.com/watch?v=...'
    },
    {
      id: 3,
      platform: 'YouTube',
      title: 'Transform Your Call Center wi...',
      description: 'Struggling to keep up with call center performance? With Thunai AI, every...',
      author: 'ThunAI',
      date: 'Apr 10 2025',
      duration: '2:23',
      views: 38,
      comments: 0,
      likes: 0,
      thumbnail: '/lovable-uploads/placeholder-video.jpg',
      url: 'https://www.youtube.com/watch?v=...'
    }
  ];

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

  const tabs = [
    'Product Information',
    'Reviews', 
    'Pricing',
    'Analytics',
    'Social Listening',
    'Embed',
    'Alternatives'
  ];

  const relatedTools = allTools.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 4);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewRating > 0 && reviewText.trim()) {
      const newReview = {
        id: reviews.length + 1,
        name: 'Anonymous User',
        rating: reviewRating,
        comment: reviewText.trim(),
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([newReview, ...reviews]);
      setReviewRating(0);
      setReviewText('');
    }
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 5;

  const renderStars = (rating: number, interactive: boolean = false, onStarClick?: (rating: number) => void) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onStarClick && onStarClick(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f1ff]">
      <Header />
      <Navbar />
      
      <div className="flex-1 max-w-6xl mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#7c5fff] hover:text-[#5f4bb6] mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Tools
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-8 border-b">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-6">
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
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(Math.round(averageRating))}
                      <span className="text-sm font-semibold ml-1">{averageRating.toFixed(1)}</span>
                    </div>
                    <span className="text-[#5f5f7a] text-sm">{reviews.length} Reviews</span>
                    <span className="text-[#5f5f7a] text-sm">0 Saved</span>
                  </div>
                  
                  <p className="text-[#5f5f7a] text-lg leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="text-sm text-[#7c5fff] font-semibold mb-4">
                    Category: {tool.category}
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-[#7c5fff] text-white px-6 py-3 rounded-xl hover:bg-[#5f4bb6] transition-colors font-semibold flex items-center gap-2">
                      <ExternalLink size={16} />
                      Open site
                    </button>
                    <button className="border border-[#e5e5e5] text-[#5f5f7a] px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <Heart size={16} />
                    </button>
                    <button className="border border-[#e5e5e5] text-[#5f5f7a] px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="font-semibold text-[#22223b] mb-1">Introduction:</div>
                <div className="text-[#5f5f7a]">{tool.description}</div>
              </div>
              <div>
                <div className="font-semibold text-[#22223b] mb-1">Added on:</div>
                <div className="text-[#5f5f7a]">Dec 15 2024</div>
              </div>
              <div>
                <div className="font-semibold text-[#22223b] mb-1">Monthly Visitors:</div>
                <div className="text-[#5f5f7a]">--</div>
              </div>
              <div>
                <div className="font-semibold text-[#22223b] mb-1">Pricing:</div>
                <div className="text-[#5f5f7a]">{tool.isFree ? 'Freemium' : 'Contact for Pricing'}</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-[#f0f8ff] text-[#7c5fff] text-sm px-3 py-1 rounded-full border border-[#7c5fff]">
                AI Agent
              </span>
              <span className="bg-[#f0f8ff] text-[#7c5fff] text-sm px-3 py-1 rounded-full border border-[#7c5fff]">
                AI Assistant
              </span>
              <span className="bg-[#f0f8ff] text-[#7c5fff] text-sm px-3 py-1 rounded-full border border-[#7c5fff]">
                {tool.category}
              </span>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b">
            <div className="flex overflow-x-auto px-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-[#7c5fff] text-[#7c5fff]'
                      : 'border-transparent text-[#5f5f7a] hover:text-[#22223b]'
                  }`}
                >
                  {tab}
                  {tab === 'Reviews' && (
                    <span className="ml-1 bg-[#7c5fff] text-white text-xs px-1.5 py-0.5 rounded">
                      {reviews.length}
                    </span>
                  )}
                  {tab === 'Social Listening' && (
                    <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">New</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'Product Information' && (
              <ScrollArea className="h-[800px] pr-4">
                <div className="space-y-8">
                  {/* What is the tool section */}
                  <section>
                    <h2 className="text-3xl font-bold text-[#22223b] mb-6">What is {tool.name}?</h2>
                    <div className="bg-[#f8f9fa] rounded-xl p-6 mb-6">
                      <p className="text-[#5f5f7a] leading-relaxed text-lg">
                        {tool.id === 'thunai' 
                          ? "Thunai is an Agentic AI Platform with a self-learning brain that transforms an organization's scattered knowledge (including documents, videos, slides, transcripts, audio, links, and chats) into smart AI agents. These agents are designed to handle calls, chats, emails, and tasks automatically. It centralizes information and creates smart agents for support, sales, and marketing automation."
                          : `${tool.name} is a comprehensive AI-powered platform designed to enhance productivity and streamline workflows. This advanced tool provides intelligent solutions for businesses and individuals looking to leverage artificial intelligence for improved efficiency and results. With cutting-edge features and user-friendly interface, ${tool.name} transforms how users approach their daily tasks and long-term objectives.`
                        }
                      </p>
                    </div>
                  </section>

                  {/* How to use section */}
                  <section>
                    <h2 className="text-2xl font-bold text-[#22223b] mb-4">How to use {tool.name}?</h2>
                    <div className="bg-white border rounded-xl p-6 mb-6">
                      <p className="text-[#5f5f7a] leading-relaxed">
                        {tool.id === 'thunai' 
                          ? "To use Thunai, users upload their organizational knowledge, including documents, videos, slides, transcripts, audio, links, and chats. Thunai's AI brain processes this information to create and deploy AI agents. These agents then act, respond, and automate tasks instantly across sales, support, and marketing, requiring no scripts or extensive training for immediate results."
                          : `Getting started with ${tool.name} is straightforward. Simply sign up for an account, upload your content or data, and let the AI-powered features guide you through the process. The platform offers intuitive tools and automated workflows that adapt to your specific needs and requirements.`
                        }
                      </p>
                    </div>
                  </section>

                  {/* Core Features section */}
                  <section>
                    <h2 className="text-2xl font-bold text-[#22223b] mb-6">{tool.name}'s Core Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {tool.id === 'thunai' ? [
                        'Agentic AI Platform with self-learning brain',
                        'Smart Knowledge Management',
                        'AI-Powered Insights & Reports',
                        'Enterprise-Wide Search',
                        'Real-Time Chat Assistance',
                        'Voice, Chat, Email, Meeting, and Application AI Agents',
                        'Workflow Automation',
                        'Multilanguage Support',
                        'Integrations via APIs and Chrome Extension',
                        'AI-Powered Note-Taking and Content Creation Tools'
                      ] : [
                        'Advanced AI-powered functionality',
                        'User-friendly interface',
                        'Comprehensive automation tools',
                        'Real-time processing',
                        'Professional-grade results',
                        'Multi-platform integration',
                        'Customizable workflows',
                        'Analytics and reporting',
                        'Secure data handling',
                        'Scalable solutions'
                      ]}.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-[#f8f9fa] rounded-lg">
                          <div className="w-6 h-6 bg-[#7c5fff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={14} className="text-white" />
                          </div>
                          <span className="text-[#5f5f7a] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Use Cases section */}
                  {tool.id === 'thunai' && (
                    <section>
                      <h2 className="text-2xl font-bold text-[#22223b] mb-6">{tool.name}'s Use Cases</h2>
                      <div className="space-y-4 mb-6">
                        {[
                          'Automating customer support by resolving L1 tickets and escalating urgent issues.',
                          'Accelerating sales processes through faster lead response, follow-ups, and lead qualification.',
                          'Enhancing marketing efforts with instant content creation, targeted posts, and ad variant generation.',
                          'Automating routine tasks and email drafting for sales and support teams.',
                          'Centralizing scattered organizational knowledge for easy access and decision-making.',
                          'Providing personal AI assistance for tasks like LinkedIn contact research and meeting management.'
                        ].map((useCase, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 bg-white border rounded-lg">
                            <div className="w-8 h-8 bg-[#7c5fff] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">#{index + 1}</span>
                            </div>
                            <p className="text-[#5f5f7a] leading-relaxed">{useCase}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* FAQ Section */}
                  <section>
                    <h2 className="text-2xl font-bold text-[#22223b] mb-6">FAQ from {tool.name}</h2>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                      {tool.id === 'thunai' ? [
                        {
                          question: "What exactly does Thunai do?",
                          answer: "Thunai transforms your organization's scattered knowledge into intelligent AI agents that can handle calls, chats, emails, and tasks automatically. It centralizes information and creates smart agents for support, sales, and marketing automation."
                        },
                        {
                          question: "What makes Thunai different from other enterprise search solutions?",
                          answer: "Unlike traditional search solutions, Thunai doesn't just find information—it creates intelligent agents that can act on that information. Our self-learning brain processes your organizational knowledge to deploy proactive AI agents across multiple channels."
                        },
                        {
                          question: "How does Thunai handle sensitive customer data?",
                          answer: "Thunai employs enterprise-grade security measures including data encryption, secure APIs, and compliance with industry standards to ensure your sensitive customer data is protected at all times."
                        },
                        {
                          question: "Do you offer on-premises deployment options?",
                          answer: "Yes, Thunai offers flexible deployment options including cloud, hybrid, and on-premises solutions to meet your organization's specific security and infrastructure requirements."
                        },
                        {
                          question: "How can Thunai help in customer support automation?",
                          answer: "Thunai's AI agents can automatically resolve L1 support tickets, escalate urgent issues to human agents, and provide 24/7 customer assistance through multiple channels including chat, email, and voice."
                        }
                      ] : [
                        {
                          question: `What exactly does ${tool.name} do?`,
                          answer: `${tool.name} provides comprehensive AI-powered solutions to enhance productivity and streamline workflows for businesses and individuals.`
                        },
                        {
                          question: `How do I get started with ${tool.name}?`,
                          answer: `Getting started is easy! Simply sign up for an account, follow our onboarding process, and begin exploring the features that best suit your needs.`
                        },
                        {
                          question: `Is ${tool.name} suitable for my business size?`,
                          answer: `${tool.name} is designed to scale with businesses of all sizes, from individual users to large enterprises, offering flexible plans and features.`
                        },
                        {
                          question: `What kind of support do you offer?`,
                          answer: `We provide comprehensive support including documentation, tutorials, email support, and dedicated customer success teams for enterprise clients.`
                        }
                      ]}.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4">
                          <AccordionTrigger className="text-left font-semibold text-[#22223b] hover:text-[#7c5fff] py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-[#5f5f7a] leading-relaxed pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>

                  {/* Contact Information Section */}
                  <section>
                    <h2 className="text-2xl font-bold text-[#22223b] mb-6">Contact & Support Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tool.id === 'thunai' ? [
                        {
                          title: "Support Email & Customer Service",
                          content: "For customer service inquiries, contact us at sales@thunai.ai",
                          link: "mailto:sales@thunai.ai"
                        },
                        {
                          title: "Company Information",
                          content: "Learn more about Thunai and our mission",
                          link: "https://www.thunai.ai/"
                        },
                        {
                          title: "Login Portal",
                          content: "Access your Thunai account",
                          link: "https://app.thunai.ai/accounts/login"
                        },
                        {
                          title: "Sign Up",
                          content: "Create a new Thunai account",
                          link: "https://app.thunai.ai/accounts/sign-up"
                        },
                        {
                          title: "LinkedIn",
                          content: "Follow us on LinkedIn for updates",
                          link: "https://www.linkedin.com/company/thunai-ai/"
                        },
                        {
                          title: "Twitter",
                          content: "Stay connected on Twitter",
                          link: "https://x.com/ThunaiAI"
                        }
                      ] : [
                        {
                          title: "Customer Support",
                          content: `Contact our support team for assistance with ${tool.name}`,
                          link: "#"
                        },
                        {
                          title: "Company Information",
                          content: `Learn more about ${tool.name} and our services`,
                          link: "#"
                        },
                        {
                          title: "Getting Started",
                          content: `Access tutorials and documentation for ${tool.name}`,
                          link: "#"
                        },
                        {
                          title: "Community",
                          content: `Join our community for tips and discussions`,
                          link: "#"
                        }
                      ]}.map((contact, index) => (
                        <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-3 h-3 bg-[#7c5fff] rounded-full mt-2 flex-shrink-0"></div>
                            <h3 className="font-semibold text-[#22223b] text-lg">{contact.title}</h3>
                          </div>
                          <p className="text-[#5f5f7a] mb-3">{contact.content}</p>
                          <a 
                            href={contact.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#7c5fff] hover:text-[#5f4bb6] font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            Visit <ExternalLink size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </ScrollArea>
            )}

            {activeTab === 'Reviews' && (
              <div>
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Review Form */}
                  <div className="lg:w-1/3">
                    <div className="bg-[#f8f9fa] rounded-xl p-6 sticky top-0">
                      <h3 className="text-xl font-bold text-[#22223b] mb-4">
                        Would you recommend {tool.name}? Leave a comment
                      </h3>
                      
                      <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[#22223b] mb-2">
                            Your Rating
                          </label>
                          {renderStars(reviewRating, true, setReviewRating)}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-[#22223b] mb-2">
                            Your Review
                          </label>
                          <Textarea
                            placeholder="What do you think?"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className="min-h-[120px] resize-none"
                            maxLength={10000}
                          />
                          <div className="text-xs text-[#5f5f7a] mt-1 text-right">
                            {reviewText.length}/10000
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-[#7c5fff] hover:bg-[#5f4bb6]"
                          disabled={reviewRating === 0 || !reviewText.trim()}
                        >
                          Submit Review
                        </Button>
                      </form>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="lg:w-2/3">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-[#22223b]">
                        {tool.name} Reviews ({reviews.length})
                      </h2>
                      <div className="flex items-center gap-2">
                        {renderStars(Math.round(averageRating))}
                        <span className="font-semibold">{averageRating.toFixed(1)} out of 5</span>
                      </div>
                    </div>

                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="bg-white border rounded-xl p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-[#7c5fff] rounded-full flex items-center justify-center flex-shrink-0">
                                <User size={20} className="text-white" />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-[#22223b]">{review.name}</h4>
                                  <span className="text-sm text-[#5f5f7a]">{review.date}</span>
                                </div>
                                
                                <div className="flex items-center gap-2 mb-3">
                                  {renderStars(review.rating)}
                                  <span className="text-sm font-medium">{review.rating} point out of 5 point</span>
                                </div>
                                
                                <p className="text-[#5f5f7a] leading-relaxed">{review.comment}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Pricing' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#22223b] mb-4">{tool.name} Pricing</h2>
                  <p className="text-[#5f5f7a] text-lg">Choose the perfect plan for your needs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {pricingPlans.map((plan, index) => (
                    <Card key={index} className={`relative border-2 transition-all duration-200 hover:shadow-lg ${
                      plan.isPopular 
                        ? 'border-[#7c5fff] shadow-lg' 
                        : 'border-gray-200 hover:border-[#7c5fff]'
                    }`}>
                      {plan.isPopular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-[#7c5fff] text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-2xl font-bold text-[#22223b] mb-2">
                          {plan.name}
                        </CardTitle>
                        <div className="text-3xl font-bold text-[#22223b] mb-4">
                          {plan.price}
                        </div>
                        <p className="text-[#5f5f7a] text-sm leading-relaxed">
                          {plan.description}
                        </p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-[#22223b] mb-3">Features:</h4>
                            <ul className="space-y-2">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-[#5f5f7a] text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {plan.limitations.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-[#22223b] mb-3">Limitations:</h4>
                              <ul className="space-y-2">
                                {plan.limitations.map((limitation, limitIndex) => (
                                  <li key={limitIndex} className="flex items-start gap-2">
                                    <span className="text-red-500 mt-0.5 flex-shrink-0">×</span>
                                    <span className="text-[#5f5f7a] text-sm">{limitation}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <Button 
                          className={`w-full ${
                            plan.isPopular 
                              ? 'bg-[#7c5fff] hover:bg-[#5f4bb6] text-white' 
                              : 'bg-white border-2 border-[#7c5fff] text-[#7c5fff] hover:bg-[#7c5fff] hover:text-white'
                          }`}
                        >
                          {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-[#22223b] mb-2">Need a Custom Plan?</h3>
                  <p className="text-[#5f5f7a] mb-4">
                    Contact our sales team for custom pricing and enterprise solutions tailored to your specific needs.
                  </p>
                  <Button className="bg-[#7c5fff] hover:bg-[#5f4bb6] text-white">
                    Contact Sales Team
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'Analytics' && (
              <ScrollArea className="h-[800px] pr-4">
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#22223b] mb-2">Analytics of {tool.name}</h2>
                    <div className="flex items-center gap-2 text-[#7c5fff] mb-6">
                      <div className="w-2 h-2 bg-[#7c5fff] rounded"></div>
                      <span className="font-semibold">{tool.name} Website Traffic Analysis</span>
                    </div>
                  </div>

                  {/* Visit Over Time Section */}
                  <Card className="mb-8">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-[#7c5fff] rounded"></div>
                          <CardTitle className="text-xl font-bold text-[#22223b]">Visit Over Time</CardTitle>
                        </div>
                        <div className="flex items-center gap-2 text-[#5f5f7a]">
                          <Calendar size={16} />
                          <span className="text-sm">Mar 2025 - May 2025 All Traffic</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Stats */}
                        <div className="space-y-6">
                          <div>
                            <div className="text-[#5f5f7a] text-sm mb-1">Monthly Visits</div>
                            <div className="text-2xl font-bold text-[#22223b]">--</div>
                          </div>
                          <div>
                            <div className="text-[#5f5f7a] text-sm mb-1">Avg. Visit Duration</div>
                            <div className="text-2xl font-bold text-[#22223b]">00:01:35</div>
                          </div>
                          <div>
                            <div className="text-[#5f5f7a] text-sm mb-1">Page per Visit</div>
                            <div className="text-2xl font-bold text-[#22223b]">3.06</div>
                          </div>
                          <div>
                            <div className="text-[#5f5f7a] text-sm mb-1">Bounce Rate</div>
                            <div className="text-2xl font-bold text-[#22223b]">54.97%</div>
                          </div>
                        </div>

                        {/* Chart */}
                        <div className="lg:col-span-2">
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={trafficData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                              <XAxis 
                                dataKey="month" 
                                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                stroke="#5f5f7a"
                                fontSize={12}
                              />
                              <YAxis 
                                tickFormatter={(value) => `${value/1000}K`}
                                stroke="#5f5f7a"
                                fontSize={12}
                              />
                              <Tooltip 
                                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                                formatter={(value) => [`${value.toLocaleString()} visits`, 'Traffic']}
                                contentStyle={{
                                  backgroundColor: 'white',
                                  border: '1px solid #e5e5e5',
                                  borderRadius: '8px',
                                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                              />
                              <Line 
                                type="monotone" 
                                dataKey="visits" 
                                stroke="#7c5fff" 
                                strokeWidth={3}
                                dot={{ fill: '#7c5fff', strokeWidth: 2, r: 6 }}
                                activeDot={{ r: 8, fill: '#7c5fff' }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Geography Section */}
                  <Card className="mb-8">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-[#7c5fff] rounded"></div>
                          <CardTitle className="text-xl font-bold text-[#22223b]">Geography</CardTitle>
                        </div>
                        <div className="flex items-center gap-2 text-[#5f5f7a]">
                          <Calendar size={16} />
                          <span className="text-sm">Mar 2025 - May 2025 Desktop Only</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold text-[#22223b] mb-4">Top 2 Regions</h4>
                        <div className="space-y-4">
                          {geographyData.map((region, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-lg">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{region.flag}</span>
                                <span className="font-medium text-[#22223b]">{region.country}</span>
                              </div>
                              <span className="font-bold text-[#22223b]">{region.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Traffic Sources Section */}
                  <Card className="mb-8">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-[#7c5fff] rounded"></div>
                          <CardTitle className="text-xl font-bold text-[#22223b]">Traffic Sources</CardTitle>
                        </div>
                        <div className="flex items-center gap-2 text-[#5f5f7a]">
                          <Calendar size={16} />
                          <span className="text-sm">Mar 2025 - May 2025 Worldwide Desktop Only</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Sources List */}
                        <div className="space-y-4">
                          {trafficSources.map((source, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-lg">
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-4 h-4 rounded-full" 
                                  style={{ backgroundColor: source.color }}
                                ></div>
                                <span className="font-medium text-[#22223b]">{source.name}</span>
                              </div>
                              <span className="font-bold text-[#22223b]">{source.value}%</span>
                            </div>
                          ))}
                        </div>

                        {/* Pie Chart */}
                        <div className="flex justify-center">
                          <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                              <Pie
                                data={trafficSources}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                innerRadius={60}
                                dataKey="value"
                                startAngle={90}
                                endAngle={450}
                              >
                                {trafficSources.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip 
                                formatter={(value) => [`${value}%`, 'Traffic Share']}
                                contentStyle={{
                                  backgroundColor: 'white',
                                  border: '1px solid #e5e5e5',
                                  borderRadius: '8px',
                                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Top Keywords Section */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-6 bg-[#7c5fff] rounded"></div>
                        <CardTitle className="text-xl font-bold text-[#22223b]">Top Keywords</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-[#f8f9fa]">
                              <TableHead className="font-semibold text-[#22223b]">Keyword</TableHead>
                              <TableHead className="font-semibold text-[#22223b]">Traffic</TableHead>
                              <TableHead className="font-semibold text-[#22223b]">Cost Per Click</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {keywordData.map((keyword, index) => (
                              <TableRow key={index} className="hover:bg-[#f8f9fa] transition-colors">
                                <TableCell className="font-medium text-[#22223b]">{keyword.keyword}</TableCell>
                                <TableCell className="text-[#5f5f7a]">{keyword.traffic}</TableCell>
                                <TableCell className="text-[#5f5f7a]">{keyword.cpc}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollArea>
            )}

            {activeTab === 'Social Listening' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#22223b] mb-6">Social Listening</h2>
                  
                  {/* Platform Filters */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <button 
                      onClick={() => setSocialFilter('All')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        socialFilter === 'All' 
                          ? 'bg-[#7c5fff] text-white' 
                          : 'bg-gray-100 text-[#5f5f7a] hover:bg-gray-200'
                      }`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setSocialFilter('YouTube')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        socialFilter === 'YouTube' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-gray-100 text-[#5f5f7a] hover:bg-gray-200'
                      }`}
                    >
                      <Youtube size={16} />
                      YouTube
                    </button>
                    <button 
                      onClick={() => setSocialFilter('TikTok')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        socialFilter === 'TikTok' 
                          ? 'bg-black text-white' 
                          : 'bg-gray-100 text-[#5f5f7a] hover:bg-gray-200'
                      }`}
                    >
                      <span className="text-sm">🎵</span>
                      TikTok
                    </button>
                  </div>

                  {/* Controls Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap items-center gap-4">
                      <select 
                        value={socialSort}
                        onChange={(e) => setSocialSort(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c5fff]"
                      >
                        <option>Sort: Most Viewed</option>
                        <option>Sort: Most Recent</option>
                        <option>Sort: Most Liked</option>
                      </select>
                      
                      <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c5fff]">
                        <option>Creation time</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                      </select>
                      
                      <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c5fff]">
                        <option>Video duration</option>
                        <option>Under 1 minute</option>
                        <option>1-5 minutes</option>
                        <option>5+ minutes</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download size={16} />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2 text-[#7c5fff] border-[#7c5fff]">
                        <Search size={16} />
                        Search History
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {socialMediaData.map((item) => (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            {/* Platform Icon & Thumbnail */}
                            <div className="flex-shrink-0">
                              <div className="relative">
                                <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                                  <div className="absolute top-1 left-1 bg-red-500 rounded p-1">
                                    <Youtube size={12} className="text-white" />
                                  </div>
                                  <span className="text-xs bg-black text-white px-1 rounded absolute bottom-1 right-1">
                                    {item.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-[#22223b] text-lg hover:text-[#7c5fff] cursor-pointer">
                                  {item.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-[#5f5f7a] ml-4">
                                  <div className="flex items-center gap-1">
                                    <Eye size={14} />
                                    {item.views}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle size={14} />
                                    {item.comments}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <span>--</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <ThumbsUp size={14} />
                                    {item.likes}
                                  </div>
                                </div>
                              </div>
                              
                              <p className="text-[#5f5f7a] mb-3 leading-relaxed">
                                {item.description}
                              </p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-[#5f5f7a]">
                                  <span className="font-medium">{item.author}</span>
                                  <span>{item.date}</span>
                                </div>
                                <a 
                                  href={item.url}
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[#7c5fff] hover:text-[#5f4bb6] text-sm font-medium"
                                >
                                  {item.url}
                                </a>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>

                {/* Unlock Premium Content */}
                <Card className="mt-8 bg-gradient-to-r from-[#f8f9ff] to-[#ede9fe] border-[#7c5fff]">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#7c5fff] rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 border-4 border-white border-dashed rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#22223b] mb-2">
                      Unlock to view <span className="text-[#7c5fff]">7</span> social media results.
                    </h3>
                    <p className="text-[#5f5f7a] mb-6">
                      Get access to comprehensive social media analytics and insights
                    </p>
                    <Button className="bg-[#7c5fff] hover:bg-[#5f4bb6] text-white px-8 py-3 text-lg">
                      View Now →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'Alternatives' && relatedTools.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[#22223b] mb-6">Similar Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedTools.map((relatedTool) => (
                    <div key={relatedTool.id} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className={`w-12 h-12 ${getIconStyle(relatedTool.icon)} mb-3`}>
                        {relatedTool.icon === 'rf123' && <span className="text-white font-bold">RF</span>}
                      </div>
                      <h3 className="font-semibold text-[#22223b] mb-2">{relatedTool.name}</h3>
                      <p className="text-[#5f5f7a] text-sm mb-3">{relatedTool.description}</p>
                      {relatedTool.isFree && (
                        <span className="bg-[#ede9fe] text-[#7c5fff] text-xs font-bold rounded px-2 py-1">
                          Free
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Default content for other tabs */}
            {!['Product Information', 'Reviews', 'Pricing', 'Analytics', 'Social Listening', 'Alternatives'].includes(activeTab) && (
              <div className="text-center py-12">
                <p className="text-[#5f5f7a]">Content for {activeTab} coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ToolDetail;
