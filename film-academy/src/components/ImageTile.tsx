'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

type ImageTileProps = {
  /** Unique identifier for the tile */
  id: string;
  /** Link destination */
  href: string;
  /** Image source path */
  src: string;
  /** Image alt text */
  alt: string;
  /** Position in the grid (used for border radius logic) */
  index: number;
  /** Optional className for additional styling */
  className?: string;
};

/**
 * A responsive image tile component that links to external content
 * with rounded corners based on position and hover effects
 */
export default function ImageTile({
  id,
  href,
  src,
  alt,
  index,
  className = '',
}: ImageTileProps) {
  // This logic works for mobile (1 column), tablet (2 columns) and desktop (3 columns)
  // We'll add data attributes to handle this with CSS media queries
  return (
    <Link
      key={id}
      href={href}
      data-index={index}
      data-position={index % 3}
      className={`
        group
        block relative overflow-hidden
        w-full h-60 sm:h-80 md:h-96 lg:h-112
        transform transition-all duration-300 ease-in-out
        hover:scale-95 hover:shadow-lg
        ${className}
        
        /* Mobile - all tiles get rounded corners */
        rounded-lg
        
        /* Tablet (2-column) - left and right edges */
        sm:odd:rounded-l-lg sm:even:rounded-r-lg sm:odd:rounded-r-none sm:even:rounded-l-none
        
        /* Desktop (3-column) - adjust corners based on position */
        md:rounded-none
        md:[&[data-position="0"]]:rounded-l-lg
        md:[&[data-position="2"]]:rounded-r-lg
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        quality={85}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Overlay with gradient for better icon visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <FiExternalLink
        size={24}
        className="absolute bottom-3 right-3 text-white z-10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  drop-shadow-md"
      />
    </Link>
  );
}
