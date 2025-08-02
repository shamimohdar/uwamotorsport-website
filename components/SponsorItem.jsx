import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SponsorItem = ({title, backgroundImg, projectUrl, tier}) => {
  return (
  <div>
    {tier === 'title' && (
      <Link href={projectUrl} target='_blank'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group'>
          <Image className='rounded-xl' src={backgroundImg[0]} style={{width:"100%", height:"300px", objectFit:"contain"}} alt='/' /> 
          <Image className='rounded-xl' src={backgroundImg[1]} style={{width:"100%", height:"300px", objectFit:"contain"}} alt='/' /> 
        </div>
      </Link>
    )}
    {tier === 'platinum' && (
      <Link href={projectUrl} target='_blank'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl'>
          <Image className='rounded-xl' src={backgroundImg} style={{width:"100%", height:"300px", objectFit:"contain"}} alt='/' /> 
        </div>
      </Link>
    )}
    {tier === 'gold' && (
      <Link href={projectUrl} target='_blank'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl'>
          <Image className='rounded-md' src={backgroundImg} style={{width:"100%", height:"100px", objectFit:"contain"}} alt='/' />
        </div>
      </Link>
    )}
    {tier === 'silver' && (
      <Link href={projectUrl} target='_blank'>
        <div className='relative flex items-center justify-center w-full h-24 shadow-xl rounded-xl bg-white/5 p-4'>
          <Image 
            className='rounded-sm' 
            src={backgroundImg} 
            style={{
              width: "100%", 
              height: "100%", 
              objectFit: "contain",
              maxHeight: "80px"
            }} 
            alt={title} 
          /> 
        </div>
      </Link>
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