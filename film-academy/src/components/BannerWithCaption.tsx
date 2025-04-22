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
   * Tailwind classes for the height of the banner.
   * Default matches your Figma: 300→400→500→592px
   */
  heightClasses?: string;
  /**
   * Tailwind classes for the caption container.
   * Default positions it bottom‑center with nice padding & font‑medium.
   */
  textClasses?: string;
};

export const BannerWithCaption: React.FC<BannerWithCaptionProps> = ({
  imageSrc,
  alt = '',
  caption,
  heightClasses = 'h-[300px] sm:h-[400px] md:h-[500px] lg:h-[592px]',
  textClasses = 'absolute bottom-8 inset-x-0 px-4 sm:px-8 text-center text-white text-lg font-medium',
}) => {
  const hasCaption = Boolean(caption);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className={`w-full ${heightClasses}`}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {hasCaption && (
        <>
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Caption */}
          <div className={textClasses}>{caption}</div>
        </>
      )}
    </section>
  );
};
