import React from 'react';
import SponsorItem from './SponsorItem';
import { sponsorsData } from '../data/sponsors';

const Sponsors = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='w-10/12 mx-auto px-2 py-2 pb-16'>

        {/* Title Sponsor */}
        <h2 className='text-center pb-2'>Title Sponsor</h2>
        <hr className='lg:w-5/12 w-11/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-16 dark:bg-motorsports-yellow' />

        <div className='flex w-1/2 m-auto pt-8 pb-24'>
          <SponsorItem
            title={sponsorsData.title.title}
            backgroundImg={sponsorsData.title.backgroundImg}
            projectUrl={sponsorsData.title.projectUrl}
            tier={sponsorsData.title.tier}
          />
        </div>
      </div>

      {/* Parallax Scrolling Photo 1 */}
      <div className="bg-bannerImg max-w-[100vw] min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover p-0"></div>

      <div className='w-10/12 mx-auto px-2 py-16'>

        {/* Platinum Sponsors */}
        <h2 className='text-center pb-2'>Platinum Sponsors</h2>
        <hr className='lg:w-5/12 w-11/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />

        <div className='grid lg:grid-cols-2 gap-8 pt-8'>
          {sponsorsData.platinum.map((sponsor, index) => (
            <React.Fragment key={sponsor.title}>
              <SponsorItem
                title={sponsor.title}
                backgroundImg={sponsor.backgroundImg}
                projectUrl={sponsor.projectUrl}
                tier={sponsor.tier}
              />
              <p className='text-xl text-justify flex m-auto'>
                {sponsor.description}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Parallax Scrolling Photo 2 */}
      <div className="bg-bannerImg2 max-w-[100vw] min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover p-0"></div>
      
      {/* Gold Sponsors */}
      <div className='lg:max-w-[1240px] w-9/12 mx-auto px-2 py-16'>
        <h2 className='text-center pb-2'>Gold Sponsors</h2>
        <hr className='lg:w-5/12 w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />

        <div className='grid sm:grid-cols-3 gap-16 py-8'>  
          {sponsorsData.gold.map((sponsor) => (
            <div key={sponsor.title}>
              <SponsorItem
                title={sponsor.title}
                backgroundImg={sponsor.backgroundImg}
                projectUrl={sponsor.projectUrl}
                tier={sponsor.tier}
              />
              <p className='text-justify text-lg pt-4'>
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Scrolling Photo 3 */}
      <div className="bg-bannerImg3 max-w-[100vw] min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover p-0"></div>
      
      {/* Silver Sponsors */}  
      <div className='lg:max-w-[1240px] w-9/12 mx-auto px-2 py-16'>
        <h2 className='text-center pb-2'>Silver Sponsors</h2>
        <hr className='lg:w-5/12 w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
        
        <div className='grid sm:grid-cols-5 gap-8 py-8'>
          {sponsorsData.silver.map((sponsor) => (
            <SponsorItem
              key={sponsor.title}
              title={sponsor.title}
              backgroundImg={sponsor.backgroundImg}
              projectUrl={sponsor.projectUrl}
              tier={sponsor.tier}
            />
          ))}
        </div>
      </div>

      {/* Bronze Sponsors */}  
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='text-center pb-2'>Bronze Sponsors</h2>
        <hr className='lg:w-5/12 w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
        
        <div className='grid sm:grid-cols-3 gap-8 py-8 font-bold text-lg pt-4'>
          {sponsorsData.bronze.map((sponsor) => (
            <SponsorItem
              key={sponsor.title}
              title={sponsor.title}
              backgroundImg={sponsor.backgroundImg}
              projectUrl={sponsor.projectUrl}
              tier={sponsor.tier}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;