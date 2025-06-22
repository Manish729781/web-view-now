
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

  const getLogoUrl = (iconName: string) => {
    const logoUrls: { [key: string]: string } = {
      // AI Tools
      zintra: 'https://cdn-images.toolify.ai/website-logos/20250612/1749692542_36297053_27055.webp',
      moonmate: 'https://cdn-images.toolify.ai/website-logos/20250620/1750424472_61368253_27114.webp',
      seoing: 'https://cdn-images.toolify.ai/website-logos/20250423/1745401941_90246442_26566.webp',
      seedanceai: 'https://cdn-images.toolify.ai/website-logos/20250621/1750484771_88125055_27116.webp',
      midjourneyVideo: 'https://cdn-images.toolify.ai/website-logos/20250621/1750484546_24722045_27115.webp',
      shoplauncherai: 'https://i.imgur.com/9Banxgj.png',
      thena: 'https://cdn-images.toolify.ai/website-logos/20250620/1750424340_46886314_27113.webp',
      wawawriting: 'https://cdn-images.toolify.ai/website-logos/20250620/1750424135_74679202_27112.webp',
      makefilm: 'https://cdn-images.toolify.ai/website-logos/20250620/1750387023_94039410_27111.webp',
      skywork: 'https://cdn-images.toolify.ai/website-logos/20250519/1747643953_99414098_26829.webp',
      vidduo: 'https://cdn-images.toolify.ai/website-logos/20250620/1750383743_34669254_27110.webp',
      thunai: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324127_27486179_27109.webp',
      ittybit: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324126_26703907_27108.webp',
      nlx: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324125_16079808_27106.webp',
      fluig: 'https://cdn-images.toolify.ai/website-logos/20250513/1747123987_46497157_26780.webp',
      avidoai: 'https://cdn-images.toolify.ai/website-logos/20250601/1748725190_54006845_26975.webp',
      theailaborindex: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324125_29260169_27107.webp',
      echovoxstudio: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324126_34256091_27105.webp',
      labubulive: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324091_57968045_27104.webp',
      scoopanalytics: 'https://cdn-images.toolify.ai/website-logos/20250607/1749261611_71119978_27013.webp',
      i10x: 'https://cdn-images.toolify.ai/website-logos/20250510/1746849612_55781514_26754.webp',
      fluxxai: 'https://cdn-images.toolify.ai/website-logos/20250612/1749723386_48538590_27059.webp',

      // Writing & Editing
      chatgpt: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268274_72784253_9363.webp',
      deepseek: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350307_38832283_24419.webp',
      deepl: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256606_24078451_1190.webp',
      notion: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256199_74077051_27.webp',
      quillbot: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256223_64506982_171.webp',
      grammarly: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256231_46565166_210.webp',
      studocu: 'https://cdn-images.toolify.ai/website-logos/20250414/1744600020_75744694_26235.webp',
      gamma: 'https://cdn-images.toolify.ai/website-logos/20250513/1747100211_63892668_3864.png',
      zerogpt: 'https://cdn-images.toolify.ai/website-logos/20250410/1744265105_51865745_3085.webp',
      beacons: 'https://cdn-images.toolify.ai/website-logos/20250410/1744267279_61041033_7616.webp',
      perchance: 'https://cdn-images.toolify.ai/website-logos/20250410/1744258852_28507995_13582.webp',
      monica: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256735_96373357_1515.webp',

      // Image Generation & Editing
      openai: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351449_97207868_1498.webp',
      adobe: 'https://cdn-images.toolify.ai/website-logos/20250414/1744599972_10558098_9420.webp',
      grok: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351654_37355907_24836.webp',
      freepik: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259129_39450216_17826.webp',
      removebg: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256584_31398616_1115.webp',
      shutterstock: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268302_90808892_9451.webp',
      capcut: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351911_17173443_9430.webp',
      polybuzzai: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350577_28304151_22619.webp',
      seaart: 'https://cdn-images.toolify.ai/website-logos/20250410/1744267884_54962876_8508.webp',
      photoroom: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256603_80945931_1187.webp',
      pixelcut: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268133_89718104_9037.webp',
      deepai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268204_31255207_9208.webp',

      // Image Analysis
      wenxin: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259012_14428469_16138.webp',
      imagetotext: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351313_22469593_26237.webp',
      sider: 'https://cdn-images.toolify.ai/website-logos/20250410/1744265937_65310952_4973.webp',
      youcam: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259151_70511634_17858.webp',
      pdfguru: 'https://cdn-images.toolify.ai/website-logos/20250411/1744352101_16577780_24420.webp',
      pdnobpdf: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350685_57452143_23090.webp',
      pdnobimage: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350686_75467632_23091.webp',
      abacus: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259041_10052097_17338.webp',
      planner5d: 'https://cdn-images.toolify.ai/website-logos/20250415/1744714047_55187518_26413.webp',
      lenso: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259507_51312325_18826.webp',
      dewatermark: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351922_84834159_9883.webp',
      toppdf: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351137_32572791_25274.webp',

      // Music & Audio
      elevenlabs: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268213_46337136_9234.webp',
      klingai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744260373_22610284_21127.webp',
      wondershare: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268296_44578539_9433.webp',
      pixverse: 'https://cdn-images.toolify.ai/website-logos/20250411/1744362504_45276233_7598.svg%2Bxml',
      easeus: 'https://cdn-images.toolify.ai/website-logos/20250417/1744874165_64311322_26437.webp',
      adobepodcast: 'https://cdn-images.toolify.ai/website-logos/20250411/1744361256_24472793_195.webp',
      symphony: 'https://cdn-images.toolify.ai/website-logos/20250411/1744362566_18823485_22317.png',
      riffusion: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256200_59410585_30.webp',
      onlineaudio: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351314_95970516_26239.webp',
      mediaai: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350939_84156828_24396.webp',

      // Voice Generation & Conversion
      turboscribe: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268072_96151101_8800.webp',
      veed: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268300_43095646_9445.webp',
      clipto: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351909_40717219_9179.webp',
      zeemo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256311_42920426_377.webp',
      invideo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256554_28021896_1020.webp',
      otter: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256555_85548471_1022.webp',
      heygen: 'https://cdn-images.toolify.ai/website-logos/20250411/1744363939_52170568_906.png',

      // Art & Creative Design
      civitai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256232_16790767_220.webp',
      leonardo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256483_76089004_867.webp',
      midjourney: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351670_28702152_37.webp',
      picsart: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351311_92085375_26214.webp',
      pixlr: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256649_11689333_1293.webp',
      prezi: 'https://cdn-images.toolify.ai/website-logos/20250528/1748444328_67820927_26933.webp',
      miricanvas: 'https://cdn-images.toolify.ai/website-logos/20250417/1744853401_74650104_26436.webp',
      rf123: 'https://cdn-images.toolify.ai/website-logos/20250410/1744275473_82598837_4824.webp'
    };
    
    return logoUrls[iconName] || '';
  };

  const handleClick = () => {
    // Convert tool name to URL-friendly ID
    const toolId = tool.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    navigate(`/tool/${toolId}`);
  };

  const logoUrl = getLogoUrl(tool.icon);

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col gap-3 min-h-[140px] relative transition-all duration-200 hover:-translate-y-1 hover:scale-105 cursor-pointer"
    >
      <div className="w-8 h-8 mb-1 flex items-center justify-center">
        {logoUrl ? (
          <img 
            src={logoUrl} 
            alt={`${tool.name} logo`}
            className="w-8 h-8 object-contain rounded"
            onError={(e) => {
              // Fallback to colored div if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextSibling as HTMLDivElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
        ) : null}
        <div 
          className="w-8 h-8 bg-[#ede9fe] rounded-lg flex items-center justify-center" 
          style={{ display: logoUrl ? 'none' : 'block' }}
        >
          {tool.icon === 'rf123' && <span className="text-[#7c5fff] font-bold text-sm">RF</span>}
        </div>
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
