// app/alumni/page.tsx (or wherever this page lives)
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { PageBanner } from '@/components/PageBanner';
import { CenteredTextSection } from '@/components/CenteredTextSection';
import { Footer } from '@/components/layouts/footer';

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

const galleryData: GalleryItem[] = [
  { id: '1', src: '/images/showcase/showcase-img-2.png', alt: 'Person 1' },
  { id: '2', src: '/images/showcase/showcase-img-3.png', alt: 'Person 2' },
  { id: '3', src: '/images/showcase/showcase-img-4.png', alt: 'Person 3' },
  { id: '4', src: '/images/showcase/showcase-img-5.png', alt: 'Person 4' },
  { id: '5', src: '/images/showcase/showcase-img-6.png', alt: 'Person 5' },
  { id: '6', src: '/images/showcase/showcase-img-7.png', alt: 'Person 6' },
  { id: '7', src: '/images/showcase/showcase-img-8.png', alt: 'Person 7' },
  { id: '8', src: '/images/showcase/showcase-img-9.png', alt: 'Person 8' },
  { id: '9', src: '/images/showcase/showcase-img-10.png', alt: 'Person 9' },
];

export default function AlumniPage() {
  return (
    <div className="flex flex-col space-y-32">
      {/* Banner */}
      <PageBanner
        imageSrc="/images/showcase/showcase-img-1.png"
        alt="Alumni & Achievement"
        heightClasses="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        titleLines={['ALUMNI &', 'ACHIEVEMENT']}
        buttonLabel="Contact Us"
        buttonHref="/contact"
        buttonPosition="bottom"
        contentPosition="left"
        contentAlignY="top"
        contentPaddingX="px-8 lg:px-16"
        showGradient
        gradientWidth="w-1/3"
      />

      {/* Centered text */}
      <CenteredTextSection heightClasses="h-[160px]">
        We&apos;ve skilled over a thousand creatives, many of whom are now
        successful professionals and contributing to the growth of the industry.
        We are immensely proud of our alumni who are not only thriving in their
        careers but also using their creative works to positively impact
        society.
      </CenteredTextSection>

      {/* Gallery */}
      <div className="w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {galleryData.map((item, idx) => {
            const isLeftMost = idx % 3 === 0;
            const isRightMost = idx % 3 === 2;
            const borderClass = isLeftMost
              ? 'rounded-tl-[20px] rounded-bl-[20px]'
              : isRightMost
                ? 'rounded-tr-[20px] rounded-br-[20px]'
                : '';

            return (
              <Link
                key={item.id}
                href={`/showcase/${item.id}`}
                className={`
                block relative overflow-hidden ${borderClass}
                w-full h-[240px] sm:h-[360px] md:h-[440px] lg:h-[528px]
                transform transition-transform duration-300 ease-in-out
                hover:scale-95
              `}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
                <FiExternalLink
                  size={24}
                  className="absolute bottom-2 right-2 text-blue-500 z-10"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
