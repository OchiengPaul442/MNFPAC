'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ImageTextSection } from '@/components/ImageTextSection';
import { CenteredTextSection } from '@/components/CenteredTextSection';
import { BannerWithCaption } from '@/components/BannerWithCaption';
import { Footer } from '@/components/layouts/footer';
import Link from 'next/link';

const galleryImages = [
  '/images/classes/classes-img-2.png',
  '/images/classes/classes-img-3.png',
  '/images/classes/classes-img-4.png',
  '/images/classes/classes-img-5.png',
];

export default function ClassesPage() {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col space-y-32">
      {/* Banner */}
      <div className="relative w-full h-[705px]">
        <Image
          src="/images/classes/classes-img.png"
          alt="Classes banner"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Home icon */}
        <button
          onClick={() => router.push('/home')}
          className="absolute top-4 right-4 p-2 text-[#FDD076] hover:scale-110 transition"
        >
          <AiOutlineHome size={40} />
        </button>

        {/* Left‑side text & Contact button */}
        <div className="absolute inset-0 flex flex-col justify-center items-start max-w-[1360px] mx-auto px-6 lg:px-16 space-y-6">
          <div
            className="text-[#FDD076] font-bold leading-tight
                          text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]"
          >
            <div>DRAMA</div>
            <div>FILM</div>
            <div>MUSIC</div>
            <div>DANCE</div>
          </div>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      {/* Stage Production Section */}
      <section
        className="
        max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-0
        flex flex-col lg:flex-row items-center justify-between
        gap-[56px]
      "
      >
        {/* Left block: fixed at 710×543 on lg, full‑width on mobile */}
        <div
          className="
          flex flex-col items-center gap-[56px]
          w-full lg:w-[710px] lg:h-[543px]
        "
        >
          {/* Icon */}
          <Image
            src="/svgs/classes-svg-icon.svg"
            alt="Theatre masks icon"
            width={320}
            height={320}
            priority
          />

          {/* Text */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Stage Production:
            </h2>
            <p className="mt-2 text-gray-300">
              Dive headfirst into the world of theatre! We learn acting,
              directing, and playwriting, all while developing our creativity
              and confidence. Plus, we get the thrill of performing for live
              audiences – it's an unforgettable experience!
            </p>
          </div>
        </div>

        {/* Right block: responsive up to 388×588, bottom corners rounded */}
        <div
          className="
          relative
          w-full md:w-[388px]
          h-[300px] sm:h-[400px] md:h-[450px] lg:h-[588px]
          overflow-hidden
          rounded-bl-[20px] rounded-br-[20px]
        "
        >
          <Image
            src="/images/classes/classes-img-1.png"
            alt="Live stage production"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
      </section>

      <div className="w-full flex justify-center">
        <div
          onMouseLeave={() => setActiveIndex(0)}
          className="flex gap-4 w-full max-w-7xl h-[640px] md:h-[480px] sm:h-[320px] overflow-hidden"
        >
          {galleryImages.map((src, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`
                relative
                flex-shrink-0
                h-full
                overflow-hidden
                transition-all duration-300 ease-in-out
                ${isActive ? 'flex-[3]' : 'flex-[1]'}
                min-w-0
                rounded-bl-[20px] rounded-br-[20px]
              `}
              >
                <Image
                  src={src}
                  alt={`Production ${idx + 1}`}
                  fill
                  quality={100}
                  priority
                  className={`
                  object-cover
                  transition-transform duration-300 ease-in-out object-center
                  ${isActive ? 'scale-110' : 'scale-100 '}
                `}
                />
              </div>
            );
          })}
        </div>
      </div>

      <ImageTextSection
        imageSrc="/images/classes/classes-img-6.png"
        alt="Friday Night Lights"
      >
        <p className="text-center max-w-[325px]">
          Many of our students participate in{' '}
          <strong>Friday Night Lights</strong>, a program by{' '}
          <strong>Ndagire Mariam Media</strong>. This gives them a fantastic
          opportunity to showcase their acting and drama skills to a real
          audience! It’s a great way to gain experience and maybe even land a
          spot in a bigger production.
        </p>
      </ImageTextSection>

      <section className="w-full">
        {/* Banner */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[400px] 2xl:h-[600px]">
          <Image
            src="/images/large-music-img.png"
            alt="Music production illustration"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        {/* Text block */}
        <div className="max-w-[1360px] mx-auto px-4 py-4 sm:py-6 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            Music Production:
          </h2>
          <p className="text-center text-white max-w-3xl leading-relaxed text-sm sm:text-base md:text-lg">
            Unleash your inner musician! You’ll learn to write and produce your
            OWN song, pushing your creativity to the limit. Then, you’ll get to
            perform it LIVE at the NEXT UGANDA MUSIC ICON – a chance to shine on
            stage!
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[608px] overflow-hidden">
          <Image
            src="/images/classes/classes-img-7.png"
            alt="Music Icon Night banner"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
      </section>

      <ImageTextSection
        imageSrc="/images/classes/classes-img-8.png"
        alt="The Next Music Icon stage"
        imagePosition="left"
      >
        <div className="space-y-4 text-center max-w-[350px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            The Next Music Icon
          </h2>
          <p>
            isn’t just about winning – it’s a chance to <strong>GROW!</strong>{' '}
            You’ll learn tons, work super hard, and get amazing coaching.
          </p>
          <p>
            <strong>Stage Ready:</strong> You’ll perform live in front of judges
            and a real audience, just like the pros! This builds your confidence
            and gets you ready for the music world.
          </p>
        </div>
      </ImageTextSection>

      <ImageTextSection
        imageSrc="/images/classes/classes-img-9.png"
        alt="Vocal Powerhouse training"
        imagePosition="right"
      >
        <p className="space-y-2 text-center max-w-[325px]">
          <strong>Vocal Powerhouse:</strong> You’ll get expert help to improve
          your singing voice and stage presence.
        </p>
      </ImageTextSection>

      <ImageTextSection
        imageSrc="/images/classes/classes-img-10.png"
        alt="Band Skills training"
        imagePosition="left"
      >
        <div className="space-y-2 text-center max-w-[380px]">
          <p>
            <strong>Band Skills:</strong> You’ll learn to work with a live band,
            a crucial skill for any musician.
          </p>
          <p>
            It’s a challenging but rewarding experience that will help you
            become the best musician you can be!
          </p>
        </div>
      </ImageTextSection>

      <BannerWithCaption
        imageSrc="/images/classes/classes-img-11.png"
        alt="Winner on stage celebration"
        caption="The Winner is announced and the stage goes wild."
        heightClasses="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[592px]"
        textClasses="
        absolute bottom-8 inset-x-0
        px-4 sm:px-8
        text-center text-white
        text-lg sm:text-xl md:text-2xl lg:text-3xl
        font-semibold
      "
      />

      <section className="relative w-full sm:h-[250px] md:h-[300px] lg:h-[350px]">
        <div className="relative max-w-[1440px] h-full mx-auto">
          {/* Centered text */}
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
            DANCING
          </h2>

          {/* Icon on the right */}
          <div className="absolute inset-y-0 right-0 pr-4 md:pr-8 flex items-center">
            <Image
              src="/images/dance-img.png"
              alt="Dancing Icon"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <BannerWithCaption
        imageSrc="/images/classes/classes-img-12.png"
        alt="Ugandan Dance Workshop"
        caption={
          <>
            Experience the vibrant world of Ugandan dance! We offer a diverse
            range of classes, including contemporary and traditional styles.
            Contemporary Dance: Explore expressive and innovative movement,
            drawing inspiration from modern dance techniques.
          </>
        }
      />

      <section className="relative w-full overflow-hidden">
        {/* Full‑width dancer image */}
        <div className="relative w-full h-[560px] overflow-hidden">
          <Image
            src="/images/classes/classes-img-13.png"
            alt="Traditional Ugandan Dancers"
            fill
            className="object-cover"
            quality={100}
            priority
          />

          {/* Right‑side text block, centered */}
          <div className="absolute inset-y-0 right-0 w-[440px] flex items-center justify-center px-4">
            <p className="font-inter font-light text-[24px] text-center text-white">
              Traditional Ugandan Dances: Immerse yourself in the rich cultural
              heritage of Uganda through dynamic and captivating traditional
              dances. Dancing is a beloved pastime in Uganda, evident in the
              numerous music videos and stage shows. It's a fantastic way to
              stay fit, express yourself, and connect with the vibrant culture
              of Uganda. Don't miss this opportunity to discover the joy of
              dance.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="flex flex-col items-center px-4 gap-6">
          {/* Icon */}
          <div className="relative w-[158px] h-[300px]">
            <Image
              src="/images/film-img.png"
              alt="Film workshop icon"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>

          {/* Text */}
          <p className="font-inter text-[24px] text-center text-white max-w-[695px]">
            Lights, camera, action! Our annual documentary and short film
            workshops provide students with hands-on experience in all stages of
            filmmaking. From brainstorming ideas to shooting and editing,
            students bring their cinematic visions to life. It's an exciting and
            rewarding experience.
          </p>
        </div>
      </section>

      <BannerWithCaption
        imageSrc="/images/classes/classes-img-14.png"
        alt="Film workshop group"
      />

      <CenteredTextSection>
        At the end of the annual training the principal awards the best students
        with 9 accolades—from Best Actors to Best Writers and Best Technical
        Crew Member.
      </CenteredTextSection>

      <BannerWithCaption
        imageSrc="/images/classes/classes-img-15.png"
        alt="Film workshop group"
      />

      <CenteredTextSection>
        TANUULU Season 1 winning movie BLOOY SUNSET went on to win best student
        film Award the 1st Edition of the Uganda Film Festival and the director
        Hakim Bigaruka won an air ticket by Swan Air to Nollywood and
        Shs.5,000,000/=
      </CenteredTextSection>

      <BannerWithCaption
        imageSrc="/images/classes/classes-img-16.png"
        alt="Film workshop group"
      />

      <Footer />
    </div>
  );
}
