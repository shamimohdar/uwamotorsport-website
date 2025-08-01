import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const TeamPhotos2024 = ({grr, happy, linkedIn, name, role}) => {
  return (
    <div className='relative items-center justify-center text-center rounded-xl group'>

      <Image src={grr} className='rounded-3xl object-cover mx-auto transition-transform duration-300 transform hover:scale-110' alt='/' /> 
      <Image src={happy} className='rounded-3xl object-cover absolute mx-auto absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100' alt='/' /> 
      {linkedIn != '' && (
        <div className='hidden group-hover:block absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <Link href={linkedIn} target="_blank" rel="noopener noreferrer">
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>
      </div>
      )}
      <div className='relative text-center pt-5 font-semibold'>
      <p className='text-2xl'>
        {name}
      </p>
      <p className='text-xl font-normal'>
        {role}
      </p>
    </div>
 </div>
  )
}

export default TeamPhotos2024