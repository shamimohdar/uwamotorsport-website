import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header.jsx';
import Sponsors from '../components/Sponsors2024.jsx';

import bannerImg from '../public/assets/sponsors/sponsorsHeader.jpg';

const sponsors = () => {
  return (
    <>
      <Head>
        <title>UWAM | Sponsors</title>
        <meta
          name='description'
          content='The University of Western Australia Motorsport Team (UWAM) is a group of 
          diverse and dedicated students that work together to design, build and test 
          an electric, formula-style vehicle to participate in the Formula SAE competition. 
          The team operates on an intensive one-year build cycle, with students 
          manufacturing and testing a completely in-house design whilst simultaneously 
          self-managing finances, marketing and events.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <Header 
        img={bannerImg} 
        text={"OUR SPONSORS"} 
      />

      <div className='w-full h-full mx-auto p-2 flex justify-center items-center pb-8'></div>
        <Sponsors />
    </>
  );
};

export default sponsors;
