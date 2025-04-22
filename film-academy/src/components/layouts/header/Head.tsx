'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const HeaderHero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top Section */}
      <section className="relative z-40 flex-1 flex flex-col bg-white/80 backdrop-blur-sm md:rounded-bl-4xl overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/film-crew-img.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Nav */}
        <nav className="relative z-10 bg-white/50 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/MNFPAC_LOGO.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6 text-base md:text-2xl text-gray-700 font-medium">
                <li>
                  <Link href="/classes">Classes</Link>
                </li>
                <li>
                  <Link href="/showcase">Showcase</Link>
                </li>
                <li>
                  <Link href="/trainers">Trainers</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
              <Button asChild className="rounded h-10 md:h-11">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white/90 backdrop-blur-sm py-4">
              <ul className="flex flex-col items-center space-y-4 text-lg text-gray-700 font-medium">
                {['classes', 'showcase', 'trainers', 'about'].map((path) => (
                  <li key={path}>
                    <Link href={`/${path}`} onClick={() => setMenuOpen(false)}>
                      {path.charAt(0).toUpperCase() + path.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-4">
                <Button asChild>
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Logo & Tagline */}
        <div className="relative flex-1 flex flex-col gap-4 items-center justify-center px-2 sm:px-6">
          <div className="w-24 h-24 sm:w-48 sm:h-48 md:w-56 md:h-56 relative">
            <Image
              src="/logos/MNFPAC_SUB_LOGO.PNG"
              alt="Sub Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-xl sm:text-3xl md:text-[40px] font-light text-gray-700 tracking-wide text-center">
            BE TRUE TO YOUR DREAMS
          </p>
        </div>
      </section>

      {/* Flush‑against Previous Section Film Crew Image */}
      <div className="w-full px-4 relative z-10">
        <div className="w-full h-72 sm:h-80 md:h-[50vh] relative bottom-2 rounded-br-4xl overflow-hidden shadow-lg">
          <Image
            src="/images/film-crew-img.png"
            alt="Film crew working"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;
