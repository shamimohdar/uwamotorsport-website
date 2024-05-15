import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import SponsorItem from './SponsorItem';

// Title Sponsor
import uwaCrest from '../public/assets/sponsors/title/UWA Crest - White.png'
import uwaTitle from '../public/assets/sponsors/title/UWA Text - White.png'

// Platinum Sponsors
import leapImg from '../public/assets/sponsors/platinum/leap.png';
import brooksideImg from '../public/assets/sponsors/platinum/brookside.png';

// Gold Sponsors
import marineImg from '../public/assets/sponsors/gold/gmd.png';
import savicImg from '../public/assets/sponsors/gold/savic.png';
import dassaultImg from '../public/assets/sponsors/gold/dassault.png';
import altiumImg from '../public/assets/sponsors/gold/altium.png';
import doddImg from '../public/assets/sponsors/gold/cdd.png';
import mhsImg from '../public/assets/sponsors/gold/mhs.png';
import caswaImg from '../public/assets/sponsors/gold/caswa.png'

// Silver Sponsors
import ariesLogo from '../public/assets/sponsors/silver/aries-rail.png';
import autronicsLogo from '../public/assets/sponsors/silver/autronics.png';
import paintLogo from '../public/assets/sponsors/silver/platinum-paint-supplies.png';
import primeroLogo from '../public/assets/sponsors/silver/primero.png';
import prohelionLogo from '../public/assets/sponsors/silver/prohelion.png';
import rapidLogo from '../public/assets/sponsors/silver/rapidharness.png';
import safeLogo from '../public/assets/sponsors/silver/safe-actions.png'
import tkdLogo from '../public/assets/sponsors/silver/tkd.png';


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
          Leap Australia has assisted thousands of companies to implement 
          technology solutions to enhance product development processes.
          We would like to thank Leap Australia for their generosity 
          in donating licensees and training programs for their Ansys 
          software. Ansys is a modelling software that helps our team 
          model fluid movements as well as stress distribution, both 
          of which is extremely helpful when designing and building 
          the car. Leap Australia has a long established reputation 
          for successfully delivering Computer Aided Engineering (CAE)
          software and services to thousand Australian and silver Zealand
          customers. They have a team of highly qualified and experienced 
          engineers and proudly represent world leading engineering 
          companies in product development.
          </p>
          
          <div className=' lg:order-last'>
          <SponsorItem
            title='Brookside Energy'
            backgroundImg={brooksideImg}
            projectUrl='https://brookside-energy.com.au/'
            tier='platinum'
          />
          </div>
          <p className='text-xl text-justify flex m-auto'>
          Brookside Energy, a leading oil and natural gas production and exploration
           company, is committed to the safe and efficient development of energy. As 
           experts in the oil and gas sector Brookside Energy, applies a combination of 
           experimentation, technology, and science optimise oil and natural gas 
           extraction. Through their strategic approach of operated drilling, property 
           acquisitions, land and leasing which contribute to their success within 
           industry. With their headquarters based in Perth, Western Australia, Brookside 
           Energy operate across international boundaries. 
          </p>

        </div>
      </div>

      {/* Parallax Scrolling Photo 2 */}
      <div className="bg-bannerImg2 max-w-[100vw] min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover p-0"></div>
      
      {/* Gold Sponsors */}
      <div className='lg:max-w-[1240px] w-9/12 mx-auto px-2 py-16'>
        <h2 className='text-center pb-2'>Gold Sponsors</h2>
        <hr className='lg:w-5/12 w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
        <div className='grid sm:grid-cols-2 gap-36 py-8 w-[70%] m-auto'>  
          <div>
            <SponsorItem
              title='Dassault Systemes'
              backgroundImg={dassaultImg}
              projectUrl='https://www.3ds.com/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            With over 40 years in market-leading technology,
             Dassault Systemes are pioneers in engineering design software, 
            applicable for various industries from aerospace to cities and 
            public services.
            </p>
          </div> 

          <div>
            <SponsorItem
              title='Savic Motorcycles'
              backgroundImg={savicImg}
              projectUrl='https://www.savicmotorcycles.com/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            Savic Motorcycles are a Melbourne-based startup paving the way forward for electric vehicles; designing, prototyping and devloping electric
            motorcycles, with the goal decarbonising the motoring industry.
            </p>
          </div>
        </div>

        <div className='grid sm:grid-cols-3 gap-16 py-8'>  
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
              title='Global Marine Design'
              backgroundImg={marineImg}
              projectUrl='https://www.leapaust.com.au/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            Global Marine Design are the experts in on-water 
            vessels and marine engineering design.They supply 
            comprehensive flat-pack aluminium Marine 
            Kits to shipyards and owners around the world.
            </p>
          </div>
        </div>

        <div className='grid sm:grid-cols-3 gap-16 py-8'>  
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
              title='CASWA'
              backgroundImg={caswaImg}
              projectUrl='http://www.caswa.com/'
              tier='gold'
            />
            <p className='text-justify text-lg pt-4'>
            CASWA specialises in improving engineering asset management 
            systems and processes. They develop bespoke software and 
            hardware to collect, analyse and disseminate data crucial to engineering applications.
            </p>
          </div>
          <div>
            <SponsorItem
                title='Platinum Auto Paints'
                backgroundImg={paintLogo}
                projectUrl='https://platinumpaints.com.au/'
                tier='silver'
              />
            <p className='text-justify text-lg pt-4'>
              Platinum Auto Paints is an Australian family-owned distributor of paints and surface 
              finishing supplies. Platinum Auto Paints have two decades worth of experience and 
              training, providing quality service, products and advice.
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
              title='Prohelion'
              backgroundImg={prohelionLogo}
              projectUrl='https://miningandhydraulics.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='Primero'
              backgroundImg={primeroLogo}
              projectUrl='https://miningandhydraulics.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='Aries Rail'
              backgroundImg={ariesLogo}
              projectUrl='https://miningandhydraulics.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='Autronics'
              backgroundImg={autronicsLogo}
              projectUrl='https://miningandhydraulics.com.au/'
              tier='silver'
            />
          </div>
          <div className='grid sm:grid-cols-3 gap-16 py-8 w-[85%] m-auto'>  
            <SponsorItem
              title='Rapid Harness'
              backgroundImg={rapidLogo}
              projectUrl='https://miningandhydraulics.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='CDM'
              backgroundImg={prohelionLogo}
              projectUrl='https://miningandhydraulics.com.au/'
              tier='silver'
            />
            <SponsorItem
              title='SafeActions'
              backgroundImg={safeLogo}
              projectUrl='https://www.safeactions.com.au/'
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
            title='3D Connexion'
            backgroundImg=''
            projectUrl='https://3dconnexion.com/au/'
            tier='bronze'
          />
          <SponsorItem
            title='ADRAD'
            backgroundImg=''
            projectUrl='https://www.adrad.com.au/'
            tier='bronze'
          />
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
            title='Autobody Supplies'
            backgroundImg=''
            projectUrl='https://www.autobodysupplies.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Aviation Composites'
            backgroundImg=''
            projectUrl='https://www.aviationcomposites.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Bender'
            backgroundImg=''
            projectUrl='https://www.bender-apac.com/'
            tier='bronze'
          />
          <SponsorItem
            title='Calspan'
            backgroundImg=''
            projectUrl='https://calspan.com/'
            tier='bronze'
          />
          <SponsorItem
            title='Corsa Technic'
            backgroundImg=''
            projectUrl='https://www.corsa-technic.com/'
            tier='bronze'
          />
          <SponsorItem
            title='FASTACRAFT'
            backgroundImg=''
            projectUrl='https://www.fastacraft.com/'
            tier='bronze'
          />
          <SponsorItem
            title='Forch Australia'
            backgroundImg=''
            projectUrl='https://www.forch.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='GoGear Racing Services'
            backgroundImg=''
            projectUrl='https://www.gogear.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Motul Supplies'
            backgroundImg=''
            projectUrl='https://www.autobodysupplies.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Premier Auto Trade'
            backgroundImg=''
            projectUrl='http://premierautotrade.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Seal Solutions'
            backgroundImg=''
            projectUrl='https://www.sealsolutionsaustralia.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='TinkerTech'
            backgroundImg=''
            projectUrl='https://www.tinkertechau.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Uniforms West'
            backgroundImg=''
            projectUrl='https://www.willapparel.com.au/'
            tier='bronze'
          />
          <SponsorItem
            title='Vivid Finishing'
            backgroundImg=''
            projectUrl='https://www.facebook.com/p/Vivid-Finishing-100078767230318/'
            tier='bronze'
          />
        </div>
      </div>

      
    </div>
  );
};

export default Sponsors;