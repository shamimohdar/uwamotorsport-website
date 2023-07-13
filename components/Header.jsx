import React, { useState } from 'react';
import Image from 'next/image';

const Header = ({img, text}) => {
    return (
        <div className="relative w-full h-full overflow-hidden">
        <div className="absolute z-10 w-[100vw] h-[100vh] bg-gradient-to-t from-black to-transparent"></div>
            <Image src={img} style={{height: "100vh", width: "100vw", objectFit: "cover", display: "flex", opacity: "75%"}}  alt="/" />
        <div className='absolute inset-x-0 bottom-10 flex justify-center items-center z-20 mb-10'>
            <h2 className="md:text-7xl">{text}</h2>
        </div>
        </div>
    )
}

export default Header