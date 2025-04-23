'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { name: 'Classes', path: '/classes' },
  { name: 'Showcase', path: '/showcase' },
  { name: 'Trainers', path: '/trainers' },
];

const HeaderHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="w-full flex flex-col">
      <section className="relative z-40 flex flex-col bg-white/80 backdrop-blur-md overflow-hidden h-[30vh] sm:h-[40vh] rounded-bl-4xl">
        <div className="absolute inset-0">
          <Image
            src="/images/home-img-2.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>

        <nav className="relative z-10 bg-white/50 py-3 md:py-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/MNFPAC_LOGO.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <ul className="flex space-x-4 lg:space-x-6 text-base lg:text-xl text-gray-700 font-medium">
                {navigationLinks.map((link) => (
                  <li
                    key={link.path}
                    className="hover:text-gray-900 transition-colors"
                  >
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="rounded h-10 md:h-11 px-4 md:px-6 shadow-md hover:shadow-lg transition-all"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            <button
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md"
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <X className="text-black" size={24} />
              ) : (
                <Menu className="text-black" size={24} />
              )}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center px-6 animate-fadeIn">
            <button
              onClick={closeMenu}
              className="absolute top-5 right-5 text-gray-800 hover:text-black transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <ul className="space-y-8 text-center text-2xl text-gray-800 font-semibold">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={closeMenu}
                    className="hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button asChild className="px-6 py-3 text-lg">
                <Link href="/contact" onClick={closeMenu}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}

        <div className="relative flex flex-col items-center justify-center flex-1 px-4 sm:px-6 py-6 md:py-12">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 relative">
            <Image
              src="/logos/MNFPAC_SUB_LOGO.png"
              alt="MNFPAC Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 6rem, (max-width: 768px) 8rem, 12rem"
            />
          </div>
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide text-center max-w-2xl">
            BE TRUE TO YOUR DREAMS
          </p>
        </div>
      </section>

      <div className="w-full px-4 relative z-10 mt-auto">
        <div className="w-full h-48 sm:h-56 md:h-[40vh] lg:h-[50vh] relative -mt-2 overflow-hidden shadow-lg rounded-br-4xl">
          <Image
            src="/images/film-crew-img.png"
            alt="Film crew working"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
