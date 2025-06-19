
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[5vw] py-6 bg-[#f3f1ff]">
      <div className="flex items-center gap-3">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="20" stroke="#7c5fff" strokeWidth="4" fill="#ede9fe"/>
          <circle cx="22" cy="22" r="10" stroke="#7c5fff" strokeWidth="3" fill="#fff"/>
          <circle cx="22" cy="22" r="4" fill="#7c5fff"/>
        </svg>
        <span className="text-3xl font-bold text-[#22223b] tracking-wide">Toolify.ai</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-lg">
        <a href="#" className="text-[#22223b] font-medium hover:text-[#7c5fff] transition-colors">Products</a>
        <a href="#" className="text-[#22223b] font-medium hover:text-[#7c5fff] transition-colors">Category</a>
        <a href="#" className="text-[#22223b] font-medium hover:text-[#7c5fff] transition-colors">Ranking</a>
        <a href="#" className="text-[#22223b] font-medium hover:text-[#7c5fff] transition-colors">AI Models</a>
        <a href="#" className="text-[#22223b] font-medium hover:text-[#7c5fff] transition-colors">Social Listening</a>
        <a href="#" className="text-[#22223b] font-medium hover:text-[#7c5fff] transition-colors">Submit & Advertise</a>
        <a href="#" className="text-[#7c5fff] font-bold relative">
          AI SEO Tool <span className="bg-[#ff4b4b] text-white rounded-md px-2 py-1 text-sm ml-1">New</span>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="text-[#22223b] font-medium">Login</a>
        <span className="text-xl">🌐</span>
        <span className="text-[#22223b]">EN ▼</span>
      </div>
    </nav>
  );
};

export default Navbar;
