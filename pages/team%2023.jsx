import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header.jsx';
import Cards from '../components/Cards.jsx';

import teamPhoto from '../public/assets/team/2023/comp_2022.jpg'
import bannerImg from '../public/assets/team/2023/team-banner.jpg';

import Briana from '../public/assets/team/2023/briana.png';
import Cameron from '../public/assets/team/2023/cameron.png';
import Connor from '../public/assets/team/2023/connor.png';
import Gabe from '../public/assets/team/2023/gabe.png';
import Jenks from '../public/assets/team/2023/jenks.png';
import Jess from '../public/assets/team/2023/jess.jpg';
import Jonathon from '../public/assets/team/2023/jonathon.png';
import Julian from '../public/assets/team/2023/julian.jpg'
import Nathan from '../public/assets/team/2023/nathan.png';
import Rob from '../public/assets/team/2023/rob.png';
import Sharif from'../public/assets/team/2023/sharif.png';
import Sonya from '../public/assets/team/2023/sonya.png';
import Tom from '../public/assets/team/2023/tom.png';
import Webb from '../public/assets/team/2023/webb.png';
import Zack from'../public/assets/team/2023/zack.png';

const team = () => {
  return (
    <>
      <Head>
        <title>UWAM | Team</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <Header 
        img={bannerImg} 
        text={"MEET OUR TEAM"} 
      />
      
      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-10 mb-5 dark:bg-motorsports-yellow' />
      <div className='w-9/12 mx-auto text-center font-bold text-3xl pb-5'>
        Executive Team
      </div>
      <div className='w-8/12 mx-auto text-center pb-4 text-xl'>
        <p>
        The executive team is responsible for managing the organisation and the project. 
        They work closely with the group leaders to ensure that development projects are 
        feasible, progression is made and budgets are kept.
        </p>
      </div>
      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-10 dark:bg-motorsports-yellow' />
      <div id='projects' className='w-full'>
        <div className='max-w-[1040px] mx-auto px-2 pt-10 pb-24'>
          <div className='grid md:grid-cols-3 gap-16'>
            <Cards
              backgroundImg={Jonathon}
              linkedIn='https://www.linkedin.com/in/jonathan-gallagher/'
              name='Jonathan Gallagher'
              role='Technical Director'
            />
            <div className='h-full'>
            <Cards
              backgroundImg={Jess}
              linkedIn='https://www.linkedin.com/in/jess-gugliotta-6525bb151/'
              name='Jess Gugliotta'
              role='Project Manager'
            />
            </div>
            <Cards
              backgroundImg={Sonya}
              linkedIn='https://www.linkedin.com/in/sonya-emmett-7792a1250/'
              name='Sonya Emmett'
              role='Business Director'
            />
          </div>
        </div>
        <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mb-5 dark:bg-motorsports-yellow' />
      </div>

      <div className='w-9/12 mx-auto text-center font-bold text-3xl pb-5'>
        Technical Team
      </div>
      <div className='w-8/12 mx-auto text-center pb-4 text-xl'>
        <p>
        The technical team is responsible for coordinating the design and manufacturing of the car. 
        Composed of highly skilled engineers, mechanics, and technicians, this dedicated group is 
        responsible for the design, development, and maintenance of the race car. They work closely 
        with the drivers and other members of the team to optimize the performance, reliability, and safety of the vehicle. 
        </p>
      </div>
      
      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-10 dark:bg-motorsports-yellow' />

      <div id='projects' className='w-full'>
        <div className='max-w-[1040px] mx-auto px-2 py-16'>
          <div className='grid md:grid-cols-3 gap-16'>
            <Cards
              backgroundImg={Zack}
              linkedIn='https://www.linkedin.com/in/zack-hender-6264241b2/'
              name='Zack Hender'
              role='Vehicle Dynamics Lead'
            />
            <Cards
              backgroundImg={Jenks}
              linkedIn='https://www.linkedin.com/in/josh-jenkins-b8a0a4180/'
              name='Josh Jenkins'
              role='Powertrain Lead'
            />
            <Cards
              backgroundImg={Tom}
              linkedIn='https://www.linkedin.com/in/tom-ellis-558aa024b/'
              name='Tom Ellis'
              role='Chassis Lead'
            />
          </div>
        </div>
      </div>
      <div id='projects' className='w-full'>
        <div className='max-w-[1040px] mx-auto px-2 pb-24'>
          <div className='grid md:grid-cols-3 gap-16'>
            <Cards
              backgroundImg={Connor}
              linkedIn='https://www.linkedin.com/in/connorsmithbirch/'
              name='Connor Smith-Birch'
              role='Aerodynamics Lead'
            />
            <Cards
              backgroundImg={Sharif}
              linkedIn='https://www.linkedin.com/in/sharif-mohdar-53a667236/'
              name='Sharif Mohdar'
              role='High Voltage Electrical Lead'
            />
            <Cards
              backgroundImg={Nathan}
              linkedIn='https://www.linkedin.com/in/nathan-mayhew/'
              name='Nathan Mayhew'
              role='Low Voltage Electrical Lead'
            />
          </div>
        </div>
      </div>

      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mb-5 dark:bg-motorsports-yellow' />

      <div className='w-9/12 mx-auto text-center font-bold text-3xl pb-5'>
      Auxiliary Management
      </div>
      <div className='w-8/12 mx-auto text-center pb-4 text-xl'>
        <p>
        Auxiliary Management manage and support the motorsport team in its
        operations. These individuals play important roles in handling administrative tasks, 
        talent acquisition, workshop management, merchandise development and distribution, 
        and logistical coordination for the team. Together, they contribute to the overall 
        success and professionalism of the motorsports team, allowing the technical team to 
        focus on their core responsibilities.
        </p>
      </div>

      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-10 dark:bg-motorsports-yellow' />

      <div id='projects' className='w-full'>
        <div className='max-w-[1040px] mx-auto px-2 pt-16'>
          <div className='grid md:grid-cols-3 gap-16'>
            <Cards
              backgroundImg={Rob}
              linkedIn=''
              name='Rob Seres'
              role='Track Manager'
            />
            <Cards
              backgroundImg={Webb}
              linkedIn=''
              name='Tom Webb'
              role='Secretary'
            />
            <Cards
              backgroundImg={Julian}
              linkedIn='https://www.linkedin.com/in/julian-blair-aa3813180/'
              name='Julian Blair'
              role='Recruitment Manager'
            />
          </div>
        </div>
      </div>
      <div id='projects' className='w-full'>
        <div className='max-w-[1040px] mx-auto px-2 py-16'>
          <div className='grid md:grid-cols-3 gap-16'>
            <Cards
              backgroundImg={Cameron}
              linkedIn=''
              name='Cameron Hart'
              role='Finance Manager'
            />
            <Cards
              backgroundImg={Gabe}
              linkedIn='https://www.linkedin.com/in/gabriel-yong-533851142/'
              name='Gabriel Yong'
              role='Safety Officer'
            />
            <Cards
              backgroundImg={Briana}
              linkedIn='https://www.linkedin.com/in/briana-marino-372012140/'
              name='Briana Marino'
              role='Merch Manager'
            />
          </div>
        </div>
      </div>

      <div className='w-9/12 mx-auto text-center font-bold text-4xl pt-10 pb-8'>
        Our 2022 Competition Team
      </div>
      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-16 dark:bg-motorsports-yellow' />
      <div className='w-8/12 m-auto flex justify-center pb-20'>
        <Image src={teamPhoto} alt='/' />
      </div>
    </>
  );
};

export default team;
