'use client';

import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullHeight = false,
}) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-32 px-4 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
