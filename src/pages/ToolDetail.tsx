
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, ExternalLink, Star, Users, Globe, Calendar, Tag, Copy, Check, Code, Download, Eye, TrendingUp, Award, Shield, CheckCircle, Mail, Twitter, Facebook } from 'lucide-react';
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
      'thunai': {
        name: 'Thunai',
        description: 'Agentic AI Platform with a self-learning brain that transforms organizational knowledge into smart AI agents.',
        longDescription: 'Thunai is an Agentic AI Platform with a self-learning brain that transforms an organization\'s scattered knowledge (including documents, videos, slides, transcripts, audio, links, and chats) into smart AI agents. These agents are designed to handle calls, chats, emails, and tasks, automating support, sales, and marketing processes.',
        website: 'https://www.thunai.ai',
        pricing: 'Contact for Pricing',
        category: 'AI Platform',
        tags: ['AI', 'Automation', 'Enterprise AI', 'Knowledge Management', 'Customer Support'],
        logo: '/placeholder.svg',
        isFree: false,
        rating: 4.8,
        users: '10K+',
        founded: '2023',
        monthlyVisitors: '--',
        addedOn: 'Dec 15 2024',
        productInfo: {
          whatIs: 'Thunai is an Agentic AI Platform with a self-learning brain that transforms an organization\'s scattered knowledge (including documents, videos, slides, transcripts, audio, links, and chats) into smart AI agents. These agents are designed to handle calls, chats, emails, and tasks, automating support, sales, and marketing processes. Thunai helps centralize information, organize thoughts, and assist in decision-making, turning organizational chaos into clarity. It enables the deployment of agents for various functions such as ticketing, content generation, scheduling, and lead generation.',
          howToUse: 'To use Thunai, users upload their organizational knowledge, including documents, videos, slides, transcripts, audio, links, and chats. Thunai\'s AI brain processes this information to create and deploy AI agents. These agents then act, respond, and automate tasks instantly across sales, support, and marketing, requiring no scripts or extensive training for immediate results.'
        },
        features: [
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
        ],
        useCases: [
          {
            number: 1,
            title: 'Automating customer support by resolving L1 tickets and escalating urgent issues.'
          },
          {
            number: 2,
            title: 'Accelerating sales processes through faster lead response, follow-ups, and lead qualification.'
          },
          {
            number: 3,
            title: 'Enhancing marketing efforts with instant content creation, targeted posts, and ad variant generation.'
          },
          {
            number: 4,
            title: 'Automating routine tasks and email drafting for sales and support teams.'
          },
          {
            number: 5,
            title: 'Centralizing scattered organizational knowledge for easy access and decision-making.'
          },
          {
            number: 6,
            title: 'Providing personal AI assistance for tasks like LinkedIn contact research and meeting management.'
          }
        ],
        faq: [
          {
            question: 'What exactly does Thunai do?',
            answer: 'Thunai transforms your organization\'s scattered knowledge into intelligent AI agents that can handle customer support, sales processes, and marketing tasks automatically.'
          },
          {
            question: 'What makes Thunai different from other enterprise search solutions?',
            answer: 'Unlike traditional search tools, Thunai creates proactive AI agents that don\'t just find information but take action, respond to customers, and automate workflows based on your organizational knowledge.'
          },
          {
            question: 'How does Thunai handle sensitive customer data?',
            answer: 'Thunai implements enterprise-grade security measures including data encryption, access controls, and compliance with industry standards to protect sensitive customer information.'
          },
          {
            question: 'Do you offer on-premises deployment options?',
            answer: 'Yes, Thunai offers flexible deployment options including cloud-based and on-premises solutions to meet your organization\'s specific security and compliance requirements.'
          },
          {
            question: 'How can Thunai help in customer support automation?',
            answer: 'Thunai can automatically resolve L1 support tickets, escalate urgent issues, provide instant responses to customer queries, and maintain context across multiple communication channels.'
          }
        ],
        contact: {
          supportEmail: 'sales@thunai.ai',
          website: 'https://www.thunai.ai/',
          loginUrl: 'https://app.thunai.ai/accounts/login',
          signupUrl: 'https://app.thunai.ai/accounts/sign-up',
          linkedinUrl: 'https://www.linkedin.com/company/thunai-ai/?viewAsMember=true',
          twitterUrl: 'https://x.com/ThunaiAi',
          instagramUrl: 'https://www.instagram.com/thunai_ai/'
        },
        pros: [
          'Comprehensive AI automation platform',
          'Self-learning capabilities',
          'Multi-channel support (voice, chat, email)',
          'Enterprise-grade security'
        ],
        cons: [
          'Complex setup for large organizations',
          'Requires training data for optimal performance',
          'Premium pricing for advanced features'
        ],
        alternatives: [
          {
            name: 'Microsoft Copilot',
            description: 'AI assistant integrated with Microsoft Office suite',
            rating: 4.5,
            users: '100M+',
            pricing: '$30/month per user',
            features: ['Office integration', 'Code assistance', 'Document analysis'],
            logo: '/placeholder.svg'
          },
          {
            name: 'Salesforce Einstein',
            description: 'AI platform for CRM and customer relationship management',
            rating: 4.4,
            users: '50M+',
            pricing: 'Contact for pricing',
            features: ['CRM integration', 'Predictive analytics', 'Automation'],
            logo: '/placeholder.svg'
          }
        ]
      },
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
        monthlyVisitors: '1.8B',
        addedOn: 'Nov 30 2022',
        productInfo: {
          whatIs: 'ChatGPT is an AI chatbot developed by OpenAI that uses natural language processing to create humanlike conversational dialogue.',
          howToUse: 'Simply type your questions or requests into the chat interface and ChatGPT will respond with helpful, detailed answers.'
        },
        features: [
          'Natural language conversations',
          'Code generation and debugging',
          'Creative writing assistance',
          'Question answering',
          'Multiple language support',
          'Web browsing (Plus version)'
        ],
        useCases: [],
        faq: [],
        contact: {
          supportEmail: 'support@openai.com',
          website: 'https://chat.openai.com',
          loginUrl: 'https://chat.openai.com',
          signupUrl: 'https://chat.openai.com',
          linkedinUrl: 'https://www.linkedin.com/company/openai',
          twitterUrl: 'https://twitter.com/openai',
          instagramUrl: ''
        },
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
        monthlyVisitors: '50M',
        addedOn: 'Jan 15 2024',
        productInfo: {
          whatIs: 'DeepSeek is a Chinese AI company that develops large language models and provides AI services.',
          howToUse: 'Access DeepSeek models through their API or web interface for various AI tasks.'
        },
        features: [
          'Large language models',
          'API access',
          'Custom model training',
          'Enterprise solutions',
          'Multi-modal capabilities'
        ],
        useCases: [],
        faq: [],
        contact: {
          supportEmail: 'support@deepseek.com',
          website: 'https://deepseek.com',
          loginUrl: 'https://deepseek.com/login',
          signupUrl: 'https://deepseek.com/signup',
          linkedinUrl: '',
          twitterUrl: '',
          instagramUrl: ''
        },
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
      monthlyVisitors: '--',
      addedOn: '--',
      productInfo: { whatIs: '', howToUse: '' },
      features: [],
      useCases: [],
      faq: [],
      contact: {},
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
      
      {/* Main Content - Scrollable */}
      <ScrollArea className="flex-1">
        <div className="px-[5vw] py-8">
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
                {toolDetails.logo && toolDetails.logo !== '/placeholder.svg' ? (
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

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div>
                    <span className="font-semibold text-[#22223b]">Added on:</span>
                    <p className="text-[#5f5f7a]">{toolDetails.addedOn}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#22223b]">Monthly Visitors:</span>
                    <p className="text-[#5f5f7a]">{toolDetails.monthlyVisitors}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#22223b]">Social & Email:</span>
                    <div className="flex gap-2 mt-1">
                      {toolDetails.contact?.twitterUrl && (
                        <Twitter className="w-4 h-4 text-[#7c5fff]" />
                      )}
                      {toolDetails.contact?.supportEmail && (
                        <Mail className="w-4 h-4 text-[#7c5fff]" />
                      )}
                    </div>
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
                    Open site
                  </Button>
                  <Button variant="outline" className="text-[#7c5fff] border-[#7c5fff]">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Try Now
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 border-b">
              <button className="pb-2 px-1 text-[#7c5fff] border-b-2 border-[#7c5fff] font-semibold">
                Product Information
              </button>
              <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
                Reviews
              </button>
              <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
                Pricing
              </button>
              <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
                Analytics
              </button>
              <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
                Social Listening
              </button>
              <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
                Embed
              </button>
              <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
                Alternatives
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Product Information */}
              {toolDetails.productInfo && (
                <Card className="p-6 bg-white">
                  <h2 className="text-2xl font-bold text-[#22223b] mb-6">{toolDetails.name} Product Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#22223b] mb-3">What is {toolDetails.name}?</h3>
                      <p className="text-[#5f5f7a] leading-relaxed">
                        {toolDetails.productInfo.whatIs}
                      </p>
                    </div>

                    {toolDetails.productInfo.howToUse && (
                      <div>
                        <h3 className="text-xl font-bold text-[#22223b] mb-3">How to use {toolDetails.name}?</h3>
                        <p className="text-[#5f5f7a] leading-relaxed">
                          {toolDetails.productInfo.howToUse}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              {/* Core Features */}
              {toolDetails.features && toolDetails.features.length > 0 && (
                <Card className="p-6 bg-white">
                  <h2 className="text-2xl font-bold text-[#22223b] mb-6">{toolDetails.name}'s Core Features</h2>
                  <div className="space-y-3">
                    {toolDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#7c5fff] mt-0.5 flex-shrink-0" />
                        <span className="text-[#5f5f7a]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Use Cases */}
              {toolDetails.useCases && toolDetails.useCases.length > 0 && (
                <Card className="p-6 bg-white">
                  <h2 className="text-2xl font-bold text-[#22223b] mb-6">{toolDetails.name}'s Use Cases</h2>
                  <div className="space-y-4">
                    {toolDetails.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#7c5fff] text-white rounded-full flex items-center justify-center font-bold text-sm">
                          #{useCase.number}
                        </div>
                        <p className="text-[#5f5f7a] flex-1">{useCase.title}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* FAQ */}
              {toolDetails.faq && toolDetails.faq.length > 0 && (
                <Card className="p-6 bg-white">
                  <h2 className="text-2xl font-bold text-[#22223b] mb-6">FAQ from {toolDetails.name}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {toolDetails.faq.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-[#5f5f7a]">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              )}

              {/* Contact Information */}
              {toolDetails.contact && (
                <Card className="p-6 bg-white">
                  <h2 className="text-2xl font-bold text-[#22223b] mb-6">{toolDetails.name} Support & Contact Information</h2>
                  <div className="space-y-6">
                    
                    {toolDetails.contact.supportEmail && (
                      <div>
                        <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
                          {toolDetails.name} Support Email & Customer service contact & Refund contact etc.
                        </h3>
                        <p className="text-[#5f5f7a]">
                          Here is the {toolDetails.name} support email for customer service: 
                          <a href={`mailto:${toolDetails.contact.supportEmail}`} className="text-[#7c5fff] hover:underline ml-1">
                            {toolDetails.contact.supportEmail}
                          </a>
                          . More Contact, visit 
                          <a href={toolDetails.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                            the contact us page({toolDetails.contact.website})
                          </a>
                        </p>
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
                        {toolDetails.name} Company
                      </h3>
                      <p className="text-[#5f5f7a]">
                        {toolDetails.name} Company name: <strong>{toolDetails.name}</strong>.
                      </p>
                      <p className="text-[#5f5f7a]">
                        More about {toolDetails.name}, Please visit 
                        <a href={toolDetails.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                          the about us page({toolDetails.contact.website})
                        </a>.
                      </p>
                    </div>

                    {toolDetails.contact.loginUrl && (
                      <div>
                        <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
                          {toolDetails.name} Login
                        </h3>
                        <p className="text-[#5f5f7a]">
                          {toolDetails.name} Login Link: 
                          <a href={toolDetails.contact.loginUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                            {toolDetails.contact.loginUrl}
                          </a>
                        </p>
                      </div>
                    )}

                    {toolDetails.contact.signupUrl && (
                      <div>
                        <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
                          {toolDetails.name} Sign up
                        </h3>
                        <p className="text-[#5f5f7a]">
                          {toolDetails.name} Sign up Link: 
                          <a href={toolDetails.contact.signupUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                            {toolDetails.contact.signupUrl}
                          </a>
                        </p>
                      </div>
                    )}

                    {toolDetails.contact.linkedinUrl && (
                      <div>
                        <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
                          {toolDetails.name} Linkedin
                        </h3>
                        <p className="text-[#5f5f7a]">
                          {toolDetails.name} Linkedin Link: 
                          <a href={toolDetails.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                            {toolDetails.contact.linkedinUrl}
                          </a>
                        </p>
                      </div>
                    )}

                    {toolDetails.contact.twitterUrl && (
                      <div>
                        <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
                          {toolDetails.name} Twitter
                        </h3>
                        <p className="text-[#5f5f7a]">
                          {toolDetails.name} Twitter Link: 
                          <a href={toolDetails.contact.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                            {toolDetails.contact.twitterUrl}
                          </a>
                        </p>
                      </div>
                    )}

                    {toolDetails.contact.instagramUrl && (
                      <div>
                        <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
                          {toolDetails.name} Instagram
                        </h3>
                        <p className="text-[#5f5f7a]">
                          {toolDetails.name} Instagram Link: 
                          <a href={toolDetails.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                            {toolDetails.contact.instagramUrl}
                          </a>
                        </p>
                      </div>
                    )}

                  </div>
                </Card>
              )}

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
                      <img src={`https://img.shields.io/badge/${toolDetails.name}-Visit-7c5fff?style=for-the-badge`} alt="Badge" className="mx-auto mb-2" />
                      <p className="text-sm text-[#5f5f7a]">For the Badge</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <img src={`https://img.shields.io/badge/${toolDetails.name}-Visit-7c5fff?style=flat`} alt="Badge" className="mx-auto mb-2" />
                      <p className="text-sm text-[#5f5f7a]">Flat Style</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <img src={`https://img.shields.io/badge/${toolDetails.name}-Visit-7c5fff?style=plastic`} alt="Badge" className="mx-auto mb-2" />
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
              </Card>

              {/* Alternatives Section */}
              {toolDetails.alternatives && toolDetails.alternatives.length > 0 && (
                <Card className="p-6 bg-white">
                  <h2 className="text-2xl font-bold text-[#22223b] mb-6 flex items-center gap-2">
                    Alternatives
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolDetails.alternatives.map((alternative, index) => (
                      <Card key={index} className="p-4 border hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-[#ede9fe] rounded-lg flex items-center justify-center">
                            <span className="text-[#7c5fff] font-bold">
                              {alternative.name.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-bold text-[#22223b]">{alternative.name}</h3>
                            <Badge className="bg-green-100 text-green-700 text-xs">Free</Badge>
                          </div>
                        </div>
                        
                        <p className="text-sm text-[#5f5f7a] mb-3">{alternative.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-[#5f5f7a] mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span>{alternative.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{alternative.users}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {alternative.features.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button size="sm" className="w-full bg-[#7c5fff] hover:bg-[#5f4bb6] text-white">
                          Visit
                        </Button>
                      </Card>
                    ))}
                  </div>
                </Card>
              )}
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
                      className="text-[#7c5fff] hover:underline block text-sm"
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
      </ScrollArea>

      <Footer />
    </div>
  );
};

export default ToolDetail;
