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
      <CategorySection
        title="Social Media"
        categories={[
          'All', 'AI Social Media Post Generator', 'AI Social Media', 'AI Youtube Summary',
          'AI Twitter', 'AI Influencer', 'AI Instagram'
        ]}
        tools={socialMediaTools}
      />
      <CategorySection
        title="AI Detection & Anti-Detection"
        categories={[
          'All', 'AI Content Detector', 'AI Detector', 'Humanizer AI',
          'Undetectable AI', 'AI Bypasser', 'AI Plagiarism Checker'
        ]}
        tools={aiDetectionTools}
      />
      <CategorySection
        title="Coding & Development"
        categories={[
          'All', 'AI API', 'AI Developer Tools', 'No-Code&Low-Code',
          'AI Code Generator', 'AI Code Assistant', 'AI App Builder'
        ]}
        tools={codingTools}
      />
      <CategorySection
        title="Video & Animation"
        categories={[
          'All', 'AI Video Generator', 'Text to Video', 'AI Video Editor',
          'AI Short Video Generator', 'Image to Video', 'AI Animation Generator'
        ]}
        tools={videoTools}
      />
      <CategorySection
        title="Daily Life"
        categories={[
          'All', 'AI News', 'AI Shopping Assistant', 'AI Travel',
          'AI Portrait Generator', 'AI Trip Planner', 'AI Fitness'
        ]}
        tools={dailyLifeTools}
      />
      <CategorySection
        title="Legal & Finance"
        categories={[
          'All', 'AI For Finance', 'AI Investing', 'AI Legal Assistant',
          'AI Real Estate', 'AI Accounting', 'AI Stock Trading'
        ]}
        tools={legalFinanceTools}
      />
      <CategorySection
        title="Business Management"
        categories={[
          'All', 'AI Customer Service', 'AI Workflow', 'AI Recruiting',
          'AI Interview Assistant', 'AI CRM', 'AI Project Management'
        ]}
        tools={businessManagementTools}
      />
      <CategorySection
        title="Marketing & Advertising"
        categories={[
          'All', 'AI Marketing', 'AI Lead Generation', 'AI SEO Tools',
          'AI Sales Assistant', 'AI Sales', 'AI Email Generator'
        ]}
        tools={marketingTools}
      />
      <CategorySection
        title="Health & Wellness"
        categories={[
          'All', 'AI Healthcare', 'AI Mental Health', 'AI Therapist',
          'AI Medical Diagnosis', 'AI Symptom Checker', 'AI Dermatology'
        ]}
        tools={healthWellnessTools}
      />
      <CategorySection
        title="Business Research"
        categories={[
          'All', 'AI Consulting', 'AI Crypto', 'Blockchain',
          'AI Business Ideas Generator', 'Web3', 'NFTs'
        ]}
        tools={businessResearchTools}
      />
      <CategorySection
        title="Education & Translation"
        categories={[
          'All', 'AI Translate', 'AI Answer', 'AI Coaching',
          'AI Knowledge Base', 'AI Knowledge Management', 'AI Homework Helper'
        ]}
        tools={educationTranslationTools}
      />
      <CategorySection
        title="Chatbots & Virtual Companions"
        categories={[
          'All', 'AI Chatbot', 'AI Character', 'AI Roleplay',
          'AI Girlfriend', 'AI Dating Assistant', 'AI Boyfriend'
        ]}
        tools={chatbotsTools}
      />
      <CategorySection
        title="Office & Productivity"
        categories={[
          'All', 'AI Assistant', 'AI Productivity Tools', 'AI Agent',
          'AI Copilot', 'AI Search Engine', 'AI Report Generator'
        ]}
        tools={officeProductivityTools}
      />
      <CategorySection
        title="Research & Data Analysis"
        categories={[
          'All', 'AI For Data Analytics', 'AI Research Tool', 'AI Predictions',
          'AI Data Mining', 'AI Research Papers', 'AI Sports Betting'
        ]}
        tools={researchDataTools}
      />
      <CategorySection
        title="Interior & Architectural Design"
        categories={[
          'All', 'AI Interior Design', 'AI Room Planner', 'AI Landscape Generator',
          'AI Kitchen Design', 'AI Floor Plan Generator', 'AI Backyard Design'
        ]}
        tools={interiorDesignTools}
      />
      
      {/* Resources Section */}
      <div className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#22223b]">Top AI Tools</h3>
              <ul className="space-y-2 text-sm text-[#5f5f7a]">
                <li>13 Reasons to Switch from Snapchat to Text Messaging</li>
                <li>7 Powerful Speech to Text Apps to Boost Productivity</li>
                <li>10 Best Speech to Text Tools for Effortless Transcription</li>
                <li>13 Free Tools to Easily Transcribe Audio to Text</li>
                <li>15 Surprising Ways Google's Speech-to-Text Boosts Productivity</li>
                <li>7 Best Free Online Audio to Text Transcription Tools</li>
                <li>9 Tips to Transcribe Speech to Text Faster and Better</li>
                <li>13 Best Speech to Text Software for Windows 10 in 2023</li>
                <li>7 Tips for Choosing the Best Transcriber for Audio to Text</li>
                <li>11 Reasons Why Dragon Speech-to-Text Apps are Game-Changers</li>
                <li>6 Secrets to Enhance Your Speech to Text Transcription</li>
                <li>6 Brilliant Ways to Boost Productivity with Talk-to-Text on Your MacBook</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#22223b]">More Tools</h3>
              <ul className="space-y-2 text-sm text-[#5f5f7a]">
                <li>transcription audio en texte</li>
                <li>online audio transcription</li>
                <li>free audio file transcription</li>
                <li>free ai audio transcription</li>
                <li>audio transcription service</li>
                <li>audio transcription online free</li>
                <li>audio transcription free online</li>
                <li>audio to transcription software</li>
                <li>audio and transcript</li>
                <li>ai audio transcription free</li>
                <li>voice recording to text converter</li>
                <li>translate voice recording to text</li>
                <li>record voice to text</li>
                <li>audio recording to text converter</li>
                <li>voice recording and transcription</li>
                <li>chatgpt voice to text</li>
                <li>gmail voice to text</li>
                <li>speech to text reader</li>
                <li>speech to text ai free</li>
                <li>speech to talk</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#22223b]">Recommend</h3>
              <ul className="space-y-2 text-sm text-[#5f5f7a]">
                <li>Shrink and speed up: How to make your AI models smaller and faster</li>
                <li>Real-Time Price Intelligence: AI Strategies for Dynamic E-Commerce</li>
                <li>Cutting-Edge Image Tools for Business Growth</li>
                <li>7 Best AI Video Generators to Try in 2025</li>
                <li>Why Your Home Improvement Business Needs a Modern Website and a Digital Strategy</li>
                <li>How to launch a startup in 1 day using AI tools: step-by-step instructions</li>
                <li>AI vs Human Touch: How Modern Astrology Tools Are Evolving in the Digital Age</li>
                <li>How AI Agents Are Silently Redefining Marketing Success [Secret Revealed: Best AI SEO Agents]</li>
                <li>AI and Coding: Navigating the Future of Software Development</li>
                <li>Master the Art of SEO and Drive Organic Traffic to Your Website</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#22223b]">Read more</h3>
              <ul className="space-y-2 text-sm text-[#5f5f7a] mb-6">
                <li>Navigating Love and Connection: Exploring Themes of Belonging</li>
                <li>Creating Professional AI Headshots: A Comprehensive Guide</li>
                <li>Maximize Team Meetings: Unleashing Microsoft Teams Copilot</li>
                <li>ISRO Free Courses: AI, Remote Sensing, and More in 2024</li>
                <li>QuillBot AI: The Ultimate Writing Assistant for 2025</li>
                <li>Romantic Getaway: Finding Love Under the Moonlight</li>
                <li>AI and Legal Ethics: Navigating the Ethical Landscape</li>
                <li>AI and Robotics: The Next Global Arms Race?</li>
                <li>Pismo AI Review: Boost Your Writing Productivity in 2025</li>
                <li>Maximizing Luck: 500 Exclusive Egg Hatching Strategy</li>
              </ul>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-[#22223b]">About</h3>
                  <ul className="space-y-1 text-sm text-[#5f5f7a]">
                    <li>Fulfillment Policy</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3 text-[#22223b]">Contact Us</h3>
                  <ul className="space-y-1 text-sm text-[#5f5f7a]">
                    <li>business@toolify.ai</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3 text-[#22223b]">Resource</h3>
                  <ul className="space-y-1 text-sm text-[#5f5f7a]">
                    <li>Blog</li>
                    <li>AI News</li>
                    <li>GPTS</li>
                    <li>Stable Video Diffusion</li>
                    <li>Gemini AI</li>
                    <li>Hardware</li>
                    <li>Top AI Tools</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3 text-[#22223b]">Browse by Alphabet</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-[#5f5f7a]">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Other'].map((letter) => (
                      <span key={letter} className="cursor-pointer hover:text-[#7c5fff]">{letter}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3 text-[#22223b]">Top 1000 AI Tools Directory</h3>
                  <div className="flex flex-wrap gap-2">
                    {['06/19', '06/18', '06/17', '06/16', '06/15', '06/14', '06/13', '06/12', '06/11'].map((date) => (
                      <span key={date} className="bg-[#f3f1ff] px-3 py-1 rounded-lg text-sm text-[#22223b]">{date}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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

// New category tools
const socialMediaTools = [
  { name: 'Adobe', description: 'Adobe provides creative, marketing, and document…', icon: 'adobe' },
  { name: 'Beacons', description: 'All-in-one platform for content creators with link-in-bio, store,…', icon: 'beacons' },
  { name: 'PixVerse', description: 'AI video generator that transforms text and photos into…', icon: 'pixverse' },
  { name: 'Uhmegle', description: 'Uhmegle is an Omegle alternative for chatting with…', icon: 'uhmegle', isFree: true },
  { name: 'Sider', description: 'AI assistant integrating ChatGPT, Claude, and Gemini for reading,…', icon: 'sider' },
  { name: 'Microsoft Designer', description: 'AI-powered graphic design app for creating social media posts,…', icon: 'msdesigner', isFree: true },
  { name: 'Transkriptor', description: 'AI transcription service for audio and video to text conversion wit…', icon: 'transkriptor' },
  { name: 'TurboLearn AI', description: 'TurboLearn AI generates notes, flashcards, and quizzes from…', icon: 'turbolearn' },
  { name: 'FlexClip', description: 'Free online video editor with AI tools and rich resources.', icon: 'flexclip' },
  { name: 'Supawork AI', description: 'Free AI professional headshot generator with 300+ styles and…', icon: 'supawork', isFree: true },
  { name: 'GitMind', description: 'AI-powered platform for mind mapping, brainstorming, note-…', icon: 'gitmind' },
  { name: 'Chat & Ask AI', description: 'Advanced AI chatbot with GPT-4o, offering various AI tools and…', icon: 'chatask' }
];

const aiDetectionTools = [
  { name: 'QuillBot', description: 'AI-powered writing tool for paraphrasing, grammar checkin…', icon: 'quillbot' },
  { name: 'ZeroGPT', description: 'ZeroGPT is an AI content detector and offers various writing tools.', icon: 'zerogpt' },
  { name: 'GPTZero', description: 'AI detector for identifying text generated by AI models like…', icon: 'gptzero' },
  { name: 'Scribbr', description: 'Scribbr offers proofreading, plagiarism checking, citation…', icon: 'scribbr' },
  { name: 'Uhmegle', description: 'Uhmegle is an Omegle alternative for chatting with…', icon: 'uhmegle', isFree: true },
  { name: 'Undetectable AI', description: 'Transforms AI content into undetectable, human-like writing.', icon: 'undetectable' },
  { name: 'Aura', description: 'All-in-one digital safety platform for identity theft and online thre…', icon: 'aura' },
  { name: 'Branded', description: 'Branded connects businesses with research participants,…', icon: 'branded' },
  { name: 'hCaptcha', description: 'AI security platform stopping bots and human abuse with a privac…', icon: 'hcaptcha', isFree: true },
  { name: 'AISEO', description: 'AI-driven SEO and content creation tool for generating…', icon: 'aiseo' },
  { name: 'AISEO', description: 'AI-powered tools for content creation, SEO, and engagement.', icon: 'aiseo' },
  { name: 'StealthWriter', description: 'StealthWriter humanizes AI-generated content to bypass AI…', icon: 'stealthwriter' }
];

const codingTools = [
  { name: 'ChatGPT', description: 'A free-to-use AI system for conversations, insights, and tas…', icon: 'chatgpt' },
  { name: 'OpenAI', description: 'AI research and deployment company focused on building s…', icon: 'openai' },
  { name: 'DeepSeek', description: 'DeepSeek is an AI company providing foundation models an…', icon: 'deepseek' },
  { name: 'DeepL', description: 'Accurate machine translation and AI-powered writing assistance f…', icon: 'deepl' },
  { name: 'Salesforce Platform', description: 'A unified platform for data, AI, CRM, development, and security.', icon: 'salesforce' },
  { name: 'Claude', description: 'Claude is an AI assistant from Anthropic that helps with tasks …', icon: 'claude' },
  { name: 'Google AI Studio', description: 'Platform for building with Google\'s Gemini AI models.', icon: 'googleai', isFree: true },
  { name: 'Lovable', description: 'Lovable: Build software products from idea to app using a chat…', icon: 'lovable' },
  { name: 'Miro', description: 'Online collaborative whiteboard platform for team collaboration…', icon: 'miro', isFree: true },
  { name: 'Hugging Face', description: 'AI community platform for open-source ML models, datasets, and…', icon: 'huggingface' },
  { name: 'ElevenLabs', description: 'AI audio platform offering text-to-speech, voice cloning, and…', icon: 'elevenlabs' },
  { name: 'ZeroGPT', description: 'ZeroGPT is an AI content detector and offers various writing tools.', icon: 'zerogpt' }
];

const videoTools = [
  { name: 'OpenAI', description: 'AI research and deployment company focused on building s…', icon: 'openai' },
  { name: 'Sora', description: 'Sora is an AI model by OpenAI that generates videos from text…', icon: 'sora', isFree: true },
  { name: 'CapCut', description: 'CapCut is an AI-driven all-in-one video editor and graphic design…', icon: 'capcut' },
  { name: 'Kling AI', description: 'AI creative platform for generating images and videos.', icon: 'klingai' },
  { name: 'Cutout.Pro', description: 'AI-powered visual design platform for photo and video editing and…', icon: 'cutoutpro' },
  { name: 'Picsart', description: 'AI-powered creative platform for photo and video editing and…', icon: 'picsart' },
  { name: 'Pixlr', description: 'Cloud-based photo editing and design tools with AI-power for…', icon: 'pixlr' },
  { name: 'VEED.IO', description: 'Online video editor with AI tools for creating professional videos…', icon: 'veed' },
  { name: 'Wondershare', description: 'Software solutions for creativity, productivity, and utility, including…', icon: 'wondershare' },
  { name: 'Zeemo', description: 'AI-powered tool for automatic video captioning and translation…', icon: 'zeemo' },
  { name: 'PixVerse', description: 'AI video generator that transforms text and photos into…', icon: 'pixverse' },
  { name: 'Candy AI', description: 'AI companion platform for chat, video, voice, and character…', icon: 'candyai' }
];

const dailyLifeTools = [
  { name: 'Thomson Reuters', description: 'Thomson Reuters: Technology solutions and expertise for…', icon: 'thomson' },
  { name: 'Wondershare', description: 'Software solutions for creativity, productivity, and utility, including…', icon: 'wondershare' },
  { name: 'Genspark', description: 'Genspark offers Sparkpages with an AI copilot, travel guides, and…', icon: 'genspark' },
  { name: 'SpoiledChild', description: 'AI-powered wellness platform for personalized anti-aging hair and…', icon: 'spoiledchild' },
  { name: 'Wanderboat', description: 'AI-powered travel platform for personalized trip planning and…', icon: 'wanderboat' },
  { name: 'Gorgias', description: 'Conversational AI platform for ecommerce, automating support…', icon: 'gorgias' },
  { name: 'HitPaw FotorPea', description: 'AI photo enhancer for quality improvement, unblurring, and…', icon: 'hitpaw' },
  { name: 'Wondershare Virbo', description: 'AI video generator with avatars, voices, and translation for…', icon: 'virbo' },
  { name: 'Chat & Ask AI', description: 'Advanced AI chatbot with GPT-4o, offering various AI tools and…', icon: 'chatask' },
  { name: 'DreamFace', description: 'AI-powered photo animating and editing app for content…', icon: 'dreamface' },
  { name: 'Design Bundles', description: 'Online marketplace for design resources like fonts, graphics,…', icon: 'designbundles' },
  { name: 'Artbreeder', description: 'AI-powered collaborative tool for creating and manipulating…', icon: 'artbreeder' }
];

const legalFinanceTools = [
  { name: 'Thomson Reuters', description: 'Thomson Reuters: Technology solutions and expertise for…', icon: 'thomson' },
  { name: 'Abacus.AI', description: 'AI platform for building and embedding AI solutions into…', icon: 'abacus' },
  { name: 'MathGPT', description: 'AI math solver and homework helper with video explanations…', icon: 'mathgpt' },
  { name: 'Casetext', description: 'Legal AI company providing AI-powered legal research and…', icon: 'casetext' },
  { name: 'Onfido', description: 'AI-powered digital identity solution for trust, onboarding, and…', icon: 'onfido' },
  { name: 'Law Insider', description: 'AI-powered contract drafting, review, and redlining with a larg…', icon: 'lawinsider' },
  { name: 'MacroMicro', description: 'Economic and financial data platform with dynamic charts and…', icon: 'macromicro' },
  { name: 'GVA NDA Check', description: 'AI-powered NDA check service for risk visualization and revisio…', icon: 'gva', isFree: true },
  { name: 'FinChat.io', description: 'All-in-one investment research platform with AI, data, and…', icon: 'finchat' },
  { name: 'StockStory', description: 'StockStory provides earnings reports and financial news.', icon: 'stockstory', isFree: true },
  { name: 'AlInvest', description: 'AI-powered stock analysis platform with real-time data and…', icon: 'alinvest' },
  { name: 'Filevine', description: 'Legal case management software with AI solutions for law firms a…', icon: 'filevine' }
];

const businessManagementTools = [
  { name: 'Notion', description: 'All-in-one workspace for notes, docs, projects, and AI-powered…', icon: 'notion' },
  { name: 'Salesforce Platform', description: 'A unified platform for data, AI, CRM, development, and security.', icon: 'salesforce' },
  { name: 'Salesforce CN', description: 'Cloud-based CRM solution for businesses in China, hosted on…', icon: 'salesforcecn' },
  { name: 'Jotform AI Agents', description: 'Platform to create AI agents for customer service across multip…', icon: 'jotform', isFree: true },
  { name: 'HubSpot', description: 'Customer platform with marketing, sales, service, and…', icon: 'hubspot' },
  { name: 'Miro', description: 'Online collaborative whiteboard platform for team collaboration…', icon: 'miro', isFree: true },
  { name: 'Airtable', description: 'Airtable is a no-code app-building platform with AI for data…', icon: 'airtable' },
  { name: 'Anthropic', description: 'AI safety and research company building reliable, interpretable,…', icon: 'anthropic' },
  { name: 'Zapier', description: 'No-code automation platform connecting 8,000+ apps for…', icon: 'zapier' },
  { name: 'tawk.to Hire Chat …', description: '24/7 professionally trained chat agents for $1/hour.', icon: 'tawk' },
  { name: 'Windsurf', description: 'AI-powered code editor for developers and enterprises,…', icon: 'windsurf' },
  { name: 'Klaviyo', description: 'Intelligent marketing automation for personalized customer…', icon: 'klaviyo' }
];

const marketingTools = [
  { name: 'ChatGPT', description: 'A free-to-use AI system for conversations, insights, and tas…', icon: 'chatgpt' },
  { name: 'Adobe', description: 'Adobe provides creative, marketing, and document…', icon: 'adobe' },
  { name: 'Salesforce CN', description: 'Cloud-based CRM solution for businesses in China, hosted on…', icon: 'salesforcecn' },
  { name: 'HubSpot', description: 'Customer platform with marketing, sales, service, and…', icon: 'hubspot' },
  { name: 'Miro', description: 'Online collaborative whiteboard platform for team collaboration…', icon: 'miro', isFree: true },
  { name: 'ZeroGPT', description: 'ZeroGPT is an AI content detector and offers various writing tools.', icon: 'zerogpt' },
  { name: 'Beacons', description: 'All-in-one platform for content creators with link-in-bio, store,…', icon: 'beacons' },
  { name: 'Mailchimp', description: 'Marketing automation and email platform with AI-powered tools t…', icon: 'mailchimp', isFree: true },
  { name: 'Otter.ai', description: 'AI meeting assistant for real-time transcription, summaries, and…', icon: 'otter' },
  { name: 'Klaviyo', description: 'Intelligent marketing automation for personalized customer…', icon: 'klaviyo' },
  { name: 'Framer', description: 'A no-code web design and publishing tool with AI and CMS…', icon: 'framer' },
  { name: 'VidIQ', description: 'VidIQ is a SaaS platform that helps YouTube creators grow th…', icon: 'vidiq' }
];

const healthWellnessTools = [
  { name: 'MediSphere', description: 'AI-driven healthcare management platform for doctors and staff.', icon: 'medisphere' },
  { name: 'SpoiledChild', description: 'AI-powered wellness platform for personalized anti-aging hair an…', icon: 'spoiledchild' },
  { name: 'Brain.fm', description: 'Science-backed functional music for focus, relaxation, and sleep.', icon: 'brainfm' },
  { name: 'Pi', description: 'Pi is a personal AI designed to be a supportive and smart…', icon: 'pi', isFree: true },
  { name: 'clickworker', description: 'Crowdsourcing platform for AI training data and data…', icon: 'clickworker' },
  { name: 'Freed', description: 'Freed is an AI medical scribe for instant clinical documentation a…', icon: 'freed' },
  { name: 'Replika', description: 'An AI companion providing empathetic friendship and…', icon: 'replika' },
  { name: 'Lecturio', description: 'An all-in-one health education platform for medical and nursin…', icon: 'lecturio' },
  { name: 'Heidi Health', description: 'AI medical scribe for clinicians, transcribing visits and generati…', icon: 'heidi', isFree: true },
  { name: 'Heidi Health', description: 'AI medical scribe for transcribing visits and generating notes.', icon: 'heidi' },
  { name: 'Carepatron', description: 'All-in-one EHR and practice management software with AI…', icon: 'carepatron' },
  { name: 'PlantIn', description: 'Plant identification, care tips, and problem solving for plants.', icon: 'plantin' }
];

const businessResearchTools = [
  { name: 'HEROZ', description: 'HEROZ is an AI company providing AI solutions across…', icon: 'heroz' },
  { name: 'Pionex', description: 'Crypto exchange with in-built trading bots for automated…', icon: 'pionex' },
  { name: 'SHIFT AI', description: 'SHIFT AI accelerates AI adoption in Japan through information,…', icon: 'shiftai' },
  { name: 'Hotpot.ai', description: 'Hotpot.ai is an AI-powered graphic design tool for creating…', icon: 'hotpot' },
  { name: 'staryai', description: 'AI art generator app that transforms text prompts into…', icon: 'staryai' },
  { name: 'WebsCrypto', description: 'WebsCrypto provides crypto news, market analysis, opinion…', icon: 'webscrypto' },
  { name: 'Rosebud AI', description: 'Rosebud AI: Create 3D games and worlds with vibe coding, no…', icon: 'rosebud' },
  { name: 'MyShell', description: 'MyShell is a platform for creating and interacting with AI-powere…', icon: 'myshell' },
  { name: 'LuxAlgo', description: 'LuxAlgo provides AI trading indicators and tools for stocks,…', icon: 'luxalgo' },
  { name: 'Composer', description: 'Automated trading platform with AI, no-code strategy builder, an…', icon: 'composer', isFree: true },
  { name: '200+ ChatGPT Me…', description: 'AI prompt library and tools to optimize business tasks with AI…', icon: 'chatgptmega' },
  { name: '200+ ChatGPT Me…', description: 'AI prompt library and tools to boost productivity for…', icon: 'chatgptmega' }
];

const educationTranslationTools = [
  { name: 'DeepSeek', description: 'DeepSeek is an AI company providing foundation models an…', icon: 'deepseek' },
  { name: 'DeepL', description: 'Accurate machine translation and AI-powered writing assistance f…', icon: 'deepl' },
  { name: 'Notion', description: 'All-in-one workspace for notes, docs, projects, and AI-powered…', icon: 'notion' },
  { name: 'Perplexity AI', description: 'An AI search engine using large language models for informatio…', icon: 'perplexity' },
  { name: 'ZeroGPT', description: 'ZeroGPT is an AI content detector and offers various writing tools.', icon: 'zerogpt' },
  { name: 'Airtable', description: 'Airtable is a no-code app-building platform with AI for data…', icon: 'airtable' },
  { name: 'Poe', description: 'Poe is an AI chat platform powered by Quora, offering…', icon: 'poe' },
  { name: 'TurboScribe', description: 'AI transcription service converting audio and video to text in 98+…', icon: 'turboscribe' },
  { name: 'Monica', description: 'Chrome extension AI assistant for chatting, copywriting,…', icon: 'monica' },
  { name: 'Gauth', description: 'AI homework helper providing free online help with AI calculat…', icon: 'gauth' },
  { name: 'Scribbr', description: 'Scribbr offers proofreading, plagiarism checking, citation…', icon: 'scribbr' },
  { name: 'Anthropic', description: 'AI safety and research company building reliable, interpretable,…', icon: 'anthropic' }
];

const chatbotsTools = [
  { name: 'ChatGPT', description: 'A free-to-use AI system for conversations, insights, and tas…', icon: 'chatgpt' },
  { name: 'OpenAI', description: 'AI research and deployment company focused on building s…', icon: 'openai' },
  { name: 'Google Gemini', description: "Google's personal, proactive, and powerful AI assistant.", icon: 'gemini' },
  { name: 'DeepSeek', description: 'DeepSeek is an AI company providing foundation models an…', icon: 'deepseek' },
  { name: 'Grok', description: 'Grok is a free AI assistant by xAI for truth, objectivity, real-time…', icon: 'grok', isFree: true },
  { name: 'Janitor AI', description: 'Janitor AI allows users to create NSFW fictional chatbot…', icon: 'janitorai' },
  { name: 'Claude', description: 'Claude is an AI assistant from Anthropic that helps with tasks …', icon: 'claude' },
  { name: 'SPICYCHAT.AI', description: 'Chatbot platform with AI characters, allowing users to ch…', icon: 'spicychat' },
  { name: 'Jotform AI Agents', description: 'Platform to create AI agents for customer service across multip…', icon: 'jotform', isFree: true },
  { name: 'LOVESCAPE', description: 'Platform for creating and interacting with AI girlfriends…', icon: 'lovescape' },
  { name: 'CrushOn.AI', description: 'Platform for unfiltered, unbounded emotional and NSFW AI charac…', icon: 'crushon' },
  { name: 'ZeroGPT', description: 'ZeroGPT is an AI content detector and offers various writing tools.', icon: 'zerogpt' }
];

const officeProductivityTools = [
  { name: 'ChatGPT', description: 'A free-to-use AI system for conversations, insights, and tas…', icon: 'chatgpt' },
  { name: 'Google Gemini', description: "Google's personal, proactive, and powerful AI assistant.", icon: 'gemini' },
  { name: 'DeepSeek', description: 'DeepSeek is an AI company providing foundation models an…', icon: 'deepseek' },
  { name: 'Grok', description: 'Grok is a free AI assistant by xAI for truth, objectivity, real-time…', icon: 'grok', isFree: true },
  { name: 'Notion', description: 'All-in-one workspace for notes, docs, projects, and AI-powered…', icon: 'notion' },
  { name: 'Salesforce Platform', description: 'A unified platform for data, AI, CRM, development, and security.', icon: 'salesforce' },
  { name: 'Perplexity AI', description: 'An AI search engine using large language models for informatio…', icon: 'perplexity' },
  { name: 'Claude', description: 'Claude is an AI assistant from Anthropic that helps with tasks …', icon: 'claude' },
  { name: 'Studocu', description: 'Studocu is a platform for students to share and access study…', icon: 'studocu' },
  { name: 'Jotform AI Agents', description: 'Platform to create AI agents for customer service across multip…', icon: 'jotform', isFree: true },
  { name: 'HubSpot', description: 'Customer platform with marketing, sales, service, and…', icon: 'hubspot' },
  { name: 'Airtable', description: 'Airtable is a no-code app-building platform with AI for data…', icon: 'airtable' }
];

const researchDataTools = [
  { name: 'Sora', description: 'Sora is an AI model by OpenAI that generates videos from text…', icon: 'sora', isFree: true },
  { name: 'Salesforce Platform', description: 'A unified platform for data, AI, CRM, development, and security.', icon: 'salesforce' },
  { name: 'Perplexity AI', description: 'An AI search engine using large language models for informatio…', icon: 'perplexity' },
  { name: 'Airtable', description: 'Airtable is a no-code app-building platform with AI for data…', icon: 'airtable' },
  { name: 'Beacons', description: 'All-in-one platform for content creators with link-in-bio, store,…', icon: 'beacons' },
  { name: 'Thomson Reuters', description: 'Thomson Reuters: Technology solutions and expertise for…', icon: 'thomson' },
  { name: 'Prolific', description: 'A platform connecting researchers with verified participants for hig…', icon: 'prolific' },
  { name: 'LINER AI', description: 'AI-powered search assistant and digital highlighter for reliable…', icon: 'liner' },
  { name: '文心一言', description: '文心一言 is an AI assistant for chatting, answering questions,…', icon: 'wenxin' },
  { name: 'Runway', description: 'Runway is an AI research company providing tools for…', icon: 'runway' },
  { name: 'Google AI for Dev…', description: 'Resources and tools for building with Google\'s AI models.', icon: 'googleai' },
  { name: 'WolframAlpha', description: 'Computational knowledge engine for expert answers across vario…', icon: 'wolfram' }
];

const interiorDesignTools = [
  { name: 'Planner 5D', description: 'A 3D home design tool using AI to convert 2D plans into 3D…', icon: 'planner5d', isFree: true },
  { name: 'Coohom', description: 'All-in-one 3D design software for interior, furniture, and home…', icon: 'coohom' },
  { name: 'Easy-Peasy.AI', description: 'All-in-one AI platform for content, images, audio, and transcription.', icon: 'easypeasy' },
  { name: 'Artbreeder', description: 'AI-powered collaborative tool for creating and manipulating…', icon: 'artbreeder' },
  { name: 'staryai', description: 'AI art generator app that transforms text prompts into…', icon: 'staryai' },
  { name: 'Pincel', description: 'AI-powered online image editing app for simple and accessible…', icon: 'pincel' },
  { name: 'mnml.ai', description: 'AI rendering platform for architects and interior designers…', icon: 'mnmlai' },
  { name: 'RoomGPT', description: 'AI-powered tool to redesign rooms from a photo.', icon: 'roomgpt' },
  { name: 'Photoleap', description: 'Creative photo editing app with AI tools for quick edits and pro…', icon: 'photoleap' },
  { name: 'Collov Virtual Sta…', description: 'AI-powered virtual staging for real estate and home renova…', icon: 'collovvirtual', isFree: true },
  { name: 'Collov AI', description: 'AI-powered virtual staging and design platform for real estate a…', icon: 'collovai' },
  { name: 'Maket', description: 'Generative AI software for instant architectural plans and design…', icon: 'maket' }
];

export default Index;
