'use client';

import React from 'react';

export type CenteredTextSectionProps = {
  /** The content to render inside the centered area */
  children: React.ReactNode;
  /**
   * Tailwind classes for the container heights.
   * Default matches your Figma: 300→400→500→576px
   */
  heightClasses?: string;
  /** Any additional classes on the <section> */
  className?: string;
};

export const CenteredTextSection: React.FC<CenteredTextSectionProps> = ({
  children,
  heightClasses = 'h-[300px] sm:h-[400px] md:h-[500px] lg:h-[576px]',
  className = '',
}) => (
  <section className={`w-full ${className}`}>
    <div
      className={`
        w-full
        ${heightClasses}
        flex items-center justify-center
      `}
    >
      <div className="max-w-4xl text-center text-white font-inter text-base sm:text-lg leading-relaxed px-4">
        {children}
      </div>
    </div>
  </section>
);
