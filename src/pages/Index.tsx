
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import FeaturedTools from '../components/FeaturedTools';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f1ff]">
      <Header />
      <Navbar />
      <Hero />
      <FilterBar />
      <FeaturedTools />
      <CategorySection
        title="Writing & Editing"
        categories={[
          'All', 'AI Writing Assistants', 'AI Summarizer', 'AI Text Generator', 
          'AI Writing', 'AI Blog Generator', 'AI Copywriting'
        ]}
        tools={writingTools}
        sidebarTools={sidebarTools}
      />
      <CategorySection
        title="Image Generation & Editing"
        categories={[
          'All', 'AI Image Generator', 'Text to Image', 'AI Photo Editor',
          'AI Avatar Generator', 'AI Background Remover', 'AI Realistic Image Generator'
        ]}
        tools={imageTools}
        sidebarTools={imageSidebarTools}
      />
      <CategorySection
        title="Image Analysis"
        categories={[
          'All', 'AI Image Recognition', 'AI OCR', 'AI Face Recognition',
          'AI Describe Image', 'AI Face Analyzer', 'Image to Prompt'
        ]}
        tools={imageAnalysisTools}
      />
      <CategorySection
        title="Music & Audio"
        categories={[
          'All', 'AI Music Generator', 'AI Song Generator', 'AI Lyrics Generator',
          'AI Audio Editing', 'AI Vocal Remover', 'AI Sound Effect Generator'
        ]}
        tools={musicTools}
      />
      <CategorySection
        title="Voice Generation & Conversion"
        categories={[
          'All', 'AI Text-to-Speech', 'AI Speech-to-Text', 'AI Transcription',
          'AI Voice Generator', 'AI Voice Assistants', 'AI Voice Cloning'
        ]}
        tools={voiceTools}
      />
      <CategorySection
        title="Art & Creative Design"
        categories={[
          'All', 'AI Art Generator', 'AI Design Generator', 'AI Graphic Design',
          'AI Anime Generator', 'AI Logo Generator', 'AI Design Assistant'
        ]}
        tools={artTools}
      />
      <Footer />
    </div>
  );
};

// Tool data
const writingTools = [
  { name: 'ChatGPT', description: 'A free-to-use AI system for conversations, insights, and tas…', icon: 'chatgpt' },
  { name: 'DeepSeek', description: 'DeepSeek is an AI company providing foundation models an…', icon: 'deepseek' },
  { name: 'DeepL', description: 'Accurate machine translation and AI-powered writing assistance f…', icon: 'deepl' },
  { name: 'Notion', description: 'All-in-one workspace for notes, docs, projects, and AI-powered…', icon: 'notion' },
  { name: 'QuillBot', description: 'AI-powered writing tool for paraphrasing, grammar checkin…', icon: 'quillbot' },
  { name: 'Grammarly', description: 'AI writing assistant for grammar, style, and tone correction and…', icon: 'grammarly' },
  { name: 'Studocu', description: 'Studocu is a platform for students to share and access study…', icon: 'studocu' },
  { name: 'Gamma', description: 'AI-powered platform for creating presentations, webpages, and…', icon: 'gamma' },
  { name: 'ZeroGPT', description: 'ZeroGPT is an AI content detector and offers various writing tools.', icon: 'zerogpt' },
  { name: 'Beacons', description: 'All-in-one platform for content creators with link-in-bio, store,…', icon: 'beacons' },
  { name: 'Perchance', description: 'Perchance is a platform for creating and sharing random…', icon: 'perchance' },
  { name: 'Monica', description: 'Chrome extension AI assistant for chatting, copywriting,…', icon: 'monica', isFree: true }
];

const sidebarTools = [
  { name: 'Fluxx.AI', description: 'Free FLUX.1 Kontext: AI Context Image Editing & Generation', icon: 'fluxx', isFree: true },
  { name: 'DreamVid', description: 'AI image to video generator for animating photos and creating…', icon: 'dreamvid' },
  { name: 'Novi AI', description: 'AI video generator creating high-quality videos from text with various…', icon: 'novi', isFree: true },
  { name: 'LIP-SYNC', description: 'AI lip sync technology transforms photos into lifelike talking videos.', icon: 'lipsync' }
];

