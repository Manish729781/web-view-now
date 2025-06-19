
import React, { useState } from 'react';

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState('Today');

  const filters = [
    { name: 'Today', icon: '📅', active: true },
    { name: 'New', icon: '✚' },
    { name: 'Most Saved', icon: '★' },
    { name: 'Most Used', icon: '⬆' },
    { name: 'Browser Extension', icon: '🌐' },
    { name: 'Apps', icon: '📱' },
    { name: 'Discord of AI', icon: '💬' },
    { name: '@toolify', icon: '🐦', special: true }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-start items-center mt-12 mb-4 pl-[5vw]">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => setActiveFilter(filter.name)}
          className={`
            px-6 py-3 text-lg font-semibold rounded-xl transition-all duration-200 shadow-sm
            ${activeFilter === filter.name || filter.active
              ? 'bg-[#7c5fff] text-white'
              : filter.special
              ? 'bg-[#e3f0ff] text-[#1da1f2] font-bold'
              : 'bg-[#ede9fe] text-[#22223b] hover:bg-[#7c5fff] hover:text-white'
            }
          `}
        >
          <span className="mr-2">{filter.icon}</span>
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
