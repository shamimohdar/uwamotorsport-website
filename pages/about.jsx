import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header.jsx';

import bannerImg from '../public/assets/about/2024/About us top banner.jpg';
import TomImg from '../public/assets/team/2024/tom happy.jpg';



const about = () => {
  return (
    <>
      <Head>
        <title>UWAM | About Us</title>
        <meta
          name='description'
          content='I&apos;m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>
    
      <Header 
        img={bannerImg} 
        text={"ABOUT US"} 
        className="lg:visible hidden"
      />

      <div className="bg-black dark:bg-white text-white dark:text-gray-900 transition-colors duration-300">
      <div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
          <h2 className="text-4xl">Our Mission</h2>
      </div>
      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
      <div className=' w-8/12 h-full mx-auto justify-center items-center lg:text-center text-justify'>
        <p className='py-2 text-white dark:text-gray-700 text-lg'>
        The University of Western Australia Motorsport Team (UWAM) is a group of diverse and 
        dedicated students that work together to design, build and test an electric formula-style 
        vehicle to participate in the Formula SAE competition. The team strive for excellence each year with 
        five core values in mind:
        </p>
      </div>
      <div className=' w-8/12 m-auto gap-8 text-2xl font-bold pb-5'>
        <p className='lg:block hidden py-2 text-white dark:text-gray-700 text-center lg:pb-0 pb-6'>
          Competition - Education - Innovation - Community - Challenge
        </p>
        {/* <p className='lg:hidden visible text-white text-center py-4'>
          Reliability
        </p>
        <p className='lg:hidden visible text-white text-center py-4'>
          Justification
        </p>
        <p className='lg:hidden visible text-white text-center py-4'>
          Testing
        </p> */}
      </div>

      

      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
      
      <div className='xl:w-8/12 m-auto xl:grid grid-cols-3 py-10'>
        <div className='col-span-2 flex justify-center items-center xl:mr-10'>
          {/* <video width="75%" height="75%" controls>
            <source src="/assets/main/intro-vid.mp4" type="video/mp4" />
          </video> */}


          {/* TODO: Get rid of outdated video and fill space with text */}
          <iframe 
            src="https://player.vimeo.com/video/846544255?&portrait=0&byline=0" 
            style={{border:"0", width:"100%", height:"100%"}} 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen 
            title="Welcome to UWA Motorsport!" 
          />
        </div>
        <div className='col-span-1 xl:w-full w-8/12 mx-auto xl:py-0 text-justify'>
          <p className='pb-2 text-white dark:text-gray-900 text-2xl font-bold'>
            Who are we?
          </p>
          <div className='mb-3 text-lg'>
            <p>
              We are a group of students from UWA comprised of up-and-coming talented 
              engineers, technicians and business professionals that strive to push the 
              limits of engineering to produce world-class electric racecars. 
            </p> 
          </div>
          <div className='mt-3 text-lg'>
            <p>
            We compete annually in FSAE-Australasia, a student business and design 
            competition where teams from universities around the world compete in the 
            designing, manufacturing, testing and racing of small formula-style racecars.
            </p>
          </div>       
        </div>
      </div>
     

      <div className=' w-8/12 h-full mx-auto justify-center items-center'>

          <div className='lg:grid grid-cols-3 gap-16 lg:pb-16'>
            <div className='col-span-2 text-lg text-justify lg:pb-0 pb-16'>
              <div className=' gap-8 text-2xl font-bold'>
                <p className='py-2 text-white dark:text-gray-900'>
                  A Message from our Project Manager
                </p>
              </div>
              <p className='pb-4'>
                Involvement with the team facilitates a multitude of skills necessary across 
                all walks of life. These include CAD modelling, electronics manufacture, 
                machining, accounting, logistics and marketing, as well as team-work and 
                professionalism. It is not possible to vouch enough for the fact that no matter 
                the level of experience of those who walk into the team, they walk out some of 
                the most all-rounded, employable individuals you&apos;ll meet.
              </p>
              <p className='pb-4'>
                  All aspects of our team functionality are managed by students. This presents a fantastic
                  opportunity for self-development, which generally wouldn&apos;t be available to students until
                  later in their careers. The volunteer aspect of the project requires students to develop
                  strong interpersonal skills to influence and motivate others, as well as to establish good
                  relationships and mutual respect in order to lead and manage effectively. 
              </p>
              <p>
                  We hope to provide an 
                  opportunity for sponsors to contribute to the future of engineers and business 
                  professionals, through investing in our students who will develop these technologies 
                  for the rest of their careers.
              </p>
            </div>

            <div className='col-span-1 w-full h-auto m-auto shadow-gray-400 py-5'>
              <div className='flex items-right justify-right object-right'>
              <Image src={TomImg} alt='/' />
              </div>
                <div className='pt-10 text-white dark:text-gray-900 text-3xl font-bold text-left'>
                <p>Thomas Webb</p>
              </div>
              <div className='py-2 text-white dark:text-gray-900 text-2xl pb-10 text-left'>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default about;
