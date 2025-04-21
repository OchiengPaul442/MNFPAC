import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <Header />
      <section className="p-4">
        <div className="relative w-full bg-[#221E19] rounded-tl-[50px] rounded-tr-[50px] shadow-[0_4px_8px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Inner box: full‑width on mobile, fixed 1132px at md+, offset via margin */}
          <div className="w-full md:w-[1132px] h-[391px] mt-[136px] mx-auto flex flex-col items-center py-4 gap-[173px]">
            {/* Heading */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium text-center">
              Successes is just around the corner.
            </h2>

            {/* Icons row */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-y-8 md:gap-x-[173px]">
              {/* Music */}
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Image
                    src="/svgs/music-icon.svg"
                    alt="Music"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-white text-lg">Music</span>
              </div>

              {/* Film */}
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Image
                    src="/svgs/film-icon.svg"
                    alt="Film"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-white text-lg">Film</span>
              </div>

              {/* Drama */}
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                  <Image
                    src="/svgs/drama-icon.svg"
                    alt="Drama"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-white text-lg">Drama</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden p-4">
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[574px]">
          <Image
            src="/images/graduation-banner.png"
            alt="Graduation ceremony"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="w-full p-4">
        <div
          className="
            w-full md:w-[1127px] h-auto md:h-[254px]
            bg-[#221E19]
            rounded-bl-[50px] rounded-br-[50px]
            mx-auto
            grid grid-rows-[auto_1fr]
          "
        >
          {/* 1) CALL NOW shape, top-left */}
          <div className="relative w-[180px] h-[54px] sm:w-[240px] sm:h-[72px] md:w-[320px] md:h-[96px] justify-self-start self-start">
            <Image
              src="/svgs/call-banner.svg"
              alt="Decorative flourish"
              fill
              className="object-contain"
              priority
            />
            <span
              className="
                absolute inset-0 flex items-center justify-center
                text-lg sm:text-xl md:text-2xl
                text-red-500 font-semibold
              "
            >
              CALL NOW!
            </span>
          </div>

          {/* 2) Body copy, centered in the remaining space */}
          <div className="flex items-center justify-center p-4">
            <p className="text-white text-base leading-relaxed text-center max-w-[90%]">
              Everyone has a story to tell, a song to sing, and a talent to
              share. You have a dream, an unseen dream, waiting to be caught up
              with. Trust in us, develop your skills, and let us help you
              unleash your full{' '}
              <span className="text-yellow-500 font-semibold">
                POTENTIAL...
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4">
        {/* Outer panel */}
        <div
          className="
          w-full bg-[#221E19]
          rounded-[50px]
          shadow-[0_4px_8px_rgba(0,0,0,0.25)]
          overflow-hidden
          py-8
        "
        >
          {/* Inner box */}
          <div
            className="
            w-full md:w-[982px] h-auto md:h-[394px]
            mx-auto mt-[67.5px]
            flex flex-col items-center gap-[48px]
          "
          >
            {/* Icon (288×288 at md+) */}
            <div
              className="
              relative
              w-[180px] h-[180px]
              sm:w-[240px] sm:h-[240px]
              md:w-[288px] md:h-[288px]
            "
            >
              <Image
                src="/svgs/award-icon.svg"
                alt="Vision emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Text */}
            <div className="text-center px-4">
              <h3 className="text-white text-base sm:text-lg font-bold uppercase">
                VISION:
              </h3>
              <p className="text-white text-sm sm:text-base max-w-[90%] mx-auto leading-snug">
                To be a Centre of professional training, discovery and research
                in the Performing Arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-8">
        <div
          className="
        relative
        w-full
        h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[528px]
        rounded-[50px]
        overflow-hidden
        shadow-[0_4px_8px_rgba(0,0,0,0.25)]
        mx-auto
      "
        >
          <Image
            src="/images/film-cut-img.png"
            alt="Film clapperboard"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
