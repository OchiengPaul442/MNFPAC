// components/PageBanner.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

export type PageBannerProps = {
  imageSrc: string;
  alt?: string;
  heightClasses?: string;
  titleLines: string[];
  buttonLabel?: string;
  buttonHref?: string;
  showHomeIcon?: boolean;
  contentPosition?: 'left' | 'center' | 'right';
  contentAlignY?: 'top' | 'center' | 'bottom';
  contentPaddingX?: string;
  buttonPosition?: 'underTitle' | 'bottom';
  buttonOffsetX?: string;
  /** NEW: show a gradient from black → transparent, fading in from the left */
  showGradient?: boolean;
  /** NEW: how wide the gradient overlay is (e.g. 'w-1/3', 'w-1/2') */
  gradientWidth?: string;
};

export const PageBanner: React.FC<PageBannerProps> = ({
  imageSrc,
  alt = '',
  heightClasses = 'h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]',
  titleLines,
  buttonLabel,
  buttonHref,
  showHomeIcon = true,
  contentPosition = 'left',
  contentAlignY = 'top',
  contentPaddingX = 'px-6 lg:px-16',
  buttonPosition = 'underTitle',
  buttonOffsetX = 'left-6 lg:left-16',
  showGradient = false,
  gradientWidth = 'w-1/2',
}) => {
  const justifyMap = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right',
  } as const;
  const alignYMap = {
    top: 'items-start pt-16',
    center: 'items-center',
    bottom: 'items-end pb-16',
  } as const;

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

      {/* Global dark overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Optional left‑side gradient */}
      {showGradient && (
        <div
          className={`absolute inset-y-0 left-0 ${gradientWidth} bg-gradient-to-r from-black/80 to-transparent pointer-events-none`}
        />
      )}

      {/* Constrained content wrapper */}
      <div className="absolute inset-0">
        <div className="relative max-w-7xl mx-auto w-full h-full">
          {/* Home icon */}
          {showHomeIcon && (
            <Link
              href="/home"
              className="absolute top-4 right-4 p-2 text-[#FDD076] hover:scale-110 transition-transform z-10"
            >
              <AiOutlineHome size={40} />
            </Link>
          )}

          {/* Title & under‑title button */}
          <div
            className={`
              absolute inset-0 flex flex-col
              ${justifyMap[contentPosition]}
              ${alignYMap[contentAlignY]}
              ${contentPaddingX}
            `}
          >
            <div className="space-y-2">
              {titleLines.map((line, i) => (
                <h1
                  key={i}
                  className="
                    text-[#FDD076] font-bold leading-tight
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  "
                >
                  {line}
                </h1>
              ))}
            </div>

            {buttonPosition === 'underTitle' && buttonLabel && buttonHref && (
              <Link
                href={'#'}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                  });
                }}
                className="mt-4 inline-block z-10"
              >
                <span className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  {buttonLabel}
                </span>
              </Link>
            )}
          </div>

          {/* Bottom‑positioned button */}
          {buttonPosition === 'bottom' && buttonLabel && buttonHref && (
            <Link
              href={'#'}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth',
                });
              }}
              className={`absolute bottom-8 ${buttonOffsetX} inline-block z-10`}
            >
              <span className="bg-[#0000FF] text-white px-4 py-2 rounded-lg hover:bg-[#0000FF]/70 transition">
                {buttonLabel}
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
