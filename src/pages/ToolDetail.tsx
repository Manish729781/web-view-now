import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ChevronRight,
  Star,
  Users,
} from 'lucide-react';

const ToolDetail = () => {
  const { toolId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [toolDetails, setToolDetails] = useState(null);

  useEffect(() => {
    // Fetch tool details based on toolId
    // Replace this with your actual data fetching logic
    const fetchToolDetails = async () => {
      // Simulate fetching data from an API
      await new Promise(resolve => setTimeout(resolve, 500));
      setToolDetails({
        id: toolId,
        name: 'Thunai',
        description: 'AI-powered knowledge management and automation platform.',
        website: 'https://thunai.ai',
        pricing: 'Contact for Pricing',
        categories: ['AI', 'Automation'],
        tags: ['AI', 'Knowledge Management', 'Automation'],
        traffic: {
          direct: 40.37,
          search: 35.94,
          referrals: 12.70,
        },
        active: 79.81,
      });
    };

    fetchToolDetails();
  }, [toolId]);

  const renderAlternatives = () => (
    <ScrollArea className="h-[600px] w-full">
      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Alternative of Thunai</h2>
          
          {/* Alternative Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* WebSparks */}
            <Card className="p-6">
              <div className="mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="WebSparks" 
                  className="w-full h-40 object-cover rounded-lg bg-purple-100"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">WebSparks</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-sm">1</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                AI-powered platform for rapid website and application development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Website</Badge>
                <Badge variant="secondary">Freemium</Badge>
                <Badge variant="secondary">AI Agent</Badge>
                <Badge variant="secondary">AI App Builder</Badge>
                <Badge variant="secondary">AI Code Generator</Badge>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Direct (40.37%)</span>
                  <span>Search (35.94%)</span>
                  <span>Referrals (12.70%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-l-full" style={{width: '40.37%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" className="flex-1 mr-2">Open site</Button>
                <div className="flex items-center gap-1 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>79.81%</span>
                </div>
              </div>
            </Card>

            {/* Klyr */}
            <Card className="p-6">
              <div className="mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Klyr" 
                  className="w-full h-40 object-cover rounded-lg bg-purple-100"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Klyr</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-gray-300" />
                  <span className="text-sm">0</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                AI assistant for community engagement, automation, and growth using deep learning.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Website</Badge>
                <Badge variant="secondary">Contact for Pricing</Badge>
                <Badge variant="secondary">AI Agent</Badge>
                <Badge variant="secondary">No-Code&Low-Code</Badge>
                <Badge variant="secondary">AI Chatbot</Badge>
                <Badge variant="secondary">AI Workflow</Badge>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Mail (0.00%)</span>
                  <span>Direct (0.00%)</span>
                  <span>Search (0.00%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-300 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" className="flex-1 mr-2">Open site</Button>
                <div className="flex items-center gap-1 text-sm">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span>--</span>
                </div>
              </div>
            </Card>

            {/* LinkedCamp */}
            <Card className="p-6">
              <div className="mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="LinkedCamp" 
                  className="w-full h-40 object-cover rounded-lg bg-gray-100"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">LinkedCamp</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-gray-300" />
                  <span className="text-sm">0</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                LinkedIn automation tool for lead generation and outreach.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Browser Extension</Badge>
                <Badge variant="secondary">Contact for Pricing</Badge>
                <Badge variant="secondary">AI Agent</Badge>
                <Badge variant="secondary">AI Social Media</Badge>
                <Badge variant="secondary">AI Assistant</Badge>
              </div>
              <div className="mb-4">
                <div className="text-sm text-center text-gray-500">
                  No traffic data available
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" className="flex-1 mr-2">Open site</Button>
                <div className="flex items-center gap-1 text-sm">
                  <Users className="w-4 h-4" />
                  <span>123 users</span>
                </div>
              </div>
            </Card>
          </div>

          {/* See More Button */}
          <div className="text-center mb-12">
            <Button variant="outline" className="flex items-center gap-2">
              Thunai Alternative
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Comparisons Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Thunai Comparisons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold">Thunai VS Tila AI</h3>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold">Thunai VS ChurchCalls.ai</h3>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold">Thunai VS Patsnap Eureka</h3>
              </Card>
            </div>
          </div>

          {/* Tags Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Thunai's Tags</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'AI', 'Agentic AI', 'Knowledge Management', 'Automation',
                'Customer Support Automation', 'Sales Automation', 'Marketing Automation',
                'AI Agents', 'Chatbot', 'Voice Assistant', 'Email Automation',
                'Workflow Automation', 'Lead Generation', 'Ticketing System',
                'Content Creation AI', 'Enterprise Search', 'Multimodal AI',
                'CRM Integration', 'Productivity Tool', 'Business Intelligence'
              ].map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  className="justify-between p-3 h-auto"
                >
                  <span>{tag}</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );

  const renderOverview = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p>{toolDetails?.description}</p>
    </div>
  );

  const renderProductInfo = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product Information</h2>
      <p>Website: <a href={toolDetails?.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{toolDetails?.website}</a></p>
      <p>Pricing: {toolDetails?.pricing}</p>
      <p>Categories: {toolDetails?.categories?.join(', ')}</p>
    </div>
  );

  const renderEmbed = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Embed</h2>
      <p>Embed options will be available here.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">{toolDetails?.name}</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'product-info', label: 'Product Information' },
                { key: 'embed', label: 'Embed' },
                { key: 'alternatives', label: 'Alternatives' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-0">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'product-info' && renderProductInfo()}
            {activeTab === 'embed' && renderEmbed()}
            {activeTab === 'alternatives' && renderAlternatives()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
