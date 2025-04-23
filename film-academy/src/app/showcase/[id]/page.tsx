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

  if (!person) {
    return <ProfileNotFound />;
  }

  // Pick 3 random other profiles
  const otherProfiles = getRandomOtherProfiles(showcaseData, id, 3);

  return (
    <div className="flex flex-col space-y-32">
      <ProfileBanner person={person} />
      <ProfileBioSection person={person} />
      <BannerWithCaption
        imageSrc={person.actionImageSrc}
        alt={person.actionImageAlt}
      />
      <RelatedProfilesSection otherProfiles={otherProfiles} />
      <Footer />
    </div>
  );
}

// Component for displaying "Profile not found" message
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

// Component for the profile banner
function ProfileBanner({ person }: { person: PersonData }) {
  return (
    <PageBanner
      imageSrc={person.bannerSrc}
      alt={person.bannerAlt}
      heightClasses="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[200px]"
      titleLines={[]} // no title on profile pages
      buttonLabel="Contact Us"
      buttonHref="/contact"
      buttonPosition="bottom"
      contentPosition="left"
      contentAlignY="center" // vertically center contact button
      contentPaddingX="px-8 lg:px-16"
      showHomeIcon
      showGradient
      gradientWidth="w-1/3"
    />
  );
}

// Component for the biographical section with image and text
function ProfileBioSection({ person }: { person: PersonData }) {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
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
      <div className="w-full md:w-1/2 text-white text-lg leading-relaxed">
        {person.bioText}
      </div>
    </section>
  );
}

// Component for the "Related Profiles" section
function RelatedProfilesSection({
  otherProfiles,
}: {
  otherProfiles: PersonData[];
}) {
  return (
    <>
      <div className="text-center text-gray-300">
        You might also be interested in:
      </div>
      <div className="w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProfiles.map((profile, idx) => (
            <RelatedProfileCard
              key={profile.id}
              profile={profile}
              index={idx}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// Component for individual related profile cards
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
      className={`
        block relative overflow-hidden ${corners}
        h-[240px] sm:h-[360px] md:h-[440px] lg:h-[528px]
        transform transition-transform duration-300 ease-in-out hover:scale-95
      `}
    >
      <Image
        src={profile.bannerSrc}
        alt={profile.bannerAlt}
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
}

// Helper function to get random profiles excluding the current one
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
