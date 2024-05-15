import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import SponsorItem from './SponsorItem';

// Title Sponsor
import uwaCrest from '../public/assets/sponsors/title/UWA Crest - White.png'
import uwaTitle from '../public/assets/sponsors/title/UWA Text - White.png'

// Platinum Sponsors
import leapImg from '../public/assets/sponsors/platinum/leap.png';
import savicImg from '../public/assets/sponsors/2024/platinum/savic.png';

// Gold Sponsors
import altiumImg from '../public/assets/sponsors/2024/gold/altium.png';
import doddImg from '../public/assets/sponsors/2024/gold/cdodd.png';
import cevaImg from '../public/assets/sponsors/2024/gold/ceva.png';
import marineImg from '../public/assets/sponsors/gold/gmd.png';
import mhsImg from '../public/assets/sponsors/2024/gold/mhs.png';
import safeImg from '../public/assets/sponsors/2024/gold/safeactions.png';


// Silver Sponsors
import calmLogo from '../public/assets/sponsors/2024/silver/Calm-Aluminium.png';
import canvaLogo from '../public/assets/sponsors/2024/silver/Canva Logo White.png';
import fuzeLogo from '../public/assets/sponsors/2024/silver/Fuze Logo White.png';
import kissLogo from '../public/assets/sponsors/2024/silver/KISSsoft Logo White.png';
import loctiteLogo from '../public/assets/sponsors/2024/silver/loctite-logo-white.png';
import primeroLogo from '../public/assets/sponsors/2024/silver/primero-white.png';
import rapidLogo from '../public/assets/sponsors/2024/silver/Rapid-Harness-white.png';
import sealLogo from '../public/assets/sponsors/2024/silver/seal-solutions-white.png';
import sportLogo from '../public/assets/sponsors/2024/silver/UWA-Sport-Logo.png';
import switchLogo from '../public/assets/sponsors/2024/silver/SWITCH technologies.png';
import toolkitLogo from '../public/assets/sponsors/2024/silver/Tool Kit Depot White.png';
import wascLogo from '../public/assets/sponsors/2024/silver/WA Sporting Car Club (white).png';
import wintechLogo from '../public/assets/sponsors/2024/silver/Wintech Engineering (white).png';

