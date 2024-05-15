import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header.jsx';
import TeamPhotos2024 from '../../components/TeamPhotos2024.jsx';

import bannerImg from '../../public/assets/team/2023/team-banner.jpg';

// Executive Team
import Webb_grr from '../../public/assets/team/2024/tom serious.jpg';
import Webb_smiley from '../../public/assets/team/2024/tom happy.jpg';
import Ellis_grr from '../../public/assets/team/2024/ellis serious.jpg';
import Ellis_smiley from '../../public/assets/team/2024/ellis happy.jpg';
// TODO: Missing Sonya

// Business Team
import Jas_grr from '../../public/assets/team/2024/jas serious.jpg';
import Jas_smiley from '../../public/assets/team/2024/jas happy.jpg';
import Clarissa_grr from '../../public/assets/team/2024/clarissa serious.png';
import Clarissa_smiley from '../../public/assets/team/2024/clarissa happy.jpg';
// TODO: Missing Sacha, Adele, Cam Hart

// Technical Team
import Basil_grr from '../../public/assets/team/2024/basil serious.jpg';
import Basil_smiley from '../../public/assets/team/2024/basil happy.png';
import Dan_grr from '../../public/assets/team/2024/dan serious.jpg';
import Dan_smiley from '../../public/assets/team/2024/dan happy.jpg';
import Dylan_grr from '../../public/assets/team/2024/dylan serious.jpg';
import Dylan_smiley from '../../public/assets/team/2024/dylan happy.jpg';
import Lucas_grr from '../../public/assets/team/2024/lucas serious.jpg';
import Lucas_smiley from '../../public/assets/team/2024/lucas happy.jpg';
import Sharif_grr from '../../public/assets/team/2024/sharif serious.jpg';
import Sharif_smiley from '../../public/assets/team/2024/sharif happy.jpg';

// Auxiliary Team
import Andrew_grr from '../../public/assets/team/2024/andrew serious.jpg';
import Andrew_smiley from '../../public/assets/team/2024/andrew happy.jpg';
import Emily_grr from '../../public/assets/team/2024/emily serious.png';
import Emily_smiley from '../../public/assets/team/2024/emily happy.jpg';
import Gabe_grr from '../../public/assets/team/2024/gabe serious.jpg';
import Gabe_smiley from '../../public/assets/team/2024/gabe happy.jpg';
import Jess_grr from '../../public/assets/team/2024/jess serious.jpg';
import Jess_smiley from '../../public/assets/team/2024/jess happy.jpg';

// Track Team
import CamL_grr from '../../public/assets/team/2024/cam lambert serious.jpg';
import CamL_smiley from '../../public/assets/team/2024/cam lambert happy.jpg';
import Jonathon_grr from '../../public/assets/team/2024/jonathon serious.jpg';
import Jonathon_smiley from '../../public/assets/team/2024/jonathon happy.jpg';

