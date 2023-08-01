import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faCar, faGears, faCode } from '@fortawesome/free-solid-svg-icons'

import aImg from '../public/potential photos/2022-car.jpg'
import bImg from '../public/potential photos/2021-car.jpeg'

const Timeline = () => {
    return (
        <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 w-10/12 sm:mx-auto px-2 sm:px-0">

            <div className="relative antialiased">

            <div className="hidden sm:block w-1 bg-timeline-yellow absolute h-full left-1/2 transform -translate-x-1/2"></div>

            <div className="mt-6 sm:mt-0 sm:mb-12 flex align-middle">
                
               <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full pr-24">
                        <Image src= {aImg}  alt="/" />
                    </div>
                </div>
                
                <div className="rounded-full bg-timeline-yellow w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2"></div>
                <div className="relative flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                        <div className=" col-xs rounded-lg bg-motorsports-blue pr-5 pl-5 pt-7 pb-7">
                            <h2 className="flex py-8 pl-10">2022</h2>
                            <div className="grid grid-flow-row-dense md:grid-cols-10 md:grid-rows-4 gap-y-8">

                                {/* Row 1 */}
                                <div className="col-span-1 w-8 flex items-start">
                                </div>
                                <div className="col-span-4 flex">    
                                    <div>
                                        <div className="flex">
                                            <h3 className="text-md pr-2">Peak Power:</h3>
                                            <p>107 hp</p>
                                        </div>
                                        <div className="flex">
                                            <h3 className="text-md pr-2">Peak Torque:</h3>
                                            <p>240 Nm</p>
                                        </div>
                                        <div className="flex">
                                            <h3 className="text-md pr-2">Weight:</h3>
                                            <p>249 kg</p>
                                        </div>
                                        <div className="flex">
                                            <h3 className="text-md pr-2">Battery:</h3>
                                            <p>400V 7kWh capacity made up of 768 18650 cells</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ring-2 ring-white w-10 h-10 rounded-full">
                                        <FontAwesomeIcon icon={faCar} style={{width:"20px", margin:"10px"}} size="xs" />
                                    </div>
                                <div className="col-span-4 flex">
                                    <div>
                                        <h3 className="align-middle text-xl underline">Chassis</h3>
                                        <p>Full carbon fibre monocoque with an aluminium honeycomb core</p>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="col-span-1 w-8 flex items-start">
                                    <div className="ring-2 ring-white w-10 h-10 rounded-full">
                                        <FontAwesomeIcon icon={faGears} style={{width:"20px", margin:"10px"}} size="xs" />
                                    </div>
                                </div>
                                <div className="col-span-4 flex">    
                                    <div>
                                        <h3 className="align-middle text-xl underline">Powertrain</h3>
                                        <p>Phi-Power 271 electric motor through a custom transaxle with a Rinehart PM100DX inverter</p>
                                    </div>
                                </div>
                                <div className="col-span-1 items-center w-10">
                                    <FontAwesomeIcon icon={faCode} style={{width:"20px", display:"flex", margin:"10px"}} size="xs" />
                                </div>
                                <div className="col-span-4 flex">
                                    <div>
                                        <h3 className="align-middle text-xl underline">Front Suspension</h3>
                                        <p>Double wishbone with direct actuating Ohlins TTX-25 shocks and anti roll bar</p>
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="col-span-1 w-8 flex items-start">
                                    <div className="ring-2 ring-white w-10 h-10 rounded-full">
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} style={{width:"20px", margin:"10px"}} size="xs" />
                                    </div>
                                </div>
                                <div className="col-span-4 flex">    
                                    <div>
                                        <h3 className="align-middle text-xl underline">Aerodynamics</h3>
                                            <p>
                                                <h3 className="text-md pr-2">Front Wing:</h3>Carbon fibre with a foam core, doubled wing element
                                            </p>
                                        
                                        <p>
                                                <h3 className="text-md pr-2">Rear Wing:</h3>Carbon fibre with a foam core, 3 wing elements
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-1 items-center w-10">
                                    <FontAwesomeIcon icon={faCode} style={{width:"20px", display:"flex", margin:"10px"}} size="xs" />
                                </div>
                                <div className="col-span-4 flex">
                                    <div>
                                        <h3 className="align-middle text-xl underline">Rear Suspension</h3>
                                        <p>Double wishbone with pushrod actuated Ohlins TTX-25 shocks and anti roll bar</p>
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="col-span-1 w-8 flex items-start">
                                    <div className="ring-2 ring-white w-10 h-10 rounded-full">
                                        <FontAwesomeIcon icon={faGears} style={{width:"20px", margin:"10px"}} size="xs" />
                                    </div>
                                </div>
                                <div className="col-span-4 flex">    
                                    <div>
                                        <h3 className="align-middle text-xl underline">Tyres</h3>
                                        <p>Hoosier R25B 16 x 7.5</p>
                                    </div>
                                </div>
                                <div className="col-span-1 items-center w-10">
                                    <FontAwesomeIcon icon={faCode} style={{width:"20px", display:"flex", margin:"10px"}} size="xs" />
                                </div>
                                <div className="col-span-4 flex">
                                    <div>
                                        <h3 className="align-middle text-xl underline">Dashboard</h3>
                                        <p>AEM CD-5 with GPS and data logging</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="relative flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className=" col-xs rounded-lg bg-motorsports-blue pr-5 pl-5 pt-7 pb-7">
                                <h2 className="flex py-8 pl-10">2021</h2>
                                <div className="grid grid-flow-row-dense md:grid-cols-10 md:grid-rows-4 gap-y-8">

                                    {/* Row 1 */}
                                    <div className="col-span-1 w-8 flex items-start">
                                    </div>
                                    <div className="col-span-4 flex">    
                                        <div>
                                            <div className="flex">
                                                <h3 className="text-md pr-2">Peak Power:</h3>
                                                <p>107 hp</p>
                                            </div>
                                            <div className="flex">
                                                <h3 className="text-md pr-2">Peak Torque:</h3>
                                                <p>240 Nm</p>
                                            </div>
                                            <div className="flex">
                                                <h3 className="text-md pr-2">Weight:</h3>
                                                <p>249 kg</p>
                                            </div>
                                            <div className="flex">
                                                <h3 className="text-md pr-2">Battery:</h3>
                                                <p>400V 7kWh capacity made up of 768 18650 cells</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ring-2 ring-white w-10 h-10 rounded-full">
                                            <FontAwesomeIcon icon={faCar} style={{width:"20px", margin:"10px"}} size="xs" />
                                        </div>
                                    <div className="col-span-4 flex">
                                        <div>
                                            <h3 className="align-middle text-xl underline">Chassis</h3>
                                            <p>Full carbon fibre monocoque with an aluminium honeycomb core</p>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="col-span-1 w-8 flex items-start">
                                        <div className="ring-2 ring-white w-10 h-10 rounded-full">
                                            <FontAwesomeIcon icon={faGears} style={{width:"20px", margin:"10px"}} size="xs" />
                                        </div>
                                    </div>
                                    <div className="col-span-4 flex">    
                                        <div>
                                            <h3 className="align-middle text-xl underline">Powertrain</h3>
                                            <p>Phi-Power 271 electric motor through a custom transaxle with a Rinehart PM100DX inverter</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 items-center w-10">
                                        <FontAwesomeIcon icon={faCode} style={{width:"20px", display:"flex", margin:"10px"}} size="xs" />
                                    </div>
                                    <div className="col-span-4 flex">
                                        <div>
                                            <h3 className="align-middle text-xl underline">Front Suspension</h3>
                                            <p>Double wishbone with direct actuating Ohlins TTX-25 shocks and anti roll bar</p>
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="col-span-1 w-8 flex items-start">
                                        <div className="ring-2 ring-white w-10 h-10 rounded-full">
                                            <FontAwesomeIcon icon={faArrowAltCircleDown} style={{width:"20px", margin:"10px"}} size="xs" />
                                        </div>
                                    </div>
                                    <div className="col-span-4 flex">    
                                        <div>
                                            <h3 className="align-middle text-xl underline">Aerodynamics</h3>
                                                <p>
                                                    <h3 className="text-md pr-2">Front Wing:</h3>Carbon fibre with a foam core, doubled wing element
                                                </p>
                                            
                                            <p>
                                                    <h3 className="text-md pr-2">Rear Wing:</h3>Carbon fibre with a foam core, 3 wing elements
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 items-center w-10">
                                        <FontAwesomeIcon icon={faCode} style={{width:"20px", display:"flex", margin:"10px"}} size="xs" />
                                    </div>
                                    <div className="col-span-4 flex">
                                        <div>
                                            <h3 className="align-middle text-xl underline">Rear Suspension</h3>
                                            <p>Double wishbone with pushrod actuated Ohlins TTX-25 shocks and anti roll bar</p>
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="col-span-1 w-8 flex items-start">
                                        <div className="ring-2 ring-white w-10 h-10 rounded-full">
                                            <FontAwesomeIcon icon={faGears} style={{width:"20px", margin:"10px"}} size="xs" />
                                        </div>
                                    </div>
                                    <div className="col-span-4 flex">    
                                        <div>
                                            <h3 className="align-middle text-xl underline">Tyres</h3>
                                            <p>Hoosier R25B 16 x 7.5</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 items-center w-10">
                                        <FontAwesomeIcon icon={faCode} style={{width:"20px", display:"flex", margin:"10px"}} size="xs" />
                                    </div>
                                    <div className="col-span-4 flex">
                                        <div>
                                            <h3 className="align-middle text-xl underline">Dashboard</h3>
                                            <p>AEM CD-5 with GPS and data logging</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-screen sm:w-1/2 sm:pl-8 absolute left-2/4">
                            <Image src= {bImg} alt="/" />
                        </div>
                    </div>
                    <div className="rounded-full bg-timeline-yellow w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    </div>
                </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                            Picture of car here
                        </div>
                        </div>
                        <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                            Text here
                        </div>
                        </div>
                    </div>
                    <div className="rounded-full bg-timeline-yellow w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    </div>
                </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                            Picture of car here
                        </div>
                        </div>
                        <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                            Text here
                        </div>
                        </div>
                    </div>
                    <div className="rounded-full bg-timeline-yellow w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    </div>
                </div>
            </div>



            </div>

        </div>
        </div>
    )
}

export default Timeline