'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PageBanner } from '@/components/PageBanner';

const trainers = [
  {
    name: 'Mariam Ndagire',
    role: 'Principal - Acting/Writing/Directing trainer',
    photo: '/images/trainer-1.png',
  },
  {
    name: 'Juliet Kukiriza',
    role: 'Acting/Writing/Directing trainer',
    photo: '/images/trainer-2.png',
  },
  {
    name: 'Hamuza Mubiru',
    role: 'Technical Crew trainer',
    photo: '/images/trainer-3.png',
  },
  {
    name: 'Suuna Peter',
    role: 'Technical Crew Trainer HOD',
    photo: '/images/trainer-4.png',
  },
  {
    name: 'Benita Nabacwa',
    role: "Principal's assistant",
    photo: '/images/trainer-5.png',
  },
  {
    name: 'Nakamya Annet',
    role: 'Administrator',
    photo: '/images/trainer-6.png',
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <div className="w-full pb-16">
      {/* Banner */}
      <PageBanner
        imageSrc="/images/trainer-img-2.png"
        alt="Trainers and Mentors"
        heightClasses="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        titleLines={['Trainers/Mentors']}
        showHomeIcon={true}
        contentPosition="center"
        contentAlignY="center"
        contentPaddingX="px-6 lg:px-0"
        buttonPosition="underTitle"
      />

      {/* Trainers grid - Improved responsiveness and centering */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="w-full max-w-sm flex flex-col shadow-lg rounded-t-2xl overflow-hidden"
            >
              {/* Image container with consistent aspect ratio */}
              <div className="relative w-full pt-[75%]">
                <Image
                  src={trainer.photo}
                  alt={trainer.name}
                  fill
                  className="object-cover absolute inset-0 rounded-t-2xl"
                  quality={100}
                />
              </div>

              {/* Text content */}
              <div className="bg-gray-900 p-4 flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-medium text-white">
                  {trainer.name}
                </h3>
                <p className="text-sm text-gray-300">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back arrow - improved for mobile */}
      <button
        onClick={() => router.back()}
        className="fixed bottom-6 left-6 z-10 bg-gray-800 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all"
        aria-label="Go back"
      >
        <Image
          src="/svgs/back-icon.svg"
          alt="Back"
          width={40}
          height={40}
          quality={100}
        />
      </button>
    </div>
  );
}
