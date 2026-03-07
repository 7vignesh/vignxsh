'use client';

import React, { useEffect, useState } from 'react';
import { personalInfo } from '@/data/portfolio';

const Hero: React.FC = () => {
  const [age, setAge] = useState<string>('');

  useEffect(() => {
    const birth = new Date(personalInfo.birthDate ?? '2003-01-01');
    const tick = () => {
      const ms = Date.now() - birth.getTime();
      const years = ms / (365.25 * 24 * 60 * 60 * 1000);
      setAge(years.toFixed(9));
    };
    tick();
    const id = setInterval(tick, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-start justify-between gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">
          hi, {personalInfo.name.toLowerCase()} here
        </h1>
        <p className="font-mono text-sm text-muted mt-1">
          been here for {age} years
        </p>
        <p className="text-sm text-muted mt-3">
          {personalInfo.role.toLowerCase()} · {personalInfo.location?.toLowerCase()}
        </p>
      </div>
      <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-zinc-400 font-semibold text-xl select-none">
        {personalInfo.name[0]}
      </div>
    </div>
  );
};

export default Hero;
