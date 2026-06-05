'use client';

import React from 'react';

export const MetaBar: React.FC = () => {
  return (
    <div className="border-b border-line-soft font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
      <div className="wrap">
        <div className="flex justify-between items-center h-[38px] gap-6 whitespace-nowrap overflow-hidden">
          <span>EOLIYA · Ingenierie</span>
          <span className="hidden md:inline text-faint">
            48.884°N <span className="text-laiton">·</span> 2.298°E · Paris 17<sup>e</sup>
          </span>
          <span>Est. 2009</span>
        </div>
      </div>
    </div>
  );
};

export default MetaBar;
