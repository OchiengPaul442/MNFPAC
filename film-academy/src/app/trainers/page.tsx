'use client';

import React from 'react';
import Image from 'next/image';
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

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
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[704px]">
        <Image
          src="/images/trainer-img-2.png"
          alt="Trainers banner"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FDD076]">
          Trainers/Mentors
        </h1>
        <button
          onClick={() => router.push('/home')}
          className="absolute top-4 right-4 p-2 rounded-full hover:scale-110 transition-transform"
        >
          <AiOutlineHome size={40} style={{ color: '#FDD076' }} />
        </button>
      </div>

      {/* Trainers grid */}
      <div className="max-w-[1082px] mx-auto mt-[64px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[43px]">
        {trainers.map((t) => (
          <div key={t.name} className="w-[332px] h-[304px]">
            {/* image */}
            <div className="relative w-full h-[240px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
              <Image
                src={t.photo}
                alt={t.name}
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            {/* text */}
            <div className="h-[64px] bg-gray-900 flex flex-col justify-center px-4">
              <h3 className="text-lg font-medium text-white">{t.name}</h3>
              <p className="text-sm text-gray-300">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back arrow */}
      <button onClick={() => router.back()} className="fixed bottom-6 left-6">
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