const imageTools = [
  { name: 'OpenAI', description: 'AI research and deployment company focused on building s…', icon: 'openai' },
  { name: 'Adobe', description: 'Adobe provides creative, marketing, and document…', icon: 'adobe' },
  { name: 'Grok', description: 'Grok is a free AI assistant by xAI for truth, objectivity, real-time…', icon: 'grok', isFree: true },
  { name: 'remove.bg', description: 'AI-powered background remover for images in 5 seconds.', icon: 'removebg' },
  { name: 'Shutterstock', description: 'Shutterstock provides royalty-free stock images, videos, and musi…', icon: 'shutterstock' },
  { name: 'CapCut', description: 'CapCut is an AI-driven all-in-one video editor and graphic design…', icon: 'capcut' },
  { name: 'Seaart.ai', description: 'Free AI illustration generation platform for various devices.', icon: 'seaart', isFree: true },
  { name: 'Photoroom', description: 'All-in-one photo editing platform for professional designs.', icon: 'photoroom' },
  { name: 'Pixelcut', description: 'Free AI photo editor with tools for background removal, retouchin…', icon: 'pixelcut' },
  { name: 'DeepAI', description: 'DeepAI provides AI tools for image generation, editing, and…', icon: 'deepai' }
];

const imageSidebarTools = [
  { name: 'Freepik AI Image', description: 'Free AI tool to generate images from text in real-time with vario…', icon: 'freepik', isFree: true },
  { name: 'PolyBuzz.ai', description: 'Free AI chatbot platform for creating and chatting with…', icon: 'polybuzz' },
  { name: 'Colorings', description: 'AI tool for custom and pre-designed printable coloring pages from text …', icon: 'colorings' },
  { name: 'KontextFlux.app', description: 'AI-powered image generation and natural language image editing.', icon: 'kontextflux' }
];

const imageAnalysisTools = [
  { name: '文心一言', description: '文心一言 is an AI assistant for chatting, answering questions,…', icon: 'wenxin' },
  { name: 'ImageToText.info', description: 'Online OCR tool to extract text from images for free.', icon: 'imagetotext' },
  { name: 'Sider', description: 'AI assistant integrating ChatGPT, Claude, and Gemini for reading,…', icon: 'sider' },
  { name: 'YouCam App Prov…', description: 'AI & AR solutions for beauty, fashion, and skin tech, including…', icon: 'youcam' },
  { name: 'PDF Guru', description: 'Online PDF tool for summarizing, editing, converting, signing, an…', icon: 'pdfguru' },
  { name: 'PDNob PDF Editor', description: 'AI-powered PDF editor for Windows and Mac with…', icon: 'pdnobpdf' },
  { name: 'PDNob Image Tra…', description: 'Free AI-powered app to translate text from images instantly and…', icon: 'pdnobimage' },
  { name: 'Abacus.AI', description: 'AI platform for building and embedding AI solutions into…', icon: 'abacus' },
  { name: 'Planner 5D', description: 'A 3D home design tool using AI to convert 2D plans into 3D…', icon: 'planner5d', isFree: true },
  { name: 'Lenso.ai', description: 'Lenso.ai is an AI-powered reverse image search platform for findin…', icon: 'lenso' },
  { name: 'Dewatermark.AI', description: 'AI-powered online tool to remove watermarks and unwanted obj…', icon: 'dewatermark' },
  { name: 'TopPDF', description: 'AI-powered PDF tools for editing, translating, compressing, and…', icon: 'toppdf' }
];

