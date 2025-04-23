'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

type ImageTileProps = {
  id: string;
  href: string;
  src: string;
  alt: string;
  index: number;
};

/**
 * A reusable tile component that displays an image inside a link,
 * applies rounded corners on the left/right edges in a 3-column grid,
 * and adds a hover-scale effect plus an external-link icon.
 */
export default function ImageTile({
  id,
  href,
  src,
  alt,
  index,
}: ImageTileProps) {
  const isLeftMost = index % 3 === 0;
  const isRightMost = index % 3 === 2;
  const borderClass = isLeftMost
    ? 'rounded-tl-[20px] rounded-bl-[20px]'
    : isRightMost
      ? 'rounded-tr-[20px] rounded-br-[20px]'
      : '';

  return (
    <Link
      key={id}
      href={href}
      className={`
        block relative overflow-hidden ${borderClass}
        w-full h-[240px] sm:h-[360px] md:h-[440px] lg:h-[528px]
        transform transition-transform duration-300 ease-in-out
        hover:scale-95
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        quality={100}
        priority
      />
      <FiExternalLink
        size={24}
        className="absolute bottom-2 right-2 text-blue-500 z-10"
      />
    </Link>
  );
}
