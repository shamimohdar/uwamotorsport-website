import { useEffect } from 'react';
import Image from 'next/image';
import SpecSection from './SpecSection';
import SpecItem from './SpecItem';

export default function CarModal({ car, onClose }) {
  // Handle escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-motorsports-blue rounded-xl max-w-5xl w-full mt-[80px] mb-5 max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <header className="relative p-6 border-b border-gray-600">
          <button 
            onClick={onClose}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-motorsports-yellow"
            aria-label="Close modal"
          >
            ✕
          </button>
          <h2 
            id="modal-title"
            className="text-center text-3xl font-bold text-white"
          >
            {car.name} - {car.year}
          </h2>
        </header>

        {/* Modal Content with Custom Scrollbar */}
        <div 
          className="p-6 overflow-y-auto custom-scrollbar" 
          style={{maxHeight: 'calc(90vh - 120px)'}}
        >
          {/* Car Image - Centered and Prominent */}
          <div className="relative h-80 mb-8 bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={car.img}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain drop-shadow-lg"
              alt={`${car.name} ${car.year} detailed view`}
              priority
            />
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <SpecSection title="Frame & Body">
                <SpecItem label="Chassis" value={car.specs.chassis} />
              </SpecSection>
              
              <SpecSection title="Accumulator">
                <SpecItem label="Max Voltage" value={car.specs.accumulator.maxVoltage} />
                <SpecItem label="Max Current" value={car.specs.accumulator.maxCurrent} />
                {car.specs.accumulator.bms && (
                  <SpecItem label="BMS" value={car.specs.accumulator.bms} />
                )}
              </SpecSection>

              <SpecSection title="Vehicle Dynamics">
                <SpecItem label="Suspension" value={car.specs.dynamics.suspension} />
                <SpecItem label="Tyres" value={car.specs.dynamics.tyres} />
              </SpecSection>

              {car.specs.powertrain && (
                <SpecSection title="Powertrain">
                  <SpecItem label="Engine" value={car.specs.powertrain.engine} />
                  <SpecItem label="Transmission" value={car.specs.powertrain.transmission} />
                  <SpecItem label="Differential" value={car.specs.powertrain.differential} />
                </SpecSection>
              )}
            </div>

            <div className="space-y-6">
              <SpecSection title="Tractive System">
                <SpecItem label="Motor" value={car.specs.tractiveSystem.motor} />
                <SpecItem label="Inverter" value={car.specs.tractiveSystem.inverter} />
                <SpecItem label="Gearbox" value={car.specs.tractiveSystem.gearbox} />
              </SpecSection>

              <SpecSection title="Aerodynamics">
                <SpecItem label="Front Wing" value={car.specs.aerodynamics.frontWing} />
                <SpecItem label="Side Wing" value={car.specs.aerodynamics.sideWing} />
                <SpecItem label="Rear Wing" value={car.specs.aerodynamics.rearWing} />
              </SpecSection>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}