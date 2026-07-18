'use client';

import React from 'react';
import { socialLinks, personalInfo } from '@/data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 border-t border-zinc-900">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-muted">
        <span>say hello on</span>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white underline decoration-zinc-700 underline-offset-3"
          >
            {link.name}
          </a>
        ))}
        <span className="ml-auto text-sm text-zinc-700">
          {personalInfo.name.toLowerCase()}. {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
