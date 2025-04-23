'use client';

import React from 'react';

export type CenteredTextSectionProps = {
  /** The content to render inside the centered area */
  children: React.ReactNode;
  /**
   * Heights at different breakpoints - uses standard Tailwind classes instead of arbitrary values
   */
  heightClasses?: string;
  /** Any additional classes for the section container */
  className?: string;
};

export const CenteredTextSection: React.FC<CenteredTextSectionProps> = ({
  children,
  heightClasses = 'h-64 sm:h-96 md:h-112 lg:h-128',
  className = '',
}) => (
  <section className={`w-full ${className}`}>
    <div
      className={`
        w-full
        ${heightClasses}
        flex items-center justify-center
        px-4 sm:px-6 md:px-8
      `}
    >
      <div className="w-full max-w-4xl text-center text-white font-inter text-base sm:text-lg md:text-xl leading-relaxed">
        {children}
      </div>
    </div>
  </section>
);
