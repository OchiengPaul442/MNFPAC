'use client';

import React from 'react';
import Image from 'next/image';

export type BannerWithCaptionProps = {
  /** Background image URL (from public/) */
  imageSrc: string;
  /** Alt text for the background image */
  alt?: string;
  /** Caption content—can be plain text or JSX; omit for no caption */
  caption?: React.ReactNode;
  /**
   * Tailwind classes for the height of the banner at different breakpoints
   */
  heightClasses?: string;
  /**
   * Tailwind classes for the caption container
   */
  textClasses?: string;
};

export const BannerWithCaption: React.FC<BannerWithCaptionProps> = ({
  imageSrc,
  alt = 'Banner image',
  caption,
  heightClasses = 'h-64 sm:h-96 md:h-112 lg:h-128',
  textClasses = 'absolute bottom-6 sm:bottom-8 inset-x-0 px-4 sm:px-8 text-center text-white text-base sm:text-lg md:text-xl font-medium',
}) => {
  const hasCaption = Boolean(caption);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className={`w-full ${heightClasses} relative`}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          quality={90}
          priority
          sizes="100vw"
        />
      </div>

      {hasCaption && (
        <>
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Caption */}
          <div className={textClasses}>
            <div className="max-w-4xl mx-auto">{caption}</div>
          </div>
        </>
      )}
    </section>
  );
};
