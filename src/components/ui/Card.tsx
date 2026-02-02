'use client';

import React, { forwardRef, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'glow';
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = true, children, className = '', ...props }, ref) => {
    const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300';

    const variants = {
      default: 'bg-card border border-border',
      glass: 'glass-card',
      glow: 'bg-card border border-border glow',
    };

    const hoverStyles = hover
      ? 'hover:border-white/20 hover:bg-card-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20'
      : '';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
