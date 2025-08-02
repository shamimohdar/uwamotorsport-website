import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/assets/navLogoTest.png'
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../lib/ThemeContext';

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [logo, setLogo] = useState(false);
  const { isDark } = useTheme();

  const handleNav = () => {
    setNav(!nav);
  };

  const logoStyle = {
    transform: logo ? "1.5" : "1"
  }

  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY >= 20) {
  //       setShadow(true);
  //       setNavBg(true);
  //       setLogo(true);
  //     } else {
  //       setShadow(false);
  //       setNavBg(false); 
  //       setLogo(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleShadow);
  // }, []);

  return (
    <div>
      <div
        className={`fixed w-full h-20 z-[100] ease-in-out duration-300 ${
          shadow ? 'shadow-xl' : ''
        } ${
          isDark 
            ? 'bg-gradient-to-b from-black to-transparent' 
            : 'bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <div className='scale-100 w-44'>
            <Link href='/'>
              <Image
                style={logoStyle}
                src={NavLogo}
                alt='/'
                className={'cursor-pointer'}
              />
            </Link>
          </div>
          
          <div className="flex items-center">
            <ul className='hidden lg:flex text-white dark:text-white'>
              <li className='ml-12 text-lg font-bold uppercase hover:border-b border-white dark:border-white transition-colors'>
                <Link href='/'>Home</Link>
              </li>
              <li className='ml-12 text-lg font-bold uppercase hover:border-b border-white dark:border-white transition-colors'>
                <Link href='/about'>About</Link>
              </li>
              <li className='ml-12 text-lg font-bold uppercase hover:border-b border-white dark:border-white transition-colors'>
                <Link href='/team'>Team</Link>
              </li>
              {/* <li className='ml-12 text-lg font-bold uppercase hover:border-b'>
                <Link href='/cars'>Cars</Link>
              </li> */}
              {/* <li className='ml-12 text-lg font-bold uppercase hover:border-b'>
                <Link href='/test'>Test Page</Link>
              </li> */}
              <li className='ml-12 text-lg font-bold uppercase hover:border-b border-white dark:border-white transition-colors'>
                <Link href='/sponsors'>Sponsors</Link>
              </li>
              <li className='ml-12 mr-10 text-lg font-bold uppercase hover:border-b border-white dark:border-white transition-colors'>
                <Link href='/contact'>Contact Us</Link>
              </li>
            </ul>
            <ThemeToggle />
            <div
              onClick={handleNav}
              className='lg:hidden ml-4 text-white dark:text-white'
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70 dark:bg-black/70' : ''
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? `fixed left-0 top-0 w-[75%] sm:w-[60%] lg:w-[45%] h-screen p-10 ease-in duration-500 ${
                    isDark ? 'bg-black' : 'bg-white'
                  }`
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-44 items-center justify-between'>
                <Link href='/'>
                  <Image
                    src={NavLogo}
                    alt='/'
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-lg border-2 border-gray-500 dark:border-gray-500 p-2 cursor-pointer ml-4 text-gray-900 dark:text-white'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-300 dark:border-gray-600 my-4'>
                <p className='w-[85%] lg:w-[90%] py-4 text-gray-900 dark:text-white'>
                  Welcome to UWA Motorsport
                </p>
              </div>
              <div className="mb-4">
                <ThemeToggle />
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase text-gray-900 dark:text-white'>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Home
                  </li>
                </Link>
                <Link href='/about'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    About
                  </li>
                </Link>
                <Link href='/team'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Team
                  </li>
                </Link>
                {/* <Link href='/cars'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Cars
                  </li>
                </Link> */}
                {/* <Link href='/test'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Test Page
                  </li>
                </Link> */}
                <Link href='/sponsors'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Sponsors
                  </li>
                </Link>
                <Link href='/contact'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Navigation;
