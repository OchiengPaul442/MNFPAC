'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiExternalLink } from 'react-icons/fi';
import { PageBanner } from '@/components/PageBanner';
import { BannerWithCaption } from '@/components/BannerWithCaption';
import { Footer } from '@/components/layouts/footer';

// 1) Build your data array by extracting text & image paths from your Figma examples:
type PersonData = {
  id: string;
  bannerSrc: string;
  bannerAlt: string;
  bioImageSrc: string;
  bioImageAlt: string;
  bioText: string;
  actionImageSrc: string;
  actionImageAlt: string;
};

const showcaseData: PersonData[] = [
  {
    id: '1',
    bannerSrc: '/images/showcase/showcase-img-2.png',
    bannerAlt: 'Tania on stage',
    bioImageSrc: '/images/showcase/showcase-img-3.png',
    bioImageAlt: "Tania's portrait",
    bioText:
      "Tania is a very dynamic actress, she has appeared in a number of movies and tv shows—Power of Legacy (2019), Tinka's Story (2022), All for Love (2023) and many more.",
    actionImageSrc: '/images/showcase/showcase-img-4.png',
    actionImageAlt: 'Tania performing',
  },
  {
    id: '2',
    bannerSrc: '/images/showcase/showcase-img-5.png',
    bannerAlt: 'Doreen speaking',
    bioImageSrc: '/images/showcase/showcase-img-6.png',
    bioImageAlt: "Doreen's portrait",
    bioText:
      'Doreen is a Ugandan actress, filmmaker, producer and founder of Amani Production House. She has acted in Kafa Coh (2019) and Tendo and Damalie (TV series), serving as executive producer.',
    actionImageSrc: '/images/showcase/showcase-img-7.png',
    actionImageAlt: 'Doreen on set',
  },
  {
    id: '3',
    bannerSrc: '/images/showcase/showcase-img-8.png',
    bannerAlt: 'Laura Kahunde singing',
    bioImageSrc: '/images/showcase/showcase-img-9.png',
    bioImageAlt: "Laura's portrait",
    bioText:
      "Laura Kahunde is a Ugandan performing artist and Reality TV Show Host (Our Perfect Wedding Uganda). She also starred in Usama Mukwaya's Hello, winning Best Actress at MNFPAC students awards.",
    actionImageSrc: '/images/showcase/showcase-img-10.png',
    actionImageAlt: 'Laura on stage',
  },
  // … repeat for ids 4–9 …
];

export default function ShowcasePage() {
  const { id } = useParams();
  const person = showcaseData.find((p) => p.id === id);

  if (!person) {
    return <div className="p-8 text-center text-white">Profile not found.</div>;
  }

  // pick 3 random others
  const others = showcaseData
    .filter((p) => p.id !== id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="flex flex-col space-y-32">
      {/* 1) Dynamic profile banner */}
      <PageBanner
        imageSrc={person.bannerSrc}
        alt={person.bannerAlt}
        heightClasses="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        titleLines={[]} // no title on profile pages
        buttonLabel="Contact Us"
        buttonHref="/contact"
        buttonPosition="bottom"
        contentPosition="left"
        contentAlignY="center" // vertically center contact button
        contentPaddingX="px-8 lg:px-16"
        showHomeIcon
        showGradient
        gradientWidth="w-1/3"
      />

      {/* 2) Split bio section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Left: portrait */}
        <div className="w-full md:w-1/2 h-[240px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
          <Image
            src={person.bioImageSrc}
            alt={person.bioImageAlt}
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        {/* Right: text */}
        <div className="w-full md:w-1/2 text-white text-lg leading-relaxed">
          {person.bioText}
        </div>
      </section>

      {/* 3) Film workshop promo */}
      <BannerWithCaption
        imageSrc={person.actionImageSrc}
        alt={person.actionImageAlt}
      />

      {/* 5) “You might also be interested in…” */}
      <div className="text-center text-gray-300">
        You might also be interested in:
      </div>

      {/* 6) Related gallery */}
      <div className="w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((o, idx) => {
            const isLeft = idx % 3 === 0;
            const isRight = idx % 3 === 2;
            const corners = isLeft
              ? 'rounded-tl-[20px] rounded-bl-[20px]'
              : isRight
                ? 'rounded-tr-[20px] rounded-br-[20px]'
                : '';

            return (
              <Link
                key={o.id}
                href={`/showcase/${o.id}`}
                className={`
                  block relative overflow-hidden ${corners}
                  h-[240px] sm:h-[360px] md:h-[440px] lg:h-[528px]
                  transform transition-transform duration-300 ease-in-out hover:scale-95
                `}
              >
                <Image
                  src={o.bannerSrc}
                  alt={o.bannerAlt}
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
                <FiExternalLink
                  className="absolute bottom-2 right-2 text-blue-500"
                  size={24}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
