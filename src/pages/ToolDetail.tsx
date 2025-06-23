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
import ToolHeader from '../components/ToolHeader';
import ToolNavigation from '../components/ToolNavigation';
import ProductInformation from '../components/ProductInformation';
import CoreFeatures from '../components/CoreFeatures';
import UseCases from '../components/UseCases';
import FAQ from '../components/FAQ';
import ContactInformation from '../components/ContactInformation';
import ProsAndCons from '../components/ProsAndCons';
import EmbedSection from '../components/EmbedSection';
import AlternativesSection from '../components/AlternativesSection';
import ToolSidebar from '../components/ToolSidebar';

const ToolDetail = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const [toolDetails, setToolDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data for different tools based on toolId
  const getToolData = (id: string) => {
    const toolsData = {
      'seoing': {
        name: 'seo.ing',
        description: 'AI SEO writing tool for generating high-ranking articles quickly.',
        longDescription: 'seo.ing is an advanced AI-powered SEO writing tool designed to help content creators, marketers, and businesses generate high-ranking articles quickly and efficiently. The platform combines artificial intelligence with SEO best practices to create content that not only engages readers but also performs well in search engine rankings.',
        website: 'https://seo.ing',
        pricing: 'Free / $19 per month',
        category: 'SEO Tool',
        tags: ['SEO', 'Content Writing', 'AI', 'Article Generation', 'Marketing'],
        logo: '/placeholder.svg',
        isFree: true,
        rating: 4.7,
        users: '50K+',
        founded: '2023',
        monthlyVisitors: '500K',
        addedOn: 'Mar 15 2024',
        productInfo: {
          whatIs: 'seo.ing is an AI SEO writing tool that helps users create high-ranking articles quickly. It combines advanced artificial intelligence with proven SEO strategies to generate content that performs well in search engines while maintaining readability and engagement for human readers.',
          howToUse: 'To use seo.ing, simply enter your target keywords or topic, choose your content type and length preferences, and let the AI generate SEO-optimized articles. The tool provides suggestions for headlines, meta descriptions, and content structure to maximize search engine visibility.'
        },
        features: [
          'AI-powered content generation',
          'SEO optimization suggestions',
          'Keyword research and analysis',
          'Content structure recommendations',
          'Meta description generation',
          'Headline optimization',
          'Readability analysis',
          'Competitor content analysis',
          'Multiple content formats support',
          'Integration with popular CMS platforms'
        ],
        useCases: [
          {
            number: 1,
            title: 'Creating blog posts that rank high in search results'
          },
          {
            number: 2,
            title: 'Generating product descriptions for e-commerce websites'
          },
          {
            number: 3,
            title: 'Writing landing page content optimized for conversions'
          },
          {
            number: 4,
            title: 'Creating content marketing materials for social media'
          },
          {
            number: 5,
            title: 'Developing comprehensive content strategies for businesses'
          }
        ],
        faq: [
          {
            question: 'How does seo.ing ensure content ranks well in search engines?',
            answer: 'seo.ing uses advanced AI algorithms trained on successful SEO content and current search engine guidelines to optimize content structure, keyword density, and readability scores.'
          },
          {
            question: 'Can I customize the writing style and tone?',
            answer: 'Yes, seo.ing allows you to adjust writing style, tone, and target audience to match your brand voice and content requirements.'
          },
          {
            question: 'Does seo.ing support multiple languages?',
            answer: 'Currently, seo.ing primarily supports English content generation, with plans to expand to other languages in future updates.'
          },
          {
            question: 'How accurate is the SEO analysis?',
            answer: 'Our SEO analysis is based on current best practices and is regularly updated to reflect changes in search engine algorithms and ranking factors.'
          }
        ],
        contact: {
          supportEmail: 'support@seo.ing',
          website: 'https://seo.ing',
          loginUrl: 'https://seo.ing/login',
          signupUrl: 'https://seo.ing/signup',
          linkedinUrl: 'https://www.linkedin.com/company/seo-ing',
          twitterUrl: 'https://twitter.com/seo_ing',
          instagramUrl: ''
        },
        pros: [
          'Fast AI-powered content generation',
          'Built-in SEO optimization',
          'User-friendly interface',
          'Free tier available',
          'Regular algorithm updates'
        ],
        cons: [
          'Limited to English language',
          'Requires manual review for accuracy',
          'Premium features require subscription'
        ],
        alternatives: [
          {
            name: 'Jasper AI',
            description: 'AI writing assistant for marketing copy and content',
            rating: 4.5,
            users: '100K+',
            pricing: '$29/month',
            features: ['Multiple templates', 'Team collaboration', 'Brand voice'],
            logo: '/placeholder.svg'
          },
          {
            name: 'Copy.ai',
            description: 'AI-powered copywriting tool for various content types',
            rating: 4.4,
            users: '80K+',
            pricing: 'Free / $36/month',
            features: ['Multiple languages', 'Templates library', 'Team workspace'],
            logo: '/placeholder.svg'
          }
        ]
      },
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
          <ToolHeader toolDetails={toolDetails} />

          {/* Navigation Tabs */}
          <ToolNavigation />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <ProductInformation toolDetails={toolDetails} />
              <CoreFeatures toolDetails={toolDetails} />
              <UseCases toolDetails={toolDetails} />
              <FAQ toolDetails={toolDetails} />
              <ContactInformation toolDetails={toolDetails} />
              <ProsAndCons toolDetails={toolDetails} />
              <EmbedSection toolDetails={toolDetails} />
              <AlternativesSection toolDetails={toolDetails} />
            </div>

            {/* Sidebar */}
            <ToolSidebar toolDetails={toolDetails} />
          </div>
        </div>
      </ScrollArea>

      <Footer />
    </div>
  );
};

export default ToolDetail;
