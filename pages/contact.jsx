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
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head> 
    <div className="bg-black text-white">
      <div className='w-full h-full mx-auto p-5 flex justify-center items-center pt-[120px]'>
        <h2>Contact Us</h2>
    </div>
    <hr className='w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-5 dark:bg-motorsports-yellow' />

    {/* Send to UWAM email */}
    <Form />
    </div>
    </>
  );
};

export default about;