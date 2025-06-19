
import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="text-center mt-16 px-8">
      <h1 className="text-5xl font-extrabold mb-6 text-[#22223b]">
        Discover The Best AI Websites & Tools
      </h1>
      
      <div className="text-xl mb-8 text-[#5f5f7a]">
        <span className="text-[#7c5fff] font-bold">26104</span> AIs and{' '}
        <span className="text-[#7c5fff] font-bold">459</span> categories in the best AI tools directory. 
        AI tools list & GPTs store are updated daily by ChatGPT.
      </div>
      
      <div className="text-lg mb-8 text-[#22223b] font-semibold">
        Sponsored by{' '}
        <a href="#" className="text-[#7c5fff] font-bold underline">seo.ing</a>.
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex max-w-lg w-full">
          <input
            type="text"
            placeholder="Search by AI, e.g. Video Translation AI Tool"
            className="flex-1 px-5 py-5 text-lg border-none rounded-l-xl outline-none bg-white shadow-md"
          />
          <button className="bg-[#7c5fff] hover:bg-[#5f4bb6] border-none rounded-r-xl px-6 text-white flex items-center justify-center transition-colors">
            <Search size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