const Sponsors = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='w-10/12 mx-auto px-2 py-2 pb-16'>

        {/* Title Sponsor */}
        <h2 className='text-center pb-2'>Title Sponsor</h2>
        <hr className='lg:w-5/12 w-11/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-16 dark:bg-motorsports-yellow' />

        <div className='flex w-1/2 m-auto pt-8 pb-24'>
          <SponsorItem
            title='University of Western Australia'
            backgroundImg={[uwaCrest, uwaTitle]}
            projectUrl='https://www.uwa.edu.au/'
            tier='title'
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
          <SponsorItem
            title='Leap Australia'
            backgroundImg={leapImg}
            projectUrl='https://www.leapaust.com.au/'
            tier='platinum'
          />
          <p className='text-xl text-justify flex m-auto'>
          Leap Australia is a leading provider of Computer Aided 
          Engineering (CAE) software and services, dedicated to 
          enhancing product development processes across Australia 
          and New Zealand. With a commitment to innovation, Leap 
          Australia offers comprehensive training programs and licenses 
          for Ansys software, empowering teams to simulate fluid 
          dynamics and stress distribution with precision. Their 
          experienced engineers uphold a reputation for excellence, 
          representing top-tier engineering solutions. Leap Australia’s 
          support has been pivotal for numerous companies, fostering 
          advancements in engineering and design. Their contributions 
          are not just in technology, but also in fostering the next 
          generation of engineering excellence.
          </p>

          <div className=' lg:order-last'>
          <SponsorItem
            title='Brookside Energy'
            backgroundImg={savicImg}
            projectUrl='https://brookside-energy.com.au/'
            tier='platinum'
          />
          </div>
          <p className='text-xl text-justify flex m-auto'>
          Savic Motorcycles is revolutionizing the Australian electric vehicle 
          landscape with its high-performance electric motorbikes. Founded on 
          the dreams of a young innovator, Dennis Savic, the company has quickly 
          ascended from a university project to a beacon of future-ready transportation. 
          With a focus on reliability and aesthetic appeal, Savic Motorcycles crafts 
          vehicles equipped with advanced lithium-ion batteries, liquid-cooled 
          motors, and interactive IoT systems. Their commitment to rider safety 
          and performance is evident in their integration of cutting-edge braking 
          systems and software. As they gear up to diversify into global markets, 
          Savic Motorcycles promises an electrifying ride into a sustainable future.
          </p>

        </div>
      </div>

      {/* Parallax Scrolling Photo 2 */}
      <div className="bg-bannerImg2 max-w-[100vw] min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover p-0"></div>
      
      {/* Gold Sponsors */}
      <div className='lg:max-w-[1240px] w-9/12 mx-auto px-2 py-16'>
        <h2 className='text-center pb-2'>Gold Sponsors</h2>
        <hr className='lg:w-5/12 w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />

        <div className='grid sm:grid-cols-3 gap-16 py-8'>  
        <div>
            <SponsorItem
              title='Altium'
              backgroundImg={altiumImg}
              projectUrl='https://www.altium.com/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            Altium are industry leaders of PCB designing software for beginners to industry professionals, 
            providing numerous software tools and platforms such as 
            Altium designer, Altium 365 and Octopart.
            </p>
          </div>
          <div>
            <SponsorItem
              title='C.D. Dodd Scrap Metal Recyclers'
              backgroundImg={doddImg}
              projectUrl='https://recyclers.com.au/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            With more than 50 years of experience as dedicated 
            scrap metal recyclers throughout Western Australia, 
            C.D. Dodd is a market leader for safe recycling and on-site specialists for extensive clean-ups 
            and responsible salvaging.
            </p>
          </div>
          <div>
            <SponsorItem
                title='CEVA Logistics'
                backgroundImg={cevaImg}
                projectUrl='https://www.cevalogistics.com/en'
                tier='silver'
              />
            <p className='text-justify text-lg pt-4'>
            CEVA Logistics leads global supply chain management with 
            tailored end-to-end solutions spanning 160 countries. Their 
            expertise optimizes logistics, driving efficiency and growth 
            for businesses worldwide.
            </p>
          </div>
          
        </div>

        <div className='grid sm:grid-cols-3 gap-16 py-8'>  
          <div>
            <SponsorItem
              title='Global Marine Design'
              backgroundImg={marineImg}
              projectUrl='https://globalmarinedesign.com/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            Global Marine Design are the experts in on-water 
            vessels and marine engineering design.They supply 
            comprehensive flat-pack aluminium Marine 
            Kits to shipyards and owners around the world.
            </p>
          </div>
          <div>
            <SponsorItem
              title='Mining and Hydraulic Supplies'
              backgroundImg={mhsImg}
              projectUrl='https://miningandhydraulics.com.au/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            Mining and Hydraulics Supplies specialises in supplying 
            leading products and services in mining, marine and manufacturing. 
            Based in Western Australia, MHS offer cost-effective 
            engineering solutions and equipment hire.
            </p>
          </div>
          <div>
            <SponsorItem
              title='Safe Actions'
              backgroundImg={safeImg}
              projectUrl='https://www.safeactions.com.au/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            SafeActions delivers premier manual tasks training and 
            consulting, embedding work health and safety principles. 
            With tailored solutions for diverse sectors, led by Accredited 
            Health Professionals, they ensure improved workplace safety and 
            compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Scrolling Photo 3 */}
      <div className="bg-bannerImg3 max-w-[100vw] min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover p-0"></div>
      
    {/* Silver Sponsors */}  
    <div className='lg:max-w-[1240px] w-9/12 mx-auto px-2 py-16'>
      <h2 className='text-center pb-2'>Silver Sponsors</h2>
      <hr className='lg:w-5/12 w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
        <div className='grid sm:grid-cols-4 gap-16 py-8'>
            
            <SponsorItem
              title='Calm Aluminium'
              backgroundImg={calmLogo}
              projectUrl='https://www.calm-aluminium.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='Canva'
              backgroundImg={canvaLogo}
              projectUrl='https://www.canva.com/en_au/'
              tier='silver'
            />
            <SponsorItem
              title='Fuze'
              backgroundImg={fuzeLogo}
              projectUrl='https://fuze.solutions/'
              tier='silver'
            />
            <SponsorItem
              title='KISSsoft'
              backgroundImg={kissLogo}
              projectUrl='https://www.kisssoft.com/en'
              tier='silver'
            />
          </div>
          <div className='grid sm:grid-cols-4 gap-16 py-8'>  
            <SponsorItem
              title='Loctite'
              backgroundImg={loctiteLogo}
              projectUrl='www.henkel-adhesives.com'
              tier='silver'
            />
            <SponsorItem
              title='Primero'
              backgroundImg={primeroLogo}
              projectUrl='https://primero.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='Rapid Harness'
              backgroundImg={rapidLogo}
              projectUrl='https://www.safeactions.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='Seal Solutions'
              backgroundImg={sealLogo}
              projectUrl='https://www.sealsolutionsaustralia.com.au/'
              tier='silver'
            />
          </div>
          <div className='grid sm:grid-cols-3 gap-16 py-8 w-[85%] m-auto'>  
          <SponsorItem
              title='Switch Technologies'
              backgroundImg={switchLogo}
              projectUrl='https://www.switchtechnologies.net/'
              tier='silver'
            />
            <SponsorItem
              title='Tool Kit Depot'
              backgroundImg={toolkitLogo}
              projectUrl='https://primero.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='Rapid Harness'
              backgroundImg={rapidLogo}
              projectUrl='https://www.safeactions.com.au/'
              tier='silver'
            />
          </div>
          <div className='grid sm:grid-cols-3 gap-16 py-8 w-[85%] m-auto'>  
            <SponsorItem
              title='UWA Sport'
              backgroundImg={sportLogo}
              projectUrl='https://www.uwa.edu.au/sport'
              tier='silver'
            />
            <SponsorItem
              title='WA Sporting Car Club'
              backgroundImg={wascLogo}
              projectUrl='https://wascc.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='Wintech Engineering'
              backgroundImg={wintechLogo}
              projectUrl='https://www.wintechengineering.com.au/'
              tier='silver'
            />
          </div>
        </div>

      {/* Bronze Sponsors */}  
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <h2 className='text-center pb-2'>Bronze Sponsors</h2>
      <hr className='lg:w-5/12 w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
        <div className='grid sm:grid-cols-3 gap-8 py-8 font-bold text-lg pt-4'>
          <SponsorItem
            title='AEM Performance Electronics'
            backgroundImg=''
            projectUrl='https://www.holley.com/about/holley/'
            tier='bronze'
          />
          <SponsorItem
            title='Altronics'
            backgroundImg=''
            projectUrl='https://www.altronics.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='AT&M'
            backgroundImg=''
            projectUrl='https://www.atmwa.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='ATL Composites'
            backgroundImg=''
            projectUrl='https://atlcomposites.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Aviation Composites'
            backgroundImg=''
            projectUrl='https://www.aviationcomposites.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Ayres'
            backgroundImg=''
            projectUrl='https://www.ayrescom.com/'
            tier='bronze'
          />
          <SponsorItem
            title='Composite Envisions'
            backgroundImg=''
            projectUrl='https://compositeenvisions.com/'
            tier='bronze'
          />
          <SponsorItem
            title='Corsa Technic'
            backgroundImg=''
            projectUrl='https://www.corsa-technic.com/'
            tier='bronze'
          />
          <SponsorItem
            title='Elcon'
            backgroundImg=''
            projectUrl='https://elconchargers.com/'
            tier='bronze'
          />
          <SponsorItem
            title='Fastron Electronics'
            backgroundImg=''
            projectUrl='https://fastron.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Keysight'
            backgroundImg=''
            projectUrl='https://www.keysight.com/us/en/home.html'
            tier='bronze'
          />
          <SponsorItem
            title='OZ FDM'
            backgroundImg=''
            projectUrl='https://ozfdm.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Premier Auto Trade'
            backgroundImg=''
            projectUrl='http://premierautotrade.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Uniforms West'
            backgroundImg=''
            projectUrl='https://www.willapparel.com.au/'
            tier='bronze'
          />
        </div>
      </div>

      
    </div>
  );
};

export default Sponsors;