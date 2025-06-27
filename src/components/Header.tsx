
import { ChromeGrid } from "@/components/ui/chrome-grid";

const Header = () => {
  return (
    <header className="relative min-h-screen w-full overflow-hidden">
      {/* ChromeGrid Background */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid />
      </div>
      
      {/* Header Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-widest text-white whitespace-nowrap text-center">
          AI Tools Directory
        </h1>
        <p className="text-sm md:text-base text-white/70 font-mono tracking-wide text-center max-w-2xl">
          Discover the most powerful AI tools to transform your workflow
        </p>
        
        {/* Call to Action */}
        <div className="mt-8 pointer-events-auto">
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
            Explore Tools
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
