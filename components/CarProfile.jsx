import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CarProfile = ({name, year, carImg, EV}) => {
  return (
  <div className='relative flex items-left justify-left h-auto w-full'>
  <Image className='w-[30%] h-[170px] object-contain transition-transform duration-300 transform hover:scale-110' src={carImg} alt='/' /> 
    <p className='font-bold text-center text-lg cursor-pointer'>{name}</p>
    <p className='font-bold text-center text-lg cursor-pointer'>{year}</p>
    {/* 
    Chassis

    Accumulator Specs:
    Max voltage
    Max current
    Custom BMS

    Powertrain:
    Engine
    Transmission
    Differential

    Vehicle Dynamics:
    Suspension
    Tyres

    Tractive System:
    Motor
    Inverter
    Gearbox

    Aerodynamics:
    Front Wing
    Side Wing
    Rear Wing
    */}
    {EV ==='true' && (
        <p className=''>EV</p>
      )}
    {EV ==='false' && (
        <p className=''>IC</p>
    )}
 </div>
  )
}

export default CarProfile