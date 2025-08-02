import React from 'react';
import Head from 'next/head';

import Form from '../components/JoinForm.jsx'

const about = () => {
  return (
    <>
      <Head>
        <title>UWAM | Contact Us</title>
        <meta
          name='description'
          content="The UWA Motorsports Team has been operating since 2001 and has been building electric vehicles since 2017. We compete annually at FSAE-Australasia in ..."
        />
        <link rel='icon' href='/fav.png' />
      </Head> 
      
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <div className='w-full h-full mx-auto p-5 flex justify-center items-center pt-[120px]'>
          <h2>Contact Us</h2>
      </div>
      <hr className='w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />
      <Form />
      </div>
    </>
  );
};

export default about;