const musicTools = [
  { name: 'ElevenLabs', description: 'AI audio platform offering text-to-speech, voice cloning, and…', icon: 'elevenlabs' },
  { name: 'Kling AI', description: 'AI creative platform for generating images and videos.', icon: 'klingai' },
  { name: 'Wondershare', description: 'Software solutions for creativity, productivity, and utility, including…', icon: 'wondershare' },
  { name: 'PixVerse', description: 'AI video generator that transforms text and photos into…', icon: 'pixverse' },
  { name: 'EaseUS', description: 'EaseUS provides data recovery, backup, partition management,…', icon: 'easeus' },
  { name: 'Adobe Podcast', description: 'AI-powered audio recording and editing platform by Adobe.', icon: 'adobepodcast' },
  { name: 'Symphony Creati…', description: 'A creative studio.', icon: 'symphony' },
  { name: 'Riffusion', description: 'Generative AI instrument for creating, remixing, and sharing…', icon: 'riffusion' },
  { name: 'Online Audio Con…', description: 'A free online app to convert audio files to various formats and…', icon: 'onlineaudio' },
  { name: 'Media AI Generator', description: 'Free online AI tools for video, image, and music generation.', icon: 'mediaai' },
  { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard for PC and Mac.', icon: 'voicemod' }
];

const voiceTools = [
  { name: 'Studocu', description: 'Studocu is a platform for students to share and access study…', icon: 'studocu' },
  { name: 'CapCut', description: 'CapCut is an AI-driven all-in-one video editor and graphic design…', icon: 'capcut' },
  { name: 'ElevenLabs', description: 'AI audio platform offering text-to-speech, voice cloning, and…', icon: 'elevenlabs' },
  { name: 'TurboScribe', description: 'AI transcription service converting audio and video to text in 98+…', icon: 'turboscribe' },
  { name: 'VEED.IO', description: 'Online video editor with AI tools for creating professional videos…', icon: 'veed' },
  { name: 'Clipto.AI', description: 'AI-powered media management assistant with transcription, vide…', icon: 'clipto' },
  { name: 'Zeemo', description: 'AI-powered tool for automatic video captioning and translation…', icon: 'zeemo' },
  { name: 'PixVerse', description: 'AI video generator that transforms text and photos into…', icon: 'pixverse' },
  { name: 'InVideo', description: 'Online video editor with 5000+ templates, AI tools, and stock…', icon: 'invideo' },
  { name: 'Adobe Podcast', description: 'AI-powered audio recording and editing platform by Adobe.', icon: 'adobepodcast' },
  { name: 'Otter.ai', description: 'AI meeting assistant for real-time transcription, summaries, and…', icon: 'otter' },
  { name: 'HeyGen', description: 'AI video generation platform for creating engaging business…', icon: 'heygen' }
];

const artTools = [
  { name: 'Adobe', description: 'Adobe provides creative, marketing, and document…', icon: 'adobe' },
  { name: 'Shutterstock', description: 'Shutterstock provides royalty-free stock images, videos, and musi…', icon: 'shutterstock' },
  { name: 'Gamma', description: 'AI-powered platform for creating presentations, webpages, and…', icon: 'gamma' },
  { name: 'Seaart.ai', description: 'Free AI illustration generation platform for various devices.', icon: 'seaart', isFree: true },
  { name: 'Civitai', description: 'Model-sharing hub for AI art generation, specializing in Stabl…', icon: 'civitai' },
  { name: 'Leonardo.Ai', description: 'AI platform for generating production-quality creative asse…', icon: 'leonardo' },
  { name: 'Midjourney', description: 'Midjourney is an AI research lab focused on expanding human…', icon: 'midjourney' },
  { name: 'Picsart', description: 'AI-powered creative platform for photo and video editing and…', icon: 'picsart' },
  { name: 'Pixlr', description: 'Cloud-based photo editing and design tools with AI-power for…', icon: 'pixlr' },
  { name: 'Prezi', description: 'AI-powered software for engaging presentations, videos, and…', icon: 'prezi' },
  { name: 'MiriCanvas', description: 'Easy-to-use online design tool with templates, graphics, and A…', icon: 'miricanvas' },
  { name: '123RF', description: 'A stock content provider with royalty-free images, videos, and…', icon: 'rf123' }
];

export default Index;
