import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Img1 from '../public/assets/main/sharif.jpg';
import Img2 from '../public/assets/main/smile.jpg';


const About = () => {
  const [header, setHeader] = useState(false);
  
  useEffect(() => {
    const reveal = () => {
      if (window.scrollY >= 400) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener('scroll', reveal);
  }, []);

  return (
    <div id="content">
      
      <div className = 'w-full h-full mx-auto p-5 flex justify-center items-center pt-[100px]'
      // { 
      //   header ? 'opacity-100 w-full h-full mx-auto p-5 flex justify-center items-center pt-[100px]' : ' animate-fadeIn opacity-0' 
      // }
      >
        <h2 className=' font-bold lg:text-7xl text-5xl'>Welcome</h2>
      </div>
      
      <hr className='w-10/12 h-0.5 mx-auto bg-motorsports-yellow border-0 rounded-2 mt-2 mb-12 dark:bg-motorsports-yellow' />
          
      <div className='lg:flex mx-auto lg:w-9/12'>
        <div className='lg:w-1/2 lg:p-10 px-10'>
        <Image src={Img1} style={{objectFit:'cover', height:'100%'}} alt='/' />
        </div>
        <div className='text-justify lg:w-1/2 p-10 align-middle items-center'>
          <h2 className='font-bold lg:text-4xl text-3xl lg:pb-2'>Who We Are</h2>
          <p className='py-2 text-white lg:text-2xl text-lg'>
            The University of Western Australia Motorsport Team (UWAM) is a group of 
            diverse and dedicated students that work together to design, build and test 
            an electric, formula-style vehicle to participate in the Formula SAE competition. 
            The team operates on an intensive one-year build cycle, with students 
            manufacturing and testing a completely in-house design whilst simultaneously 
            self-managing finances, marketing and events. 
            </p>
            <p className='py-2 text-white lg:text-2xl text-lg'>
            
            </p>
        </div>
      </div>

      <div className='lg:flex mx-auto lg:w-9/12 align-middle lg:pb-20 pb-0'>
        
        <div className='lg:w-1/2 lg:order-last lg:p-10 px-10'>
          <Image src={Img2} style={{objectFit:'cover', height:'100%'}} alt='/' />
        </div>


        {/* What is FSAE? (look at prospectus), 1-2 paragraphs */}
        <div className='text-justify lg:w-1/2 p-10'>
          <h2 className='font-bold lg:text-4xl text-3xl lg:pb-2'>The Competition</h2>
          <p className='py-2 text-white lg:text-2xl text-lg'>
          Formula SAE is the largest engineering student-design competition in the 
          world, consisting of over 500 teams globally. The premise of the competition 
          dictates that a fictional manufacturing company has contracted the team to 
          develop a prototype open-wheeled racecar. 
          The car is then rigorously assessed at various events, both static and dynamic. 
          These competitions take place across the world, in locations such as North 
          America, England, Germany, and our home competition in Victoria, Australia.
          </p>
          <p className='py-2 text-white lg:text-2xl text-lg'>
          Formula SAE is a student design competition initiated by the Society of Automotive
          Engineers in 1979. The concept behind the competition stipulates that a fictional
          manufacturing company has contracted a student design team to develop a small
          formula-style racecar. The prototype vehicle is to be evaluated for its potential as a
          production item.
          </p>
        </div>
      </div>
          
    </div>
  );
};

export default About;