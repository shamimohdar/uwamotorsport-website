import React, { useState } from 'react';
import Head from 'next/head';
import CarCard from '../components/Cars/CarCard';
import CarModal from '../components/Cars/CarModal';
import { carData } from '../data/cars';

export default function CarsPage() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleModalClose = () => {
    setSelectedCar(null);
  };

  return (
    <>
      <Head>
        <title>Our Cars | UWAM Motorsports</title>
        <meta 
          name="description" 
          content="Explore UWA Motorsports Team's vehicle gallery featuring our electric Formula Student cars with detailed technical specifications." 
        />
        <meta name="keywords" content="UWA Motorsports, Formula Student, Electric Vehicles, Racing Cars" />
        <meta property="og:title" content="Our Cars | UWAM Motorsports" />
        <meta property="og:description" content="Explore our Formula Student electric racing cars" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/cars/2024 car.png" />
        <link rel="icon" href="/fav.png" />
        <link rel="canonical" href="https://uwamotorsports.com/cars" />
      </Head>
      
      <main className="w-full mx-auto p-5 flex flex-col items-center pt-[160px] border-white">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">OUR GARAGE</h1>
          <hr className="w-10/12 h-0.5 bg-motorsports-yellow rounded-full my-4" />
        </header>
        
        <section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4"
          aria-label="Car gallery"
        >
          {carData.map((car) => (
            <CarCard 
              key={car.year}
              car={car}
              onSelect={handleCarSelect}
            />
          ))}
        </section>
      </main>

      {selectedCar && (
        <CarModal 
          car={selectedCar}
          onClose={handleModalClose}
        />
      )}
    </>
  );
}

// Optional: Add getStaticProps for better performance
export async function getStaticProps() {
  // In a real application, you might fetch this data from a CMS or API
  // const cars = await fetchCarsData();
  
  return {
    props: {
      // cars, // Pass as props if fetching externally
    },
    revalidate: 3600, // Revalidate every hour if using ISR
  };
}