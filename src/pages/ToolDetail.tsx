
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Star, Users, Globe, Calendar, Tag } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ToolDetail = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const [toolDetails, setToolDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data for different tools based on toolId
  const getToolData = (id: string) => {
    const toolsData = {
      'chatgpt': {
        name: 'ChatGPT',
        description: 'ChatGPT is a free-to-use AI system for conversations, insights, and task assistance. Use it for creative writing, learning, brainstorming and more.',
        longDescription: 'ChatGPT is an AI chatbot developed by OpenAI that uses natural language processing to create humanlike conversational dialogue. The language model can respond to questions and compose various written content, including articles, social media posts, essays, code and emails.',
        website: 'https://chat.openai.com',
        pricing: 'Free / $20 per month',
        category: 'AI Chatbot',
        tags: ['AI', 'Chatbot', 'Writing Assistant', 'Conversation', 'OpenAI'],
        logo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268274_72784253_9363.webp',
        isFree: true,
        rating: 4.8,
        users: '100M+',
        founded: '2022',
        features: [
          'Natural language conversations',
          'Code generation and debugging',
          'Creative writing assistance',
          'Question answering',
          'Multiple language support',
          'Web browsing (Plus version)'
        ],
        pros: [
          'Highly capable and versatile',
          'Free tier available',
          'Regular updates and improvements',
          'Large knowledge base'
        ],
        cons: [
          'Can sometimes provide incorrect information',
          'Limited real-time information in free version',
          'Usage limits on free tier'
        ]
      },
      'deepseek': {
        name: 'DeepSeek',
        description: 'DeepSeek is an AI company providing foundation models and AI services for various applications.',
        longDescription: 'DeepSeek is a Chinese AI company that develops large language models and provides AI services. They focus on creating efficient and powerful AI models for various applications including coding, reasoning, and general conversation.',
        website: 'https://deepseek.com',
        pricing: 'Contact for Pricing',
        category: 'AI Platform',
        tags: ['AI', 'LLM', 'Foundation Models', 'API', 'Enterprise'],
        logo: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350307_38832283_24419.webp',
        isFree: false,
        rating: 4.5,
        users: '1M+',
        founded: '2023',
        features: [
          'Large language models',
          'API access',
          'Custom model training',
          'Enterprise solutions',
          'Multi-modal capabilities'
        ],
        pros: [
          'High-performance models',
          'Competitive pricing',
          'Good API documentation',
          'Enterprise support'
        ],
        cons: [
          'Newer company',
          'Limited brand recognition',
          'Primarily Chinese market focused'
        ]
      }
    };

    return toolsData[id] || {
      name: 'Tool Not Found',
      description: 'The requested tool could not be found.',
      longDescription: 'This tool may have been removed or the URL is incorrect.',
      website: '#',
      pricing: 'N/A',
      category: 'Unknown',
      tags: [],
      logo: '',
      isFree: false,
      rating: 0,
      users: '0',
      founded: 'Unknown',
      features: [],
      pros: [],
      cons: []
    };
  };

  useEffect(() => {
    const fetchToolDetails = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const toolData = getToolData(toolId || '');
      setToolDetails(toolData);
      setLoading(false);
    };

    fetchToolDetails();
  }, [toolId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f3f1ff]">
        <Header />
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7c5fff] mx-auto mb-4"></div>
            <p className="text-[#22223b]">Loading tool details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!toolDetails || toolDetails.name === 'Tool Not Found') {
    return (
      <div className="min-h-screen flex flex-col bg-[#f3f1ff]">
        <Header />
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#22223b] mb-4">Tool Not Found</h1>
            <p className="text-[#5f5f7a] mb-6">The tool you're looking for doesn't exist or has been removed.</p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-[#7c5fff] hover:bg-[#5f4bb6] text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
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
      
      {/* Main Content */}
      <div className="flex-1 px-[5vw] py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 text-[#22223b] hover:bg-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Button>

        {/* Tool Header */}
        <Card className="p-8 mb-8 bg-white shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              {toolDetails.logo ? (
                <img 
                  src={toolDetails.logo} 
                  alt={`${toolDetails.name} logo`}
                  className="w-20 h-20 object-contain rounded-lg border"
                />
              ) : (
                <div className="w-20 h-20 bg-[#ede9fe] rounded-lg flex items-center justify-center">
                  <span className="text-[#7c5fff] font-bold text-2xl">
                    {toolDetails.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* Tool Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-extrabold text-[#22223b] mb-2">
                    {toolDetails.name}
                  </h1>
                  <p className="text-xl text-[#5f5f7a] mb-4">
                    {toolDetails.description}
                  </p>
                </div>
                
                {toolDetails.isFree && (
                  <Badge className="bg-[#ede9fe] text-[#7c5fff] font-bold">
                    Free
                  </Badge>
                )}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{toolDetails.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#7c5fff]" />
                  <span>{toolDetails.users} users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#7c5fff]" />
                  <span>Founded {toolDetails.founded}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {toolDetails.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-[#7c5fff] border-[#7c5fff]">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  className="bg-[#7c5fff] hover:bg-[#5f4bb6] text-white"
                  onClick={() => window.open(toolDetails.website, '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
                <Button variant="outline" className="text-[#7c5fff] border-[#7c5fff]">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Try Now
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card className="p-6 bg-white">
              <h2 className="text-2xl font-bold text-[#22223b] mb-4">About {toolDetails.name}</h2>
              <p className="text-[#5f5f7a] leading-relaxed">
                {toolDetails.longDescription}
              </p>
            </Card>

            {/* Features */}
            <Card className="p-6 bg-white">
              <h2 className="text-2xl font-bold text-[#22223b] mb-4">Key Features</h2>
              <ul className="space-y-3">
                {toolDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7c5fff] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#5f5f7a]">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[#22223b] mb-4">Pros</h3>
                <ul className="space-y-2">
                  {toolDetails.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">+</span>
                      <span className="text-[#5f5f7a]">{pro}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[#22223b] mb-4">Cons</h3>
                <ul className="space-y-2">
                  {toolDetails.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">-</span>
                      <span className="text-[#5f5f7a]">{con}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
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
                    className="text-[#7c5fff] hover:underline block"
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ToolDetail;
