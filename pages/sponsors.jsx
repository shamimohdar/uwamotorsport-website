import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header.jsx';
import Sponsors from '../components/Sponsors.jsx';

import bannerImg from '../public/assets/sponsorsHeader.jpg';

const sponsors = () => {
  return (
    <>
      <Head>
        <title>UWAM | Sponsors</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
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
