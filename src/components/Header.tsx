
import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#b8b5ff] to-[#a0c4ff] text-[#22223b] text-center py-3 text-lg font-medium">
      Sponsored by{' '}
      <a 
        href="#" 
        className="bg-[#22223b] text-white rounded-md px-2 py-1 text-base no-underline mx-1"
      >
        seo.ing
      </a>{' '}
      - AI SEO writing tool for generating high-ranking articles quickly.
    </div>
  );
};

export default Header;
