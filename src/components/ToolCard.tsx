import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ToolCardProps {
  tool: {
    name: string;
    description: string;
    icon: string;
    isFree?: boolean;
  };
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const navigate = useNavigate();

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
      polybuzz: 'bg-[#22223b] rounded-full',
      wenxin: 'bg-[#2196f3] rounded-lg',
      imagetotext: 'bg-[#b8e0fe] rounded-lg',
      sider: 'bg-[#a259ff] rounded-full',
      youcam: 'bg-[#ff4baf] rounded-full',
      pdfguru: 'bg-[#e63946] rounded-full',
      pdnobpdf: 'bg-[#ff914d] rounded-lg',
      pdnobimage: 'bg-[#ff914d] rounded-lg',
      abacus: 'bg-[#222] rounded-full',
      planner5d: 'bg-[#38b000] rounded-full',
      lenso: 'bg-[#2979ff] rounded-lg',
      dewatermark: 'bg-[#ff914d] rounded-lg',
      toppdf: 'bg-[#e63946] rounded-lg',
      elevenlabs: 'bg-[#222] rounded-lg',
      klingai: 'bg-white border-2 border-[#222] rounded-lg',
      wondershare: 'bg-[#222] rounded-lg',
      pixverse: 'bg-[#a259ff] rounded-full',
      easeus: 'bg-[#222] rounded-lg',
      adobepodcast: 'bg-white border-2 border-[#ff3c00] rounded-lg',
      symphony: 'bg-[#ff0050] rounded-full',
      riffusion: 'bg-[#222] rounded-full',
      onlineaudio: 'bg-[#ffb800] rounded-full',
      mediaai: 'bg-[#222] rounded-lg',
      voicemod: 'bg-[#b8b5ff] rounded-full',
      turboscribe: 'bg-[#3b82f6] rounded-full',
      veed: 'bg-[#38b000] rounded-lg',
      clipto: 'bg-[#222] rounded-lg',
      zeemo: 'bg-[#a259ff] rounded-full',
      invideo: 'bg-[#ff4baf] rounded-full',
      otter: 'bg-[#b8e0fe] rounded-lg',
      heygen: 'bg-[#7c5fff] rounded-full',
      civitai: 'bg-[#2196f3] rounded-lg',
      leonardo: 'bg-[#ffe066] rounded-full',
      midjourney: 'bg-[#e0e0e0] rounded-lg',
      picsart: 'bg-[#b8b5ff] rounded-full',
      pixlr: 'bg-[#222] rounded-lg',
      prezi: 'bg-[#b8e0fe] rounded-lg',
      miricanvas: 'bg-[#00bcd4] rounded-lg',
      rf123: 'bg-[#222] text-[#ffe066] rounded-full flex items-center justify-center font-bold text-lg'
    };
    
    return iconStyles[iconName] || 'bg-[#ede9fe] rounded-lg';
  };

  const handleClick = () => {
    // Convert tool name to URL-friendly ID
    const toolId = tool.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    navigate(`/tool/${toolId}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col gap-3 min-h-[140px] relative transition-all duration-200 hover:-translate-y-1 hover:scale-105 cursor-pointer"
    >
      <div className={`w-8 h-8 ${getIconStyle(tool.icon)} mb-1`}>
        {tool.icon === 'rf123' && <span>RF</span>}
      </div>
      
      <div className="flex-1">
        <h3 className="font-bold text-lg text-[#22223b] mb-2">{tool.name}</h3>
        <p className="text-[#5f5f7a] text-base leading-relaxed">{tool.description}</p>
      </div>
      
      {tool.isFree && (
        <div className="absolute top-3 right-4 bg-[#ede9fe] text-[#7c5fff] text-sm font-bold rounded-lg px-3 py-1">
          Free
        </div>
      )}
    </div>
  );
};

export default ToolCard;
