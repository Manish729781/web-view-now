import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, Heart, Share2, User } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { ScrollArea } from '../components/ui/scroll-area';

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
              <div>
                <h2 className="text-2xl font-bold text-[#22223b] mb-6">About {tool.name}</h2>
                <p className="text-[#5f5f7a] leading-relaxed mb-6">
                  {tool.description} This AI tool provides comprehensive solutions for users looking to enhance their productivity and creativity through advanced artificial intelligence capabilities.
                </p>
                <div className="bg-[#f8f9fa] rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-[#22223b] mb-3">Key Features:</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#5f5f7a]">
                    <li>Advanced AI-powered functionality</li>
                    <li>User-friendly interface</li>
                    <li>Comprehensive automation tools</li>
                    <li>Professional-grade results</li>
                  </ul>
                </div>
              </div>
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
                <h2 className="text-2xl font-bold text-[#22223b] mb-6">Pricing</h2>
                <div className="bg-[#f8f9fa] rounded-lg p-6">
                  <p className="text-[#5f5f7a]">
                    {tool.isFree ? 'This tool offers a free tier with premium features available.' : 'Contact the provider for detailed pricing information.'}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Analytics' && (
              <div>
                <h2 className="text-2xl font-bold text-[#22223b] mb-6">Analytics</h2>
                <div className="text-center py-12">
                  <p className="text-[#5f5f7a]">Analytics data will be available soon.</p>
                </div>
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
            {!['Product Information', 'Reviews', 'Pricing', 'Analytics', 'Alternatives'].includes(activeTab) && (
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
