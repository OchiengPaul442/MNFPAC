// data/showcaseData.ts

export type PersonData = {
  id: string;
  bannerSrc: string;
  bannerAlt: string;
  bioImageSrc: string;
  bioImageAlt: string;
  bioText: string;
  actionImageSrc: string;
  actionImageAlt: string;
};

export const showcaseData: PersonData[] = [
  {
    id: '1',
    bannerSrc: '/images/showcase/showcase-img-2.png',
    bannerAlt: 'Tania on stage',
    bioImageSrc: '/images/showcase/showcase-img-3.png',
    bioImageAlt: "Tania's portrait",
    bioText:
      "Tania is a very dynamic actress, she has appeared in a number of movies and tv shows—Power of Legacy (2019), Tinka's Story (2022), All for Love (2023) and many more.",
    actionImageSrc: '/images/showcase/showcase-img-4.png',
    actionImageAlt: 'Tania performing',
  },
  {
    id: '2',
    bannerSrc: '/images/showcase/showcase-img-5.png',
    bannerAlt: 'Doreen speaking',
    bioImageSrc: '/images/showcase/showcase-img-6.png',
    bioImageAlt: "Doreen's portrait",
    bioText:
      'Doreen is a Ugandan actress, filmmaker, producer and founder of Amani Production House. She has acted in Kafa Coh (2019) and Tendo and Damalie (TV series), serving as executive producer.',
    actionImageSrc: '/images/showcase/showcase-img-7.png',
    actionImageAlt: 'Doreen on set',
  },
  {
    id: '3',
    bannerSrc: '/images/showcase/showcase-img-8.png',
    bannerAlt: 'Laura Kahunde singing',
    bioImageSrc: '/images/showcase/showcase-img-9.png',
    bioImageAlt: "Laura's portrait",
    bioText:
      "Laura Kahunde is a Ugandan performing artist and Reality TV Show Host (Our Perfect Wedding Uganda). She also starred in Usama Mukwaya's Hello, winning Best Actress at MNFPAC students awards.",
    actionImageSrc: '/images/showcase/showcase-img-10.png',
    actionImageAlt: 'Laura on stage',
  },
  // Add entries for ids 4-9 here
];
