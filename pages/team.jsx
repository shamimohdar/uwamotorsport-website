import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header.jsx';
import outsideTeamPhoto from '../public/assets/team/2025/outside team photo.jpg';
import insideTeamPhoto from '../public/assets/team/2025/garage team photo.jpg';
import TeamPhotos2024 from '../components/TeamPhotos2024.jsx';

import bannerImg from '../public/assets/team/2024/Team page top banner.jpg';

// Executive Team
import Tom_serious from '../public/assets/team/2025/tom serious.jpg';
import Tom_smile from '../public/assets/team/2025/tom smile.jpg';
import Josh_serious from '../public/assets/team/2025/josh serious.jpg';
import Josh_smile from '../public/assets/team/2025/josh smile.jpg';
import Jasmine_serious from '../public/assets/team/2025/jasmine serious.jpg';
import Jasmine_smile from '../public/assets/team/2025/jasmine smile.jpg';

// Business Team
import Alicia_serious from '../public/assets/team/2025/alicia serious.jpg';
import Alicia_smile from '../public/assets/team/2025/alicia smile.jpg';
import Clarissa_serious from '../public/assets/team/2025/clarissa serious.jpg';
import Clarissa_smile from '../public/assets/team/2025/clarissa smile.jpg';
import Joshoa_serious from '../public/assets/team/2025/joshoa serious.jpg';
import Joshoa_smile from '../public/assets/team/2025/joshoa smile.jpg';
import Anika_serious from '../public/assets/team/2025/anika serious.jpg';
import Anika_smile from '../public/assets/team/2025/anika smile.jpg';

// Technical Team
import Eloise_serious from '../public/assets/team/2025/eloise serious.jpg';
import Eloise_smile from '../public/assets/team/2025/eloise smile.jpg';
import Sohaib_serious from '../public/assets/team/2025/sohaib serious.jpg';
import Sohaib_smile from '../public/assets/team/2025/sohaib smile.jpg';
import Jess_serious from '../public/assets/team/2025/jess serious.jpg';
import Jess_smile from '../public/assets/team/2025/jess smile.jpg';
import Siobhan_serious from '../public/assets/team/2025/siobhan serious.jpg';
import Siobhan_smile from '../public/assets/team/2025/siobhan smile.jpg';
import Bilal_serious from '../public/assets/team/2025/bilal serious.jpg';
import Bilal_smile from '../public/assets/team/2025/bilal smile.jpg';

// Auxiliary Team
import Emily_serious from '../public/assets/team/2025/emily serious.jpg';
import Emily_smile from '../public/assets/team/2025/emily smile.jpg';
import Michael_serious from '../public/assets/team/2025/michael serious.jpg';
import Michael_smile from '../public/assets/team/2025/michael smile.jpg';
import Shami_serious from '../public/assets/team/2025/shami serious.jpg';
import Shami_smile from '../public/assets/team/2025/shami smile.jpg';

// Track Team
import Cam_serious from '../public/assets/team/2025/cam serious.jpg';
import Cam_smile from '../public/assets/team/2025/cam smile.jpg';
import Seb_serious from '../public/assets/team/2025/seb serious.jpg';
import Seb_smile from '../public/assets/team/2025/seb smile.jpg';

