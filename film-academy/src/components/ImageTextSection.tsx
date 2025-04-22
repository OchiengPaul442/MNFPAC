'use client';

import React from 'react';
import Image from 'next/image';

export type ImageTextSectionProps = {
  imageSrc: string;
  alt: string;
  children: React.ReactNode;
  imagePosition?: 'left' | 'right';
};

export const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  alt,
  children,
  imagePosition = 'left',
}) => {
  const isLeft = imagePosition === 'left';

  return (
    <section className="w-full">
      <div
        className={[
          'w-full h-[624px] flex flex-col md:flex-row overflow-hidden',
          isLeft ? 'md:flex-row' : 'md:flex-row-reverse',
        ].join(' ')}
      >
        {/* Image */}
        <div
          className={[
            'relative w-full md:w-[825px] h-full overflow-hidden',
            isLeft
              ? 'rounded-tr-[20px] rounded-br-[20px]'
              : 'rounded-tl-[20px] rounded-bl-[20px]',
          ].join(' ')}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        {/* Text (now flex‑1) */}
        <div className="flex-1 h-full flex items-center justify-center px-6">
          <div className="text-white text-center md:text-left leading-relaxed max-w-prose">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
