// app/showcase/[id]/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiExternalLink } from 'react-icons/fi';
import { PageBanner } from '@/components/PageBanner';
import { BannerWithCaption } from '@/components/BannerWithCaption';
import { Footer } from '@/components/layouts/footer';
import { showcaseData } from '@/data/showcaseData';
import { PersonData } from '@/data/showcaseData';

export default function ShowcasePage() {
  const { id } = useParams<{ id: string }>();
  const person = showcaseData.find((p) => p.id === id);

  if (!person) return <ProfileNotFound />;

  const otherProfiles = getRandomOtherProfiles(showcaseData, id, 3);

  return (
    <div className="flex flex-col space-y-32">
      <PageBanner
        imageSrc={person.bannerSrc}
        alt={person.bannerAlt}
        titleLines={[]} // hide title
        buttonLabel="Contact Us"
        buttonHref="/contact"
        showHomeIcon
        showGradient
        gradientWidth="w-1/3"
        contentPosition="left"
        contentAlignY="center"
        contentPaddingX="px-8 lg:px-16"
        buttonPosition="bottom"
      />

      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="w-full md:w-1/2 h-[240px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-l-[20px] relative">
          <Image
            src={person.bioImageSrc}
            alt={person.bioImageAlt}
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
        <div className="w-full md:flex-1 flex items-center justify-center">
          <p className="text-white text-lg leading-relaxed text-center">
            {person.bioText}
          </p>
        </div>
      </section>

      <BannerWithCaption
        imageSrc={person.actionImageSrc}
        alt={person.actionImageAlt}
      />

      <RelatedProfilesSection otherProfiles={otherProfiles} />
      <Footer />
    </div>
  );
}

function ProfileNotFound() {
  return (
    <div className="p-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Profile not found</h2>
      <p>The requested showcase profile does not exist.</p>
      <Link
        href="/showcase"
        className="mt-4 inline-block text-blue-400 hover:underline"
      >
        Return to showcase gallery
      </Link>
    </div>
  );
}

function RelatedProfilesSection({
  otherProfiles,
}: {
  otherProfiles: PersonData[];
}) {
  return (
    <>
      <div className="text-center text-gray-300 mb-4">
        You might also be interested in:
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {otherProfiles.map((profile, idx) => (
          <RelatedProfileCard key={profile.id} profile={profile} index={idx} />
        ))}
      </div>
    </>
  );
}

function RelatedProfileCard({
  profile,
  index,
}: {
  profile: PersonData;
  index: number;
}) {
  const isLeft = index % 3 === 0;
  const isRight = index % 3 === 2;
  const corners = isLeft
    ? 'rounded-tl-[20px] rounded-bl-[20px]'
    : isRight
      ? 'rounded-tr-[20px] rounded-br-[20px]'
      : '';

  return (
    <Link
      href={`/showcase/${profile.id}`}
      className={`block overflow-hidden ${corners} transform transition-transform duration-300 ease-in-out hover:scale-95 h-[240px] sm:h-[360px] md:h-[440px] lg:h-[528px] relative`}
    >
      <Image
        src={profile.bannerSrc}
        alt={profile.bannerAlt}
        fill
        className="object-cover"
        quality={100}
        priority
      />
      <div className="absolute bottom-2 right-2 z-10">
        <FiExternalLink size={24} />
      </div>
    </Link>
  );
}

function getRandomOtherProfiles(
  data: PersonData[],
  currentId: string,
  count: number,
): PersonData[] {
  return data
    .filter((p) => p.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}