const team = () => {
  return (
    <>
      <Head>
        <title>UWAM | Team</title>
        <meta
          name='description'
          content='Made by Shami Mohdar :)'
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
              grr={Josh_serious}
              happy={Josh_smile}
              linkedIn='https://au.linkedin.com/in/josh-jenkins-b8a0a4180'
              name='Joshua Jenkins'
              role='Technical Director'
            />
            <div className='h-full'>
            <TeamPhotos2024
              grr={Tom_serious}
              happy={Tom_smile}
              linkedIn=''
              name='Tom Webb'
              role='Project Manager'
            />
            </div>
            <TeamPhotos2024
              grr={Jasmine_serious}
              happy={Jasmine_smile}
              linkedIn='https://www.linkedin.com/in/jasmine-noorman/'
              name='Jasmine Noorman'
              role='Business Director'
              style='py-30'
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
          The business team in a Formula Student team manages finances, secures sponsorships, and 
          handles marketing and public relations. They ensure the team has the necessary resources 
          to design and race the car, while also promoting the team&apos;s brand and securing partnerships 
          crucial for competition success.
        </p>
      </div>
      
      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-10 dark:bg-motorsports-yellow' />

      <div id='projects' className='w-full'>
        <div className='max-w-[1300px] mx-auto px-2 pt-10 pb-24'>
          <div className='grid md:grid-cols-4 gap-16'>
            <TeamPhotos2024
              grr={Clarissa_serious}
              happy={Clarissa_smile}
              linkedIn=''
              name='Clarissa Sin'
              role='Media & Marketing Lead'
            />
            <TeamPhotos2024
              grr={Joshoa_serious}
              happy={Joshoa_smile}
              linkedIn='https://www.linkedin.com/in/joshoa-zilani-171b7b271/'
              name='Joshoa Zilani'
              role='Finance Lead'
            />
            <TeamPhotos2024
              grr={Alicia_serious}
              happy={Alicia_smile}
              linkedIn='https://www.linkedin.com/in/alicia-feng-98801b250/'
              name='Alicia Feng'
              role='Branding Lead'
            />
            <TeamPhotos2024
              grr={Anika_serious}
              happy={Anika_smile}
              linkedIn='https://www.linkedin.com/in/anika-paul-744318250/'
              name='Anika Paul'
              role='Outreach Lead'
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
        The technical team is responsible for coordinating the design and manufacturing of the car. 
        Composed of highly skilled engineers, mechanics, and technicians, this dedicated group is 
        responsible for the design, development, and maintenance of the race car. They work closely 
        with the drivers and other members of the team to optimize the performance, reliability, 
        and safety of the vehicle.
        </p>
      </div>

      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-10 dark:bg-motorsports-yellow' />

      <div id='projects' className='w-full'>
        <div className='max-w-[1040px] mx-auto px-2 pt-10'>
          <div className='grid md:grid-cols-3 gap-16'>
            <TeamPhotos2024
              grr={Bilal_serious}
              happy={Bilal_smile}
              linkedIn='https://www.linkedin.com/in/bilalwaseem2004/'
              name='Bilal Waseem'
              role='Vehicle Dynamics Lead'
            />
            <TeamPhotos2024
              grr={Sohaib_serious}
              happy={Sohaib_smile}
              linkedIn='https://www.linkedin.com/in/sohaib4hmed/'
              name='Sohaib Ahmed'
              role='Aerodynamics Lead'
            />
            <TeamPhotos2024
              grr={Eloise_serious}
              happy={Eloise_smile}
              linkedIn=''
              name='Eloise von Ahlefeld'
              role='Chassis Lead'
            />
          </div>
        </div>
      </div>
      <div id='projects' className='w-full'>
        <div className='max-w-[640px] mx-auto px-2 py-16'>
          <div className='grid lg:grid-cols-2 gap-8'>
            <TeamPhotos2024
              grr={Jess_serious}
              happy={Jess_smile}
              linkedIn='https://www.linkedin.com/in/jess-gugliotta-6525bb151/'
              name='Jessica Gugliotta'
              role='Powertrain Lead'
            />
            <TeamPhotos2024
              grr={Siobhan_serious}
              happy={Siobhan_smile}
              linkedIn='https://www.linkedin.com/in/siobhan-fraser-572b9735b/'
              name='Siobhan Fraser'
              role='Electrical Lead'
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
        <div className='max-w-[1040px] mx-auto px-2 pt-10 pb-24'>
          <div className='grid md:grid-cols-3 gap-16'>
            <TeamPhotos2024
              grr={Michael_serious}
              happy={Michael_smile}
              linkedIn='https://www.linkedin.com/in/mjhaus/'
              name='Michael Holmes'
              role='Safety Officer'
            />
            <TeamPhotos2024
              grr={Shami_serious}
              happy={Shami_smile}
              linkedIn='https://www.linkedin.com/in/shami-mohdar/'
              name='Shami Mohdar'
              role='Recruitment Manager'
            />
            <TeamPhotos2024
              grr={Emily_serious}
              happy={Emily_smile}
              linkedIn='https://www.linkedin.com/in/emily-martin-489a20354/'
              name='Emily Martin'
              role='Secretary'
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
        The track team plays a crucial role in ensuring the smooth and efficient operation of track days. 
        Their primary responsibility is to organize and manage these events, coordinating all necessary 
        logistics to ensure they run seamlessly. The team works closely with the technical team to execute 
        testing items, ensuring technical requirements or tests are properly integrated into the day&apos;s schedule. 
        By effectively managing these elements, the track team ensures that the track days are productive, 
        safe, and meet the goals of team.
        </p>
      </div>

      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-10 dark:bg-motorsports-yellow' />
      <div id='projects' className='w-full'>
        <div className='max-w-[640px] mx-auto px-2'>
          <div className='grid lg:grid-cols-2 gap-8 py-8 mb-16'>
            <TeamPhotos2024
              grr={Cam_serious}
              happy={Cam_smile}
              linkedIn='https://www.linkedin.com/in/cameron-lambert-a533b217b/'
              name='Cameron Lambert'
              role='Testing Manager'
            />
            <TeamPhotos2024
              grr={Seb_serious}
              happy={Seb_smile}
              linkedIn='https://www.linkedin.com/in/sebastien-sin-ab8992334/'
              name='Sebastian Sin'
              role='Race Engineer'
            />
          </div>
        </div>
      </div>

      <div className='w-9/12 mx-auto text-center font-bold text-4xl pt-10 pb-8'>
        Our 2024 Competition Team
      </div>
      <hr className='w-8/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-16 dark:bg-motorsports-yellow' />
      <div className='w-8/12 m-auto flex justify-center pb-20'>
        <Image src={insideTeamPhoto} alt='/' />
      </div>
    </>
  );
};

export default team;
