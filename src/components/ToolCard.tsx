
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
      // AI Tools / Featured
      zintra: 'https://cdn-images.toolify.ai/website-logos/20250612/1749692542_36297053_27055.webp',
      moonmate: 'https://cdn-images.toolify.ai/website-logos/20250620/1750424472_61368253_27114.webp',
      seoing: 'https://cdn-images.toolify.ai/website-logos/20250423/1745401941_90246442_26566.webp',
      'seo.ing': 'https://cdn-images.toolify.ai/website-logos/20250423/1745401941_90246442_26566.webp',
      seedanceai: 'https://cdn-images.toolify.ai/website-logos/20250621/1750484771_88125055_27116.webp',
      'seedance ai': 'https://cdn-images.toolify.ai/website-logos/20250621/1750484771_88125055_27116.webp',
      midjourneyVideo: 'https://cdn-images.toolify.ai/website-logos/20250621/1750484546_24722045_27115.webp',
      'midjourney video': 'https://cdn-images.toolify.ai/website-logos/20250621/1750484546_24722045_27115.webp',
      shoplauncherai: 'https://i.imgur.com/9Banxgj.png',
      'shoplauncher ai': 'https://i.imgur.com/9Banxgj.png',
      thena: 'https://cdn-images.toolify.ai/website-logos/20250620/1750424340_46886314_27113.webp',
      wawawriting: 'https://cdn-images.toolify.ai/website-logos/20250620/1750424135_74679202_27112.webp',
      '蛙蛙写作': 'https://cdn-images.toolify.ai/website-logos/20250620/1750424135_74679202_27112.webp',
      makefilm: 'https://cdn-images.toolify.ai/website-logos/20250620/1750387023_94039410_27111.webp',
      skywork: 'https://cdn-images.toolify.ai/website-logos/20250519/1747643953_99414098_26829.webp',
      vidduo: 'https://cdn-images.toolify.ai/website-logos/20250620/1750383743_34669254_27110.webp',
      thunai: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324127_27486179_27109.webp',
      ittybit: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324126_26703907_27108.webp',
      nlx: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324125_16079808_27106.webp',
      fluig: 'https://cdn-images.toolify.ai/website-logos/20250513/1747123987_46497157_26780.webp',
      avidoai: 'https://cdn-images.toolify.ai/website-logos/20250601/1748725190_54006845_26975.webp',
      'avido.ai': 'https://cdn-images.toolify.ai/website-logos/20250601/1748725190_54006845_26975.webp',
      theailaborindex: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324125_29260169_27107.webp',
      'the ai labor index': 'https://cdn-images.toolify.ai/website-logos/20250619/1750324125_29260169_27107.webp',
      echovoxstudio: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324126_34256091_27105.webp',
      'echovox studio': 'https://cdn-images.toolify.ai/website-logos/20250619/1750324126_34256091_27105.webp',
      labubulive: 'https://cdn-images.toolify.ai/website-logos/20250619/1750324091_57968045_27104.webp',
      'labubu live wallpaper': 'https://cdn-images.toolify.ai/website-logos/20250619/1750324091_57968045_27104.webp',
      scoopanalytics: 'https://cdn-images.toolify.ai/website-logos/20250607/1749261611_71119978_27013.webp',
      'scoop analytics': 'https://cdn-images.toolify.ai/website-logos/20250607/1749261611_71119978_27013.webp',
      i10x: 'https://cdn-images.toolify.ai/website-logos/20250510/1746849612_55781514_26754.webp',
      fluxxai: 'https://cdn-images.toolify.ai/website-logos/20250612/1749723386_48538590_27059.webp',
      'fluxx.ai': 'https://cdn-images.toolify.ai/website-logos/20250612/1749723386_48538590_27059.webp',

      // Writing & Editing
      chatgpt: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268274_72784253_9363.webp',
      'chat gpt': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268274_72784253_9363.webp',
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
      'freepik ai image generator': 'https://cdn-images.toolify.ai/website-logos/20250410/1744259129_39450216_17826.webp',
      removebg: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256584_31398616_1115.webp',
      'remove.bg': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256584_31398616_1115.webp',
      shutterstock: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268302_90808892_9451.webp',
      capcut: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351911_17173443_9430.webp',
      polybuzzai: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350577_28304151_22619.webp',
      'polybuzz.ai': 'https://cdn-images.toolify.ai/website-logos/20250411/1744350577_28304151_22619.webp',
      seaart: 'https://cdn-images.toolify.ai/website-logos/20250410/1744267884_54962876_8508.webp',
      'seaart.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744267884_54962876_8508.webp',
      photoroom: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256603_80945931_1187.webp',
      pixelcut: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268133_89718104_9037.webp',
      deepai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268204_31255207_9208.webp',

      // Image Analysis
      wenxin: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259012_14428469_16138.webp',
      '文心一言': 'https://cdn-images.toolify.ai/website-logos/20250410/1744259012_14428469_16138.webp',
      imagetotext: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351313_22469593_26237.webp',
      'imagetotext.info': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351313_22469593_26237.webp',
      sider: 'https://cdn-images.toolify.ai/website-logos/20250410/1744265937_65310952_4973.webp',
      youcam: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259151_70511634_17858.webp',
      'youcam app provider': 'https://cdn-images.toolify.ai/website-logos/20250410/1744259151_70511634_17858.webp',
      pdfguru: 'https://cdn-images.toolify.ai/website-logos/20250411/1744352101_16577780_24420.webp',
      'pdf guru': 'https://cdn-images.toolify.ai/website-logos/20250411/1744352101_16577780_24420.webp',
      pdnobpdf: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350685_57452143_23090.webp',
      'pdnob pdf editor': 'https://cdn-images.toolify.ai/website-logos/20250411/1744350685_57452143_23090.webp',
      pdnobimage: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350686_75467632_23091.webp',
      'pdnob image translator': 'https://cdn-images.toolify.ai/website-logos/20250411/1744350686_75467632_23091.webp',
      abacus: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259041_10052097_17338.webp',
      'abacus.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744259041_10052097_17338.webp',
      planner5d: 'https://cdn-images.toolify.ai/website-logos/20250415/1744714047_55187518_26413.webp',
      'planner 5d': 'https://cdn-images.toolify.ai/website-logos/20250415/1744714047_55187518_26413.webp',
      lenso: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259507_51312325_18826.webp',
      'lenso.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744259507_51312325_18826.webp',
      dewatermark: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351922_84834159_9883.webp',
      'dewatermark.ai': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351922_84834159_9883.webp',
      toppdf: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351137_32572791_25274.webp',

      // Music & Audio
      elevenlabs: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268213_46337136_9234.webp',
      klingai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744260373_22610284_21127.webp',
      'kling ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744260373_22610284_21127.webp',
      wondershare: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268296_44578539_9433.webp',
      pixverse: 'https://cdn-images.toolify.ai/website-logos/20250411/1744362504_45276233_7598.svg%2Bxml',
      easeus: 'https://cdn-images.toolify.ai/website-logos/20250417/1744874165_64311322_26437.webp',
      adobepodcast: 'https://cdn-images.toolify.ai/website-logos/20250411/1744361256_24472793_195.webp',
      'adobe podcast': 'https://cdn-images.toolify.ai/website-logos/20250411/1744361256_24472793_195.webp',
      symphony: 'https://cdn-images.toolify.ai/website-logos/20250411/1744362566_18823485_22317.png',
      'symphony creative studio': 'https://cdn-images.toolify.ai/website-logos/20250411/1744362566_18823485_22317.png',
      riffusion: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256200_59410585_30.webp',
      onlineaudio: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351314_95970516_26239.webp',
      'online audio converter': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351314_95970516_26239.webp',
      mediaai: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350939_84156828_24396.webp',
      'media ai generator': 'https://cdn-images.toolify.ai/website-logos/20250411/1744350939_84156828_24396.webp',
      voicemod: '', // No URL provided

      // Voice Generation & Conversion
      turboscribe: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268072_96151101_8800.webp',
      veed: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268300_43095646_9445.webp',
      'veed.io': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268300_43095646_9445.webp',
      clipto: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351909_40717219_9179.webp',
      'clipto.ai': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351909_40717219_9179.webp',
      zeemo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256311_42920426_377.webp',
      invideo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256554_28021896_1020.webp',
      otter: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256555_85548471_1022.webp',
      'otter.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256555_85548471_1022.webp',
      heygen: 'https://cdn-images.toolify.ai/website-logos/20250411/1744363939_52170568_906.png',

      // Art & Creative Design
      civitai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256232_16790767_220.webp',
      leonardo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256483_76089004_867.webp',
      'leonardo.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256483_76089004_867.webp',
      midjourney: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351670_28702152_37.webp',
      picsart: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351311_92085375_26214.webp',
      pixlr: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256649_11689333_1293.webp',
      prezi: 'https://cdn-images.toolify.ai/website-logos/20250528/1748444328_67820927_26933.webp',
      miricanvas: 'https://cdn-images.toolify.ai/website-logos/20250417/1744853401_74650104_26436.webp',
      rf123: 'https://cdn-images.toolify.ai/website-logos/20250410/1744275473_82598837_4824.webp',
      '123rf': 'https://cdn-images.toolify.ai/website-logos/20250410/1744275473_82598837_4824.webp',

      // Social Media
      uhmegle: 'https://cdn-images.toolify.ai/website-logos/20250410/1744260123_23115471_20586.webp',
      microsoftdesigner: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256809_51752710_1764.webp',
      'microsoft designer': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256809_51752710_1764.webp',
      transkriptor: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268070_73799278_8791.webp',
      turbolearn: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259040_99545863_17336.webp',
      'turbolearn ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744259040_99545863_17336.webp',
      flexclip: 'https://cdn-images.toolify.ai/website-logos/20250410/1744257147_82970455_2383.webp',
      supawork: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259775_44246464_19551.webp',
      'supawork ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744259775_44246464_19551.webp',
      gitmind: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351947_87948785_10875.webp',
      chatask: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268250_35497728_9315.webp',
      'chat & ask ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268250_35497728_9315.webp',

      // AI Detection & Anti-Detection
      gptzero: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256796_28480420_1713.webp',
      scribbr: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351311_76557272_26213.webp',
      undetectable: 'https://cdn-images.toolify.ai/website-logos/20250410/1744265292_30503957_3605.webp',
      'undetectable ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744265292_30503957_3605.webp',
      aura: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268296_71207123_9429.webp',
      branded: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268295_35172602_9426.webp',
      hcaptcha: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268152_37958941_9088.webp',
      aiseo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256383_86902222_593.webp',
      stealthwriter: 'https://cdn-images.toolify.ai/website-logos/20250410/1744265197_97943874_3343.webp',

      // Coding & Development
      claude: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351804_55033577_5546.webp',
      googleai: 'https://cdn-images.toolify.ai/website-logos/20250523/1747991964_78332445_26884.webp',
      'google ai studio': 'https://cdn-images.toolify.ai/website-logos/20250523/1747991964_78332445_26884.webp',
      lovable: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259934_27554238_19933.webp',
      miro: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256650_83434197_1297.webp',
      huggingface: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268154_13981330_9100.webp',
      'hugging face': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268154_13981330_9100.webp',

      // Video & Animation
      sora: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351934_90176468_10346.webp',
      cutout: 'https://cdn-images.toolify.ai/website-logos/20250410/1744258096_63613392_11854.webp',
      'cutout.pro': 'https://cdn-images.toolify.ai/website-logos/20250410/1744258096_63613392_11854.webp',
      candyai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268233_45284004_9278.webp',
      'candy ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268233_45284004_9278.webp',

      // Daily Life
      thomsonreuters: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351276_56733699_26069.webp',
      'thomson reuters': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351276_56733699_26069.webp',
      genspark: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259690_80176876_19410.webp',
      spoiledchild: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351910_35838183_9421.webp',
      wanderboat: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259157_54517223_17980.webp',
      gorgias: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351278_52158754_26080.webp',
      hitpaw: 'https://cdn-images.toolify.ai/website-logos/20250410/1744267781_69029182_8400.webp',
      'hitpaw fotorpea': 'https://cdn-images.toolify.ai/website-logos/20250410/1744267781_69029182_8400.webp',
      wondersharevirbo: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350544_38703896_22462.webp',
      'wondershare virbo': 'https://cdn-images.toolify.ai/website-logos/20250411/1744350544_38703896_22462.webp',
      dreamface: 'https://cdn-images.toolify.ai/website-logos/20250410/1744258495_60388869_12868.webp',
      designbundles: 'https://cdn-images.toolify.ai/website-logos/20250410/1744286306_32607751_21205.webp',
      'design bundles': 'https://cdn-images.toolify.ai/website-logos/20250410/1744286306_32607751_21205.webp',
      artbreeder: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256593_21114403_1153.webp',

      // Legal & Finance
      mathgpt: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350580_67058782_22637.webp',
      casetext: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351686_80234015_1071.webp',
      lawinsider: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351281_89799152_26098.webp',
      'law insider': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351281_89799152_26098.webp',
      macromicro: 'https://cdn-images.toolify.ai/website-logos/20250410/1744258854_63706390_13680.webp',
      gva: 'https://cdn-images.toolify.ai/website-logos/20250410/1744257753_53074303_11274.webp',
      'gva nda check': 'https://cdn-images.toolify.ai/website-logos/20250410/1744257753_53074303_11274.webp',
      finchat: 'https://cdn-images.toolify.ai/website-logos/20250414/1744600003_88297294_19696.webp',
      'finchat.io': 'https://cdn-images.toolify.ai/website-logos/20250414/1744600003_88297294_19696.webp',
      stockstory: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268106_34427683_8943.webp',
      ainvest: 'https://cdn-images.toolify.ai/website-logos/20250410/1744266819_29990573_6773.webp',
      filevine: 'https://cdn-images.toolify.ai/website-logos/20250410/1744266093_46554727_5262.webp',

      // Business Management
      salesforcecn: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268100_73410235_8925.webp',
      'salesforce cn': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268100_73410235_8925.webp',
      jotform: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351001_55273771_24535.webp',
      'jotform ai agents': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351001_55273771_24535.webp',
      hubspot: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268291_95835844_9407.webp',
      airtable: 'https://cdn-images.toolify.ai/website-logos/20250411/1744361532_85729366_26274.webp',
      anthropic: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351951_92717609_11068.webp',
      zapier: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268087_59394397_8860.webp',
      tawk: 'https://cdn-images.toolify.ai/website-logos/20250410/1744257788_10553097_11357.webp',
      'tawk.to hire chat agents': '  https://cdn-images.toolify.ai/website-logos/20250410/1744257788_10553097_11357.webp',
      windsurf: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351278_45771206_26077.webp',
      klaviyo: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268165_72273679_9133.webp',

      // Marketing & Advertising
      framer: 'https://cdn-images.toolify.ai/website-logos/20250410/1744265825_25810384_4803.webp',
      vidiq: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256225_65253076_131.webp',

      // Health & Wellness
      medisphere: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351136_42578931_25267.webp',
      brain: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256210_75697487_95.webp',
      'brain.fm': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256210_75697487_95.webp',
      pi: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351700_25546645_1790.webp',
      clickworker: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268304_55720178_9455.webp',
      freed: 'https://cdn-images.toolify.ai/website-logos/20250410/1744267102_61097326_7269.webp',
      replika: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256229_97613067_205.webp',
      lecturio: 'https://cdn-images.toolify.ai/website-logos/20250411/1744361305_47019988_26265.webp',
      heidihealth: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268601_17917787_10058.webp',
      'heidi health': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268601_17917787_10058.webp',
      carepatron: 'https://cdn-images.toolify.ai/website-logos/20250410/1744257345_26865002_10342.webp',
      plantin: 'https://cdn-images.toolify.ai/website-logos/20250410/1744260480_72467503_21438.webp',

      // Business Research
      heroz: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268155_31031860_9093.webp',
      pionex: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351881_52150025_8004.webp',
      shiftai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268099_14309976_8913.webp',
      'shift ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268099_14309976_8913.webp',
      hotpot: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256541_32313561_990.webp',
      'hotpot.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256541_32313561_990.webp',
      starryai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744266581_76861318_6318.webp',
      webscrypto: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259034_15620552_16675.webp',
      rosebud: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256480_22113864_861.webp',
      'rosebud ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256480_22113864_861.webp',
      myshell: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256961_30752697_2191.webp',
      luxalgo: 'https://cdn-images.toolify.ai/website-logos/20250414/1744614884_11904052_26355.webp',
      composer: 'https://cdn-images.toolify.ai/website-logos/20250410/1744265807_45906083_4774.webp',
      chatgptmega: 'https://cdn-images.toolify.ai/website-logos/20250410/1744260032_97430392_20280.webp',
      '200+ chatgpt mega-prompts for business': 'https://cdn-images.toolify.ai/website-logos/20250410/1744260032_97430392_20280.webp',
      '200+ chatgpt mega-prompts for solopreneurs': 'https://cdn-images.toolify.ai/website-logos/20250410/1744260032_97430392_20280.webp',

      // Education & Translation
      perplexity: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256222_92527376_163.webp',
      'perplexity ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256222_92527376_163.webp',
      poe: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351670_46097204_92.webp',
      gauth: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268298_78232892_9435.webp',

      // Chatbots & Virtual Companions
      googlegemini: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351936_18480017_10402.webp',
      'google gemini': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351936_18480017_10402.webp',
      janitorai: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351797_43127333_5330.webp',
      'janitor ai': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351797_43127333_5330.webp',
      spicychat: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268308_62142915_9483.webp',
      'spicychat.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268308_62142915_9483.webp',
      lovescape: 'https://cdn-images.toolify.ai/website-logos/20250411/1744350846_76706798_23830.webp',
      crushon: 'https://cdn-images.toolify.ai/website-logos/20250410/1744266830_30239166_6788.webp',
      'crushon.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744266830_30239166_6788.webp',

      // Research & Data Analysis
      prolific: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268232_87392372_9276.webp',
      linerai: 'https://cdn-images.toolify.ai/website-logos/20250410/1744264891_78991151_2709.webp',
      'liner ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744264891_78991151_2709.webp',
      runway: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256225_40471718_183.webp',
      googleaidevelopers: 'https://cdn-images.toolify.ai/website-logos/20250411/1744351943_16015117_10703.webp',
      'google ai for developers': 'https://cdn-images.toolify.ai/website-logos/20250411/1744351943_16015117_10703.webp',
      wolfram: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256201_44269922_35.webp',
      'wolfram|alpha': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256201_44269922_35.webp',

      // Interior & Architectural Design
      coohom: 'https://cdn-images.toolify.ai/website-logos/20250410/1744257006_54463345_2262.webp',
      easypeasy: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256199_26877289_26.webp',
      'easy-peasy.ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744256199_26877289_26.webp',
      pincel: 'https://cdn-images.toolify.ai/website-logos/20250410/1744259861_32542742_19710.webp',
      mnml: 'https://cdn-images.toolify.ai/website-logos/20250412/1744455264_75658265_26302.webp',
      'mnml.ai': 'https://cdn-images.toolify.ai/website-logos/20250412/1744455264_75658265_26302.webp',
      roomgpt: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268094_26222488_8893.webp',
      photoleap: 'https://cdn-images.toolify.ai/website-logos/20250410/1744260092_86370457_20512.webp',
      collov: 'https://cdn-images.toolify.ai/website-logos/20250410/1744268335_78221784_9563.webp',
      'collov virtual staging ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744268335_78221784_9563.webp',
      'collov ai': 'https://cdn-images.toolify.ai/website-logos/20250410/1744267657_15595556_8140.webp',
      maket: 'https://cdn-images.toolify.ai/website-logos/20250410/1744256551_91879315_1009.webp',
    };
    
    // Create lookup key by cleaning the icon name and tool name
    const cleanKey = iconName.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return logoUrls[cleanKey] || logoUrls[iconName] || '';
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
          <span className="text-[#7c5fff] font-bold text-sm">
            {tool.name.substring(0, 2).toUpperCase()}
          </span>
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
