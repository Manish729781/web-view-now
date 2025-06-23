
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Calendar, Tag, Globe, ExternalLink, Twitter, Mail } from 'lucide-react';

interface ToolHeaderProps {
  toolDetails: any;
}

const ToolHeader = ({ toolDetails }: ToolHeaderProps) => {
  return (
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
            {toolDetails.tags.map((tag: string, index: number) => (
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
  );
};

export default ToolHeader;