import Cameron from '../../public/assets/team/2023/cameron.png';
import Gabe from '../../public/assets/team/2023/gabe.png';
import Julian from '../../public/assets/team/2023/julian.jpg'
import Sharif from'../../public/assets/team/2023/sharif.png';
import Sonya from '../../public/assets/team/2023/sonya.png';


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
            <TeamPhotos2024
              grr={Ellis_grr}
              happy={Ellis_smiley}
              linkedIn='https://www.linkedin.com/in/jonathan-gallagher/'
              name='Tom Ellis'
              role='Technical Director'
            />
            <div className='h-full'>
            <TeamPhotos2024
              grr={Webb_grr}
              happy={Webb_smiley}
              linkedIn=''
              name='Tom Webb'
              role='Project Manager'
            />
            </div>
            <TeamPhotos2024
              grr={Sonya}
              linkedIn='https://www.linkedin.com/in/sonya-emmett-7792a1250/'
              name='Sonya Emmett'
              role='Business Director'
            />
          </div>
        </div>
        <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mb-5 dark:bg-motorsports-yellow' />
      </div>

      <div className='w-9/12 mx-auto text-center font-bold text-3xl pb-5'>
        Business Team
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
        <div className='max-w-[1040px] mx-auto px-2 pt-10'>
          <div className='grid md:grid-cols-3 gap-16'>
            <TeamPhotos2024
              grr={Clarissa_grr}
              happy={Clarissa_smiley}
              linkedIn=''
              name='Clarissa Sin'
              role='Marketing Lead'
            />
            <TeamPhotos2024
              grr={Cameron}
              linkedIn=''
              name='Cameron Hart'
              role='Finance Lead'
            />
            <TeamPhotos2024
              grr={Sonya}
              linkedIn=''
              name='Sacha Bell'
              role='Media Lead'
            />
          </div>
        </div>
      </div>
      <div id='projects' className='w-full'>
        <div className='max-w-[520px] mx-auto px-2 py-16'>
          <div className='grid lg:grid-cols-2 gap-8'>
            <TeamPhotos2024
              grr={Jas_grr}
              happy={Jas_smiley}
              linkedIn='https://www.linkedin.com/in/jasmine-noorman/'
              name='Jasmine Noorman'
              role='Brand Manager'
            />
            <TeamPhotos2024
              grr={Sharif}
              linkedIn='https://www.linkedin.com/in/adele-nicholl-636828284/'
              name='Adele Nicholl'
              role='Outreach Coordinator'
            />
          </div>
        </div>
      </div>

      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mb-5 dark:bg-motorsports-yellow' />

      <div className='w-9/12 mx-auto text-center font-bold text-3xl pb-5'>
      Technical Team
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
        <div className='max-w-[1040px] mx-auto px-2 pt-10'>
          <div className='grid md:grid-cols-3 gap-16'>
            <TeamPhotos2024
              grr={Lucas_grr}
              happy={Lucas_smiley}
              linkedIn=''
              name='Lucas Tucan'
              role='Vehicle Dyanmics Lead'
            />
            <TeamPhotos2024
              grr={Dan_grr}
              happy={Dan_smiley}
              linkedIn='https://www.linkedin.com/in/daniel-macrae-a3b318235/'
              name='Daniel MacRae'
              role='Aerodynamics Lead'
            />
            <TeamPhotos2024
              grr={Basil_grr}
              happy={Basil_smiley}
              linkedIn=''
              name='Basil El-Fahham'
              role='Chassis Lead'
            />
          </div>
        </div>
      </div>
      <div id='projects' className='w-full'>
        <div className='max-w-[1040px] mx-auto px-2 py-16'>
          <div className='grid md:grid-cols-3 gap-16'>
            <TeamPhotos2024
              grr={Dylan_grr}
              happy={Dylan_smiley}
              linkedIn=''
              name='Dylan Cassel'
              role='Powertrain Lead'
            />
            <TeamPhotos2024
              grr={Sharif_grr}
              happy={Sharif_smiley}
              linkedIn='https://www.linkedin.com/in/sharif-mohdar-53a667236/'
              name='Sharif Mohdar'
              role='Electrical Lead'
            />
          </div>
        </div>
      </div>
      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mb-5 dark:bg-motorsports-yellow' />


      {/** TODO: Need to update photos */}
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
        <div className='max-w-[1040px] mx-auto px-2 pt-10'>
          <div className='grid md:grid-cols-3 gap-16'>
            <TeamPhotos2024
              grr={Gabe_grr}
              happy={Gabe_smiley}
              linkedIn='https://www.linkedin.com/in/gabriel-yong-533851142/'
              name='Gabriel Yong'
              role='Safety Officer'
            />
            <TeamPhotos2024
              grr={Andrew_grr}
              happy={Andrew_smiley}
              linkedIn='https://www.linkedin.com/in/andrew-hampson-3a5295250/'
              name='Andrew Hampson'
              role='Workshop Officer'
            />
            <TeamPhotos2024
              grr={Julian}
              linkedIn='https://www.linkedin.com/in/shami-mohdar/'
              name='Shami Mohdar'
              role='Recruitment Manager'
            />
          </div>
        </div>
      </div>
      <div id='projects' className='w-full'>
        <div className='max-w-[520px] mx-auto px-2 py-16'>
          <div className='grid lg:grid-cols-2 gap-8'>
            <TeamPhotos2024
              grr={Emily_grr}
              happy={Emily_smiley}
              linkedIn=''
              name='Emily Martin'
              role='Secretary'
            />
            <TeamPhotos2024
              grr={Jess_grr}
              happy={Jess_smiley}
              linkedIn='https://www.linkedin.com/in/jess-gugliotta-6525bb151/'
              name='Jess Gugliotta'
              role='Research Coordinator'
            />
          </div>
        </div>
      </div>

      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mb-5 dark:bg-motorsports-yellow' />


      <div className='w-9/12 mx-auto text-center font-bold text-3xl pb-5'>
      Track Team
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
        <div className='max-w-[520px] mx-auto px-2'>
          <div className='grid lg:grid-cols-2 gap-8 py-8 mb-16'>
            <TeamPhotos2024
              grr={CamL_grr}
              happy={CamL_smiley}
              linkedIn='https://www.linkedin.com/in/cameron-lambert-a533b217b/'
              name='Cameron Lambert'
              role='Testing Manager'
            />
            <TeamPhotos2024
              grr={Jonathon_grr}
              happy={Jonathon_smiley}
              linkedIn='https://www.linkedin.com/in/jonathan-gallagher/'
              name='Jonathan Gallagher'
              role='Track Manager'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default team;
