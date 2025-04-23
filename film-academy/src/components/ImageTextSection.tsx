'use client';

import React from 'react';
import Image from 'next/image';

export type ImageTextSectionProps = {
  imageSrc: string;
  alt: string;
  children: React.ReactNode;
  imagePosition?: 'left' | 'right';
  className?: string;
};

export const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  alt,
  children,
  imagePosition = 'left',
  className = '',
}) => {
  const isLeft = imagePosition === 'left';

  return (
    <section className={`w-full ${className}`}>
      <div
        className={`flex flex-col md:flex-row ${
          isLeft ? '' : 'md:flex-row-reverse'
        } overflow-hidden h-auto md:h-[528px]`}
      >
        {/* IMAGE HALF */}
        <div
          className={`relative w-full md:w-1/2 h-64 sm:h-80 md:h-full overflow-hidden ${
            isLeft
              ? 'md:rounded-tr-[20px] md:rounded-br-[20px]' // image on left, round its right corners
              : 'md:rounded-tl-[20px] md:rounded-bl-[20px]' // image on right, round its left corners
          }`}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* TEXT HALF */}
        <div
          className={`w-full md:w-1/2 h-full flex items-center justify-center p-6 ${
            isLeft
              ? 'md:rounded-tl-[20px] md:rounded-bl-[20px]' // text on right, round its left corners
              : 'md:rounded-tr-[20px] md:rounded-br-[20px]' // text on left, round its right corners
          }`}
        >
          <div className="text-white text-lg leading-relaxed text-center md:text-left">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
