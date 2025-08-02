import Image from 'next/image';

export default function CarCard({ car, onSelect }) {
  const handleClick = () => {
    onSelect(car);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(car);
    }
  };

  return (
    <article 
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-motorsports-yellow border-motorsports-yellow"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${car.name} ${car.year}`}
    >
      <div className="relative h-48 w-full bg-transparent border-b-2 border-motorsports-yellow">
        <Image 
          src={car.img} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          alt={`UWA Motorsports ${car.year} Formula Student car named ${car.name}`}
          priority={car.year >= 2022} // Prioritize newer cars
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
      <div className="p-4 bg-motorsports-blue dark:bg-gray-800">
        <h2 className="text-xl font-bold text-white">{car.name}</h2>
        <p className="text-gray-300">
          {car.year}{car.EV && ' • Electric Vehicle'}
        </p>
      </div>
    </article>
  );
}