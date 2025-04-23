import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';

import Image from 'next/image';

const HomePage = () => {
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

      <section className="p-4">
        <div className="w-full bg-[#221E19] rounded-tr-[50px] overflow-hidden">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left image: fixed width */}
            <div className="relative w-full md:w-[440px] h-[240px] sm:h-[300px] md:h-[512px] overflow-hidden">
              <Image
                src="/images/happy-img-1.png"
                alt="Choir group"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side: flex-grow */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Top right: spans full remaining width */}
              <div className="relative w-full h-[240px] overflow-hidden">
                <Image
                  src="/images/kids-img-1.png"
                  alt="School kids"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom row: two equal flex items */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-full h-[256px] overflow-hidden">
                  <Image
                    src="/images/group-img-1.png"
                    alt="Puppet workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-[256px] overflow-hidden">
                  <Image
                    src="/images/interview-img-1.png"
                    alt="On‑stage interview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4">
        <div className="w-full bg-[#221E19] overflow-hidden">
          {/* center a 1360px‑wide container inside the full‑width section */}
          <div className="max-w-[1360px] mx-auto h-[655px] pt-[97px] pb-[97px] px-[233px]">
            {/* your fixed 894×461 inner box */}
            <div
              className="
            relative
            w-[894px] h-[461px]
            mx-auto
            flex flex-col justify-between items-center
          "
            >
              {/* icon row (1018×300 shifted left & down per Figma) */}
              <div
                className="
              flex
              w-[1018px] h-[300px]
              ml-[-63px] mt-[16px]
              items-center justify-center
              gap-[82px]
            "
              >
                {/* active TV card */}
                <div
                  className="
                w-[201px] h-[300px]
                rounded-[20px]
                bg-[#221E19]
                border border-[#FDD07640]
                shadow-[0px_4px_18px_0px_rgba(0,0,0,0.5)]
                flex flex-col items-center justify-center
              "
                >
                  <Image
                    src="/svgs/tv-icon.svg"
                    alt="TV"
                    width={100}
                    height={100}
                  />
                  <span className="mt-4 text-white">Entertain</span>
                </div>

                {/* secondary icons */}
                <div className="w-[120px] h-[120px] flex items-center justify-center">
                  <Image
                    src="/svgs/learn-icon.svg"
                    alt="Education"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="w-[120px] h-[120px] flex items-center justify-center">
                  <Image
                    src="/svgs/speak-icon.svg"
                    alt="Discovery"
                    width={120}
                    height={120}
                  />
                </div>
              </div>

              {/* mission text */}
              <div className="text-center text-white">
                <div className="font-bold">MISSION:</div>
                <p>
                  To advance and promote the entertainment industry through
                  skilling committed, trustworthy, honest, transparent and
                  disciplined performing artists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4">
        <div className="w-full">
          {/* Hero image */}
          <div className="relative w-full h-[778px] mx-auto overflow-hidden">
            <Image
              src="/images/graduation-img.png"
              alt="Graduation group"
              fill
              className="object-cover"
            />
          </div>

          {/* About block */}
          <div className="bg-[#221E19] rounded-b-[50px] px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12">
            <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              ABOUT
            </h2>
            <p className="max-w-3xl mx-auto text-center text-white leading-relaxed">
              The Centre was founded in 2010 by Mariam Ndagire to train Ugandans
              mainly focusing on youth in Writing, Acting, Directing,
              Cinematography, Editing, Sound recording and Vocal training with
              an aim of impacting change in the Entertainment industry and the
              Ugandan Society.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
