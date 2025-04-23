import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import Image from 'next/image';
import { ReactNode } from 'react';

// Type definitions for component props
interface SectionProps {
  children: ReactNode;
  className?: string;
}

interface DarkPanelProps {
  children: ReactNode;
  className?: string;
  roundedTop?: boolean;
  roundedBottom?: boolean;
  roundedAll?: boolean;
}

interface IconWithLabelProps {
  iconSrc: string;
  label: string;
  bgColor: string;
}

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

// Reusable components for better structure and reduced repetition
const Section = ({ children, className = '' }: SectionProps) => (
  <section className={`w-full py-8 px-4 ${className}`}>{children}</section>
);

const DarkPanel = ({
  children,
  className = '',
  roundedTop = false,
  roundedBottom = false,
  roundedAll = false,
}: DarkPanelProps) => {
  const getRoundedClasses = (): string => {
    if (roundedAll) return 'rounded-[50px]';
    if (roundedTop && roundedBottom) return 'rounded-[50px]';
    if (roundedTop) return 'rounded-tl-[50px] rounded-tr-[50px]';
    if (roundedBottom) return 'rounded-bl-[50px] rounded-br-[50px]';
    return '';
  };

  return (
    <div
      className={`w-full bg-[#221E19] overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.25)] ${getRoundedClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

const IconWithLabel = ({ iconSrc, label, bgColor }: IconWithLabelProps) => (
  <div className="flex flex-col items-center space-y-2">
    <div
      className={`w-16 h-16 ${bgColor} rounded-lg flex items-center justify-center`}
    >
      <Image src={iconSrc} alt={label} width={24} height={24} />
    </div>
    <span className="text-white text-lg text-center">{label}</span>
  </div>
);

const ResponsiveImage = ({
  src,
  alt,
  className = '',
  priority = false,
}: ResponsiveImageProps) => (
  <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[574px] overflow-hidden">
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      priority={priority}
    />
  </div>
);

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Success Section */}
      <Section>
        <DarkPanel roundedTop>
          <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-12 md:mb-16">
              Success is just around the corner.
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-x-16">
              <div className="flex justify-center">
                <IconWithLabel
                  iconSrc="/svgs/music-icon.svg"
                  label="Music"
                  bgColor="bg-yellow-500"
                />
              </div>
              <div className="flex justify-center">
                <IconWithLabel
                  iconSrc="/svgs/film-icon.svg"
                  label="Film"
                  bgColor="bg-purple-500"
                />
              </div>
              <div className="flex justify-center">
                <IconWithLabel
                  iconSrc="/svgs/drama-icon.svg"
                  label="Drama"
                  bgColor="bg-green-500"
                />
              </div>
            </div>
          </div>
        </DarkPanel>
      </Section>

      {/* Graduation Banner */}
      <Section>
        <ResponsiveImage
          src="/images/graduation-banner.png"
          alt="Graduation ceremony"
          priority={true}
        />
      </Section>

      {/* Call Now Section */}
      <Section className="py-4">
        <div className="relative max-w-[1127px] h-[200px] mx-auto">
          <DarkPanel roundedBottom className="absolute w-full h-full">
            <div className="relative h-full">
              {/* Call Now Banner */}
              <div className="absolute left-[25px]">
                <div className="relative w-[160px] h-[48px]">
                  <Image
                    src="/svgs/call-banner.svg"
                    alt="Decorative flourish"
                    fill
                    className="object-contain"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-lg text-red-500 font-bold">
                    CALL NOW!
                  </span>
                </div>
              </div>

              {/* Body Copy */}
              <div className="flex items-center justify-center h-full px-6 sm:px-12">
                <p className="text-white text-sm sm:text-base leading-relaxed text-center max-w-2xl">
                  Everyone has a story to tell, a song to sing, and a talent to
                  share. You have a dream, an unseen dream, waiting to be caught
                  up with. Trust in Us, develop your skills, and let us help you
                  unleash your full{' '}
                  <span className="text-yellow-500 font-semibold">
                    POTENTIAL...
                  </span>
                </p>
              </div>
            </div>
          </DarkPanel>
        </div>
      </Section>

      {/* Vision Section */}
      <Section>
        <DarkPanel roundedAll className="py-16 px-4">
          <div className="w-full md:w-[982px] mx-auto flex flex-col items-center gap-12">
            {/* Vision Icon */}
            <div className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[288px] md:h-[288px]">
              <Image
                src="/svgs/award-icon.svg"
                alt="Vision emblem"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Vision Text */}
            <div className="text-center px-4">
              <h3 className="text-white text-base sm:text-lg font-bold uppercase mb-3">
                VISION:
              </h3>
              <p className="text-white text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                To be a Centre of professional training, discovery and research
                in the Performing Arts.
              </p>
            </div>
          </div>
        </DarkPanel>
      </Section>

      {/* Film Cut Image */}
      <Section>
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[528px] rounded-[50px] overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
          <Image
            src="/images/film-cut-img.png"
            alt="Film clapperboard"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Section>

      {/* Image Gallery Section */}
      <Section>
        <DarkPanel className="rounded-tr-[50px]">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left image */}
            <div className="relative w-full md:w-[440px] h-[240px] sm:h-[300px] md:h-[512px] overflow-hidden">
              <Image
                src="/images/happy-img-1.png"
                alt="Choir group"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side flex column */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Top right image */}
              <div className="relative w-full h-[240px] overflow-hidden">
                <Image
                  src="/images/kids-img-1.png"
                  alt="School kids"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom row with two images */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-full h-[240px] sm:h-[256px] overflow-hidden">
                  <Image
                    src="/images/group-img-1.png"
                    alt="Puppet workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-[240px] sm:h-[256px] overflow-hidden">
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
        </DarkPanel>
      </Section>

      {/* Mission Section */}
      <Section>
        <DarkPanel>
          <div className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-between">
              {/* Icon row */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-20 mb-16">
                {/* Active TV card */}
                <div className="w-[180px] md:w-[201px] h-[280px] md:h-[300px] rounded-[20px] bg-[#221E19] border border-[#FDD07640] shadow-[0px_4px_18px_0px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center">
                  <Image
                    src="/svgs/tv-icon.svg"
                    alt="TV"
                    width={100}
                    height={100}
                  />
                  <span className="mt-4 text-white">Entertain</span>
                </div>

                {/* Secondary icons */}
                <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] flex items-center justify-center">
                  <Image
                    src="/svgs/learn-icon.svg"
                    alt="Education"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] flex items-center justify-center">
                  <Image
                    src="/svgs/speak-icon.svg"
                    alt="Discovery"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Mission text */}
              <div className="text-center text-white max-w-2xl">
                <div className="font-bold text-lg mb-3">MISSION:</div>
                <p className="leading-relaxed">
                  To advance and promote the entertainment industry through
                  skilling committed, trustworthy, honest, transparent and
                  disciplined performing artists.
                </p>
              </div>
            </div>
          </div>
        </DarkPanel>
      </Section>

      {/* About Section */}
      <Section>
        <div className="w-full">
          {/* Hero image */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[778px] mx-auto overflow-hidden">
            <Image
              src="/images/graduation-img.png"
              alt="Graduation group"
              fill
              className="object-cover"
            />
          </div>

          {/* About block */}
          <DarkPanel roundedBottom className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                ABOUT
              </h2>
              <p className="text-center text-white leading-relaxed">
                The Centre was founded in 2010 by Mariam Ndagire to train
                Ugandans mainly focusing on youth in Writing, Acting, Directing,
                Cinematography, Editing, Sound recording and Vocal training with
                an aim of impacting change in the Entertainment industry and the
                Ugandan Society.
              </p>
            </div>
          </DarkPanel>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default HomePage;
