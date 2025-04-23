'use client';

import React from 'react';
import { PageBanner } from '@/components/PageBanner';
import { CenteredTextSection } from '@/components/CenteredTextSection';
import { Footer } from '@/components/layouts/footer';
import ImageTile from '@/components/ImageTile';

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
    <div className="flex flex-col">
      {/* Banner */}
      <PageBanner
        imageSrc="/images/showcase/showcase-img-1.png"
        alt="Alumni & Achievement"
        heightClasses="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        titleLines={['ALUMNI &', 'ACHIEVEMENT']}
        buttonLabel="Contact Us"
        buttonHref="/contact"
        buttonPosition="bottom"
        contentPosition="left"
        contentAlignY="top"
        contentPaddingX="px-8 lg:px-16"
        showGradient
        gradientWidth="w-1/3"
      />

      {/* Centered text - improved for better responsiveness */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <CenteredTextSection heightClasses="min-h-[120px]">
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-center leading-relaxed">
            We&apos;ve skilled over a thousand creatives, many of whom are now
            successful professionals and contributing to the growth of the
            industry. We are immensely proud of our alumni who are not only
            thriving in their careers but also using their creative works to
            positively impact society.
          </p>
        </CenteredTextSection>
      </div>

      {/* Gallery - improved for better responsiveness and centering */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <Gallery galleryData={galleryData} />
      </div>

      <Footer />
    </div>
  );
}

function Gallery({ galleryData }: { galleryData: GalleryItem[] }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
        {galleryData.map((item, idx) => (
          <div key={item.id} className="w-full">
            <ImageTile
              id={item.id}
              href={`/showcase/${item.id}`}
              src={item.src}
              alt={item.alt}
              index={idx}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
