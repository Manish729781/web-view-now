
import { ChromeGrid } from "@/components/ui/chrome-grid";

const ChromeHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ChromeGrid Background */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid />
      </div>
      
      {/* Hero Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-widest text-white whitespace-nowrap">
            AI Tools Hub
          </h1>
          <p className="text-sm md:text-base text-white/70 font-mono tracking-wide max-w-2xl mx-auto">
            Experience the future of AI tools with an interactive metal grid that responds to your touch.
          </p>
        </div>
        
        {/* Interactive Button */}
        <div className="mt-12 pointer-events-auto">
          <button className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <span className="flex items-center gap-2">
              Explore AI Tools
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChromeHero;
