'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';

const Hero: React.FC = () => {
  return (
    <div className="flex items-start justify-between gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">
          hi, {personalInfo.name.toLowerCase()} here
        </h1>
        <p className="text-sm text-muted mt-3">
          {personalInfo.role.toLowerCase()} · {personalInfo.location?.toLowerCase()}
        </p>
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-xs text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded px-3 py-1.5 transition-colors"
        >
          resume ↗
        </a>
      </div>
      <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-zinc-400 font-semibold text-xl select-none">
        {personalInfo.name[0]}
      </div>
    </div>
  );
};

export default Hero;
