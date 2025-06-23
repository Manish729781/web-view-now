
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Copy, Check } from 'lucide-react';

interface EmbedSectionProps {
  toolDetails: any;
}

const EmbedSection = ({ toolDetails }: EmbedSectionProps) => {
  const [copiedCode, setCopiedCode] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('light');

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

  return (
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
  );
};

export default EmbedSection;
