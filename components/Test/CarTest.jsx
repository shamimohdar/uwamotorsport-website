import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// Car Images
import car2001 from '../public/assets/cars/2001 car.png';
import car2002 from '../public/assets/cars/2002 car.png';
import car2003 from '../public/assets/cars/2003 car.png';
import car2004 from '../public/assets/cars/2004 car.png'; 
import car2005 from '../public/assets/cars/2005 car.png';
import car2006 from '../public/assets/cars/2006 car.png';
import car2007 from '../public/assets/cars/2007 car.png';
import car2008 from '../public/assets/cars/2008 car.png';
import car2009 from '../public/assets/cars/2009 car.png';
import car2010 from '../public/assets/cars/2010 car.png';
import car2011 from '../public/assets/cars/2011 car.png';
import car2012 from '../public/assets/cars/2012 car.png';
import car2013 from '../public/assets/cars/2013 car.png';
import car2018 from '../public/assets/cars/2018 car.png';
import car2019t02020 from '../public/assets/cars/2019-2020 car.png';
import car2021 from '../public/assets/cars/2021 car.png';
import car2022 from '../public/assets/cars/2022 car.png';
import car2023 from '../public/assets/cars/2023 car.png';
import car2024 from '../public/assets/cars/2024 car.png';

const CarTest = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  // Organized car data with specifications
  const carData = [
    {
      year: 2024,
      name: 'Tom',
      img: car2024,
      EV: true,
      specs: {
        chassis: "Carbon fiber monocoque",
        accumulator: {
          maxVoltage: "588V",
          maxCurrent: "35A"
        },
        dynamics: {
          suspension: "Double unequal length A-arm",
          tyres: "Hoosier 18x6-10 R25B"
        },
        tractiveSystem: {
          motor: "Beyond Motors AXM2",
          inverter: "Cascadia CM200DZ",
          gearbox: "Limited Slip Differential (4.1:1)"
        },
        aerodynamics: {
          frontWing: "Multi-element carbon fiber",
          sideWing: "Integrated sidepod wings",
          rearWing: "Dual-element DRS capable"
        }
      }
    },
    {
      year: 2023,
      name: 'Layla',
      img: car2023,
      EV: true,
      specs: {
      chassis: "Carbon fiber monocoque",
        accumulator: {
          maxVoltage: "600V",
          maxCurrent: "800A",
          bms: "Custom CAN-based BMS"
        },
        powertrain: {
          engine: "Emrax 208 MV",
          transmission: "Single-speed helical gear",
          differential: "Electronic torque vectoring"
        },
        dynamics: {
          suspension: "Double unequal length A-arm",
          tyres: "Hoosier 18x6-10 R25B"
        },
        tractiveSystem: {
          motor: "2x Emrax 208 MV",
          inverter: "Rinehart PM100DX",
          gearbox: "Single reduction 8:1"
        },
        aerodynamics: {
          frontWing: "Multi-element carbon fiber",
          sideWing: "Integrated sidepod wings",
          rearWing: "Dual-element DRS capable"
        }
      }
    },
    {
      year: 2022,
      name: 'Flo',
      img: car2022,
      EV: true,
      specs: {
      chassis: "Carbon fiber monocoque",
        accumulator: {
          maxVoltage: "600V",
          maxCurrent: "800A",
          bms: "Custom CAN-based BMS"
        },
        powertrain: {
          engine: "Emrax 208 MV",
          transmission: "Single-speed helical gear",
          differential: "Electronic torque vectoring"
        },
        dynamics: {
          suspension: "Double unequal length A-arm",
          tyres: "Hoosier 18x6-10 R25B"
        },
        tractiveSystem: {
          motor: "2x Emrax 208 MV",
          inverter: "Rinehart PM100DX",
          gearbox: "Single reduction 8:1"
        },
        aerodynamics: {
          frontWing: "Multi-element carbon fiber",
          sideWing: "Integrated sidepod wings",
          rearWing: "Dual-element DRS capable"
        }
      }
    },
    // ... other years ...
  ];

  return (
    <>
      <Head>
        <title>UWAM | Cars</title>
        <meta name='description' content="UWA Motorsports Team's vehicle gallery with technical specifications" />
        <link rel='icon' href='/fav.png' />
      </Head>
      
      <div className='w-full mx-auto p-5 flex flex-col items-center pt-[160px] border-white'>
        <h1 className='text-3xl font-bold mb-2'>OUR GARAGE</h1>
        <hr className='w-10/12 h-0.5 bg-motorsports-yellow rounded-full my-4' />
        
        {/* Cars Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4'>
          {carData.map((car) => (
            <div 
              key={car.year} 
              className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer'
              onClick={() => setSelectedCar(car)}
            >
              <div className='relative h-48 w-full'>
                <Image 
                  src={car.img} 
                  layout='fill'
                  objectFit='contain'
                  className='transition-transform duration-500 group-hover:scale-105'
                  alt={`UWA Motorsports ${car.year} - ${car.name}`}
                />
              </div>
              <div className='p-4 bg-motorsports-blue dark:bg-gray-800'>
                <h3 className='text-xl font-bold'>{car.name}</h3>
                <p className='text-gray-300 dark:text-gray-300'>
                  {car.year}{car.EV && ' • EV'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Modal/Pop Up */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
          <div className="bg-motorsports-blue rounded-xl max-w-5xl w-full mt-[80px] mb-5 max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="relative p-6 border-b border-gray-600">
              <button 
                onClick={() => setSelectedCar(null)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700"
              >
                ✕
              </button>
              <h2 className="text-center text-3xl font-bold text-white">
                {selectedCar.name} - {selectedCar.year}
              </h2>
            </div>

            {/* Modal Content with Custom Scrollbar */}
            <div className="p-6 overflow-y-auto custom-scrollbar" style={{maxHeight: 'calc(90vh - 120px)'}}>
              {/* Car Image - Centered and Prominent */}
              <div className="relative h-80 mb-8 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={selectedCar.img}
                  layout="fill"
                  objectFit="contain"
                  alt={`${selectedCar.name} ${selectedCar.year}`}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Specifications Grid - Wrapping around the content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <SpecSection title="Frame & Body">
                    <SpecItem label="Chassis" value={selectedCar.specs.chassis} />
                  </SpecSection>
                  
                  <SpecSection title="Accumulator">
                    <SpecItem label="Max Voltage" value={selectedCar.specs.accumulator.maxVoltage} />
                    <SpecItem label="Max Current" value={selectedCar.specs.accumulator.maxCurrent} />
                  </SpecSection>

                  <SpecSection title="Vehicle Dynamics">
                    <SpecItem label="Suspension" value={selectedCar.specs.dynamics.suspension} />
                    <SpecItem label="Tyres" value={selectedCar.specs.dynamics.tyres} />
                  </SpecSection>
                </div>

                <div className="space-y-6">
                  <SpecSection title="Tractive System">
                    <SpecItem label="Motor" value={selectedCar.specs.tractiveSystem.motor} />
                    <SpecItem label="Inverter" value={selectedCar.specs.tractiveSystem.inverter} />
                    <SpecItem label="Gearbox" value={selectedCar.specs.tractiveSystem.gearbox} />
                  </SpecSection>

                  <SpecSection title="Aerodynamics">
                    <SpecItem label="Front Wing" value={selectedCar.specs.aerodynamics.frontWing} />
                    <SpecItem label="Side Wing" value={selectedCar.specs.aerodynamics.sideWing} />
                    <SpecItem label="Rear Wing" value={selectedCar.specs.aerodynamics.rearWing} />
                  </SpecSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f59e0b, #d97706);
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #f59e0b, #b45309);
        }
        
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f59e0b rgba(55, 65, 81, 0.3);
        }
      `}</style>
    </>
  );
};

// Helper component for specifications
const SpecSection = ({ title, children, content }) => (
  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
    <h3 className="text-lg font-semibold mb-3 text-motorsports-yellow">{title}</h3>
    {content ? (
      <p className="text-gray-300">{content}</p>
    ) : (
      <div className="space-y-2">{children}</div>
    )}
  </div>
);

const SpecItem = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row">
    <span className="text-gray-400 sm:w-32 flex-shrink-0 font-medium">{label}:</span>
    <span className="text-gray-200 font-medium">{value}</span>
  </div>
);

export default CarTest;