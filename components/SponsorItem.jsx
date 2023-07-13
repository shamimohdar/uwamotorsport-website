import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SponsorItem = ({title, backgroundImg, projectUrl, tier}) => {
  return (
  <div>
    {tier === 'title' && (
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#ffcc00] to-[#ffe684]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg[0]} style={{width:"100%", height:"300px", objectFit:"contain"}} alt='/' /> 
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg[1]} style={{width:"100%", height:"300px", objectFit:"contain"}} alt='/' /> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-black tracking-wider text-center pb-4'>{title}</h3>
          <Link href={projectUrl} target='_blank'>
            <p className='text-center py-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
      </div>
    )}
    {tier === 'platinum' && (
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#ffcc00] to-[#ffe684]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} style={{width:"100%", height:"300px", objectFit:"contain"}} alt='/' /> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-black tracking-wider text-center pb-4'>{title}</h3>
          <Link href={projectUrl} target='_blank'>
            <p className='text-center py-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
      </div>
    )}
    {tier === 'gold' && (
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#ffcc00] to-[#ffe684]'>
        <Image className='rounded-md group-hover:opacity-10' src={backgroundImg} style={{width:"100%", height:"100px", objectFit:"contain"}} alt='/' /> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <Link href={projectUrl} target='_blank'>
            <p className='text-center p-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
      </div>
    )}
    {tier === 'silver' && (
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#ffcc00] to-[#ffe684]'>
        <Image className='rounded-sm group-hover:opacity-10' src={backgroundImg} style={{width:"300px", height:"100px", objectFit:"contain"}} alt='/' /> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <Link href={projectUrl} target='_blank'>
            <p className='text-center p-3 rounded-lg bg-black text-white font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
      </div>
    )}
    {tier === 'bronze' && (
      <Link href={projectUrl} target='_blank'>
        <p className='font-bold text-center text-lg cursor-pointer'>{title}</p>
      </Link>
    )}
    </div>
  )
}

export default SponsorItem