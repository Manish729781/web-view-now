
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Star, Users, Globe, Calendar, Tag, Copy, Check, Code, Download, Eye, TrendingUp, Award, Shield } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ToolDetail = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const [toolDetails, setToolDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('light');

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
        ],
        alternatives: [
          {
            name: 'Claude',
            description: 'Anthropic\'s AI assistant focused on safety and helpfulness',
            rating: 4.7,
            users: '10M+',
            pricing: 'Free / $20/month',
            features: ['Large context window', 'Document analysis', 'Code assistance'],
            logo: '/placeholder.svg'
          },
          {
            name: 'Gemini',
            description: 'Google\'s multimodal AI model with advanced reasoning',
            rating: 4.6,
            users: '50M+',
            pricing: 'Free / $20/month',
            features: ['Multimodal input', 'Google integration', 'Real-time info'],
            logo: '/placeholder.svg'
          },
          {
            name: 'Perplexity',
            description: 'AI-powered search engine with real-time information',
            rating: 4.5,
            users: '5M+',
            pricing: 'Free / $20/month',
            features: ['Real-time search', 'Source citations', 'Research mode'],
            logo: '/placeholder.svg'
          }
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
        ],
        alternatives: [
          {
            name: 'OpenAI API',
            description: 'Access to GPT models via API for developers',
            rating: 4.8,
            users: '1M+',
            pricing: 'Pay per use',
            features: ['Multiple models', 'Fine-tuning', 'Function calling'],
            logo: '/placeholder.svg'
          },
          {
            name: 'Anthropic Claude API',
            description: 'Safe AI assistant API with large context window',
            rating: 4.7,
            users: '500K+',
            pricing: 'Pay per use',
            features: ['100K context', 'Safety focused', 'Tool use'],
            logo: '/placeholder.svg'
          }
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
      cons: [],
      alternatives: []
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

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const embedCodes = {
    iframe: `<iframe src="${toolDetails?.website}" width="800" height="600" frameborder="0"></iframe>`,
    button: `<a href="${toolDetails?.website}" target="_blank" style="background: #7c5fff; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">${toolDetails?.name}</a>`,
    badge: `<a href="${toolDetails?.website}" target="_blank"><img src="https://img.shields.io/badge/${toolDetails?.name?.replace(' ', '%20')}-Visit-7c5fff?style=for-the-badge" alt="${toolDetails?.name}"></a>`
  };

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
      <div className="flex-1 px-[5vw] py-8 max-h-screen overflow-y-auto">
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

            {/* Embed Section */}
            <Card className="p-6 bg-white">
              <h2 className="text-2xl font-bold text-[#22223b] mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-[#7c5fff]" />
                Embed {toolDetails.name}
              </h2>
              
              {/* Website Badges */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#22223b] mb-4">Website Badges</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <img src="https://img.shields.io/badge/ChatGPT-Visit-7c5fff?style=for-the-badge" alt="Badge" className="mx-auto mb-2" />
                    <p className="text-sm text-[#5f5f7a]">For the Badge</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <img src="https://img.shields.io/badge/ChatGPT-Visit-7c5fff?style=flat" alt="Badge" className="mx-auto mb-2" />
                    <p className="text-sm text-[#5f5f7a]">Flat Style</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <img src="https://img.shields.io/badge/ChatGPT-Visit-7c5fff?style=plastic" alt="Badge" className="mx-auto mb-2" />
                    <p className="text-sm text-[#5f5f7a]">Plastic Style</p>
                  </div>
                </div>
              </div>

              {/* Embed Codes */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#22223b]">IFrame Embed</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(embedCodes.iframe, 'iframe')}
                      className="text-[#7c5fff] border-[#7c5fff]"
                    >
                      {copiedCode === 'iframe' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedCode === 'iframe' ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                  <div className="bg-[#f8f9fa] p-4 rounded-lg border">
                    <code className="text-sm text-[#22223b] break-all">{embedCodes.iframe}</code>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#22223b]">Button Embed</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(embedCodes.button, 'button')}
                      className="text-[#7c5fff] border-[#7c5fff]"
                    >
                      {copiedCode === 'button' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedCode === 'button' ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                  <div className="bg-[#f8f9fa] p-4 rounded-lg border">
                    <code className="text-sm text-[#22223b] break-all">{embedCodes.button}</code>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#22223b]">Badge Embed</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(embedCodes.badge, 'badge')}
                      className="text-[#7c5fff] border-[#7c5fff]"
                    >
                      {copiedCode === 'badge' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedCode === 'badge' ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                  <div className="bg-[#f8f9fa] p-4 rounded-lg border">
                    <code className="text-sm text-[#22223b] break-all">{embedCodes.badge}</code>
                  </div>
                </div>
              </div>

              {/* Theme Selector */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#22223b] mb-3">Theme</h3>
                <div className="flex gap-2">
                  <Button
                    variant={selectedTheme === 'light' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTheme('light')}
                    className={selectedTheme === 'light' ? 'bg-[#7c5fff] text-white' : 'text-[#7c5fff] border-[#7c5fff]'}
                  >
                    Light
                  </Button>
                  <Button
                    variant={selectedTheme === 'dark' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTheme('dark')}
                    className={selectedTheme === 'dark' ? 'bg-[#7c5fff] text-white' : 'text-[#7c5fff] border-[#7c5fff]'}
                  >
                    Dark
                  </Button>
                </div>
              </div>

              {/* Installation Instructions */}
              <div className="mt-8 p-4 bg-[#f3f1ff] rounded-lg">
                <h3 className="text-lg font-semibold text-[#22223b] mb-3 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Installation Instructions
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-[#5f5f7a]">
                  <li>Copy the embed code above</li>
                  <li>Paste it into your HTML where you want the tool to appear</li>
                  <li>Customize the styling to match your website</li>
                  <li>Test the implementation on your site</li>
                </ol>
              </div>

              {/* Embed Benefits */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#7c5fff] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#22223b]">Increase Visibility</h4>
                    <p className="text-sm text-[#5f5f7a]">Drive more traffic to this tool</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#7c5fff] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#22223b]">Track Performance</h4>
                    <p className="text-sm text-[#5f5f7a]">Monitor clicks and engagement</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Alternatives Section */}
            <Card className="p-6 bg-white">
              <h2 className="text-2xl font-bold text-[#22223b] mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#7c5fff]" />
                Alternatives to {toolDetails.name}
              </h2>
              
              <div className="space-y-6">
                {toolDetails.alternatives && toolDetails.alternatives.map((alternative, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Alternative Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#ede9fe] rounded-lg flex items-center justify-center">
                          <span className="text-[#7c5fff] font-bold text-xl">
                            {alternative.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Alternative Info */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-[#22223b] mb-1">{alternative.name}</h3>
                            <p className="text-[#5f5f7a] mb-2">{alternative.description}</p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-semibold text-sm">{alternative.rating}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#7c5fff]" />
                            <span className="text-sm">{alternative.users}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-[#7c5fff]" />
                            <span className="text-sm">{alternative.pricing}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-[#22223b] mb-2">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {alternative.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button 
                            size="sm"
                            className="bg-[#7c5fff] hover:bg-[#5f4bb6] text-white"
                          >
                            <Globe className="w-3 h-3 mr-1" />
                            Visit
                          </Button>
                          <Button 
                            size="sm"
                            variant="outline" 
                            className="text-[#7c5fff] border-[#7c5fff]"
                          >
                            Compare
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#22223b] mb-4">Quick Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-[#f3f1ff]">
                        <th className="border border-gray-200 p-3 text-left font-semibold">Tool</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Rating</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Users</th>
                        <th className="border border-gray-200 p-3 text-left font-semibold">Pricing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#f8f9fa]">
                        <td className="border border-gray-200 p-3 font-semibold text-[#7c5fff]">
                          {toolDetails.name} (Current)
                        </td>
                        <td className="border border-gray-200 p-3">{toolDetails.rating}</td>
                        <td className="border border-gray-200 p-3">{toolDetails.users}</td>
                        <td className="border border-gray-200 p-3">{toolDetails.pricing}</td>
                      </tr>
                      {toolDetails.alternatives && toolDetails.alternatives.map((alt, index) => (
                        <tr key={index}>
                          <td className="border border-gray-200 p-3 font-semibold">{alt.name}</td>
                          <td className="border border-gray-200 p-3">{alt.rating}</td>
                          <td className="border border-gray-200 p-3">{alt.users}</td>
                          <td className="border border-gray-200 p-3">{alt.pricing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="mt-8 p-4 bg-[#f3f1ff] rounded-lg">
                <h3 className="text-lg font-semibold text-[#22223b] mb-3">
                  Why Consider Alternatives?
                </h3>
                <ul className="space-y-2 text-[#5f5f7a]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c5fff]">•</span>
                    Different pricing models may better suit your budget
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c5fff]">•</span>
                    Specialized features for specific use cases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c5fff]">•</span>
                    Better integration with your existing workflow
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7c5fff]">•</span>
                    Different privacy and data handling policies
                  </li>
                </ul>
              </div>
            </Card>
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
