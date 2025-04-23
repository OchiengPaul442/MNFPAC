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

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top Section with Hero */}
      <section className="relative z-40 flex-1 flex flex-col bg-white/80 backdrop-blur-md md:rounded-bl-4xl overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/film-crew-img.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        {/* Navigation Bar */}
        <nav className="relative z-10 bg-white/50 py-3 md:py-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/MNFPAC_LOGO.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </Link>

            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
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

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg py-4 absolute w-full z-20 shadow-lg animate-fadeIn">
              <ul className="flex flex-col items-center space-y-5 text-lg text-gray-700 font-medium">
                {navigationLinks.map((link) => (
                  <li key={link.path} className="w-full text-center">
                    <Link
                      href={link.path}
                      onClick={closeMenu}
                      className="block py-2 px-4 hover:bg-gray-100 transition-colors rounded-md"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="w-full text-center">
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors rounded-md"
                  >
                    About
                  </Link>
                </li>
              </ul>
              <div className="flex justify-center mt-5 pb-2">
                <Button asChild className="w-3/4 max-w-xs">
                  <Link href="/contact" onClick={closeMenu}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative flex-1 flex flex-col gap-5 items-center justify-center px-4 sm:px-6 py-8 md:py-12">
          {/* Logo */}
          <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 relative">
            <Image
              src="/logos/MNFPAC_SUB_LOGO.PNG"
              alt="MNFPAC Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 7rem, (max-width: 768px) 10rem, 14rem"
            />
          </div>
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide text-center max-w-2xl">
            BE TRUE TO YOUR DREAMS
          </p>
        </div>
      </section>

      {/* Film Crew Image */}
      <div className="w-full px-4 relative z-10 mt-auto">
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 relative -mt-2 rounded-t-none rounded-br-4xl overflow-hidden shadow-lg">
          <Image
            src="/images/film-crew-img.png"
            alt="Film crew working"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;
