
import React from 'react';

const ToolNavigation = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 border-b">
        <button className="pb-2 px-1 text-[#7c5fff] border-b-2 border-[#7c5fff] font-semibold">
          Product Information
        </button>
        <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
          Reviews
        </button>
        <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
          Pricing
        </button>
        <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
          Analytics
        </button>
        <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
          Social Listening
        </button>
        <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
          Embed
        </button>
        <button className="pb-2 px-1 text-[#5f5f7a] hover:text-[#7c5fff]">
          Alternatives
        </button>
      </div>
    </div>
  );
};

export default ToolNavigation;
