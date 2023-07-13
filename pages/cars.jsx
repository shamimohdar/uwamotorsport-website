import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Timeline from '../components/Timeline.jsx';
import Timeline2 from '../components/Timeline2.jsx';

const about = () => {
  return (
    <>
      <Head>
        <title>UWAM | Cars</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head> 
      <div className='w-full h-full mx-auto p-5 flex justify-center items-center pt-[160px]'>
        <h2>OUR GARAGE</h2>
    </div>
    <hr className='w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
      <Timeline />  
      <div className='p-24'>
        {/* <Timeline2 /> */}
      </div>
    </>
  );
};

export default about;
