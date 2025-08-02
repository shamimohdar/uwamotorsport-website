import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import SponsorItem from './SponsorItem';
import { 
  titleSponsor,
  platinumSponsors,
  goldSponsors,
  silverSponsors,
  bronzeSponsors
} from '../../data/sponsors.js';

// Component for section headers
const SectionHeader = ({ title }) => (
  <>
    <h2 className='text-center pb-2'>{title}</h2>
    <hr className='lg:w-5/12 w-11/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-16 dark:bg-motorsports-yellow' />
  </>
);

// Component for parallax sections
const ParallaxSection = ({ backgroundClass }) => (
  <div className={`${backgroundClass} max-w-[100vw] min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover p-0`} />
);

// Title sponsor section component
const TitleSponsorSection = () => (
  <div className='w-10/12 mx-auto px-2 py-2 pb-16'>
    <SectionHeader title="Title Sponsor" />
    <div className='flex w-1/2 m-auto pt-8 pb-24'>
      <SponsorItem
        title={titleSponsor.title}
        backgroundImg={titleSponsor.backgroundImg}
        projectUrl={titleSponsor.projectUrl}
        tier='title'
      />
    </div>
  </div>
);

// Platinum sponsors section component
const PlatinumSponsorsSection = () => (
  <div className='w-10/12 mx-auto px-2 py-16'>
    <h2 className='text-center pb-2'>Platinum Sponsors</h2>
    <hr className='lg:w-5/12 w-11/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />

    <div className='grid lg:grid-cols-2 gap-8 pt-8'>
      {platinumSponsors.map((sponsor, index) => (
        <React.Fragment key={sponsor.title}>
          <div className={index === 1 ? 'lg:order-last' : ''}>
            <SponsorItem
              title={sponsor.title}
              backgroundImg={sponsor.backgroundImg}
              projectUrl={sponsor.projectUrl}
              tier='platinum'
            />
          </div>
          <p className='text-xl text-justify flex m-auto'>
            {sponsor.description}
          </p>
        </React.Fragment>
      ))}
    </div>
  </div>
);

// Gold sponsors section component
const GoldSponsorsSection = () => (
  <div className='lg:max-w-[1240px] w-9/12 mx-auto px-2 py-16'>
    <h2 className='text-center pb-2'>Gold Sponsors</h2>
    <hr className='lg:w-5/12 w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />

    <div className='grid sm:grid-cols-3 gap-16 py-8'>  
      {goldSponsors.slice(0, 3).map((sponsor) => (
        <div key={sponsor.title}>
          <SponsorItem
            title={sponsor.title}
            backgroundImg={sponsor.backgroundImg}
            projectUrl={sponsor.projectUrl}
            tier='gold'
          />
          <p className='text-justify text-lg pt-4'>
            {sponsor.description}
          </p>
        </div>
      ))}
    </div>

    <div className='grid sm:grid-cols-3 gap-16 py-8'>  
      {goldSponsors.slice(3, 6).map((sponsor) => (
        <div key={sponsor.title}>
          <SponsorItem
            title={sponsor.title}
            backgroundImg={sponsor.backgroundImg}
            projectUrl={sponsor.projectUrl}
            tier='gold'
          />
          <p className='text-justify text-lg pt-4'>
            {sponsor.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

// Silver sponsors section component
const SilverSponsorsSection = () => (
  <div className='lg:max-w-[1240px] w-9/12 mx-auto px-2 py-16'>
    <h2 className='text-center pb-2'>Silver Sponsors</h2>
    <hr className='lg:w-5/12 w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
    
    <div className='grid sm:grid-cols-5 gap-16 py-8'>
      {silverSponsors.slice(0, 15).map((sponsor) => (
        <SponsorItem
          key={sponsor.title}
          title={sponsor.title}
          backgroundImg={sponsor.backgroundImg}
          projectUrl={sponsor.projectUrl}
          tier='silver'
        />
      ))}
    </div>
    
    <div className='grid sm:grid-cols-6 gap-16 py-8'>
      {silverSponsors.slice(15).map((sponsor) => (
        <SponsorItem
          key={sponsor.title}
          title={sponsor.title}
          backgroundImg={sponsor.backgroundImg}
          projectUrl={sponsor.projectUrl}
          tier='silver'
        />
      ))}
    </div>
  </div>
);

// Bronze sponsors section component
const BronzeSponsorsSection = () => (
  <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <h2 className='text-center pb-2'>Bronze Sponsors</h2>
    <hr className='lg:w-5/12 w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
    
    <div className='grid sm:grid-cols-3 gap-8 py-8 font-bold text-lg pt-4'>
      {bronzeSponsors.map((sponsor) => (
        <SponsorItem
          key={sponsor.title}
          title={sponsor.title}
          backgroundImg=''
          projectUrl={sponsor.projectUrl}
          tier='bronze'
        />
      ))}
    </div>
  </div>
);

// Main Sponsors component
const Sponsors = () => {
  return (
    <div id='projects' className='w-full'>
      <TitleSponsorSection />
      <ParallaxSection backgroundClass="bg-bannerImg" />
      <PlatinumSponsorsSection />
      <ParallaxSection backgroundClass="bg-bannerImg2" />
      <GoldSponsorsSection />
      <ParallaxSection backgroundClass="bg-bannerImg3" />
      <SilverSponsorsSection />
      <BronzeSponsorsSection />
    </div>
  );
};

export default Sponsors;