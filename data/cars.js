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

export const carData = [
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
  {
    year: 2021,
    name: 'Phoenix',
    img: car2021,
    EV: true,
    specs: {
      chassis: "Carbon fiber monocoque",
      accumulator: {
        maxVoltage: "600V",
        maxCurrent: "800A"
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
  // Add other years as needed...
  {
    year: 2019,
    name: 'Horizon',
    img: car2019t02020,
    EV: true,
    specs: {
      chassis: "Carbon fiber monocoque",
      accumulator: {
        maxVoltage: "600V",
        maxCurrent: "800A"
      },
      dynamics: {
        suspension: "Double unequal length A-arm",
        tyres: "Hoosier 18x6-10 R25B"
      },
      tractiveSystem: {
        motor: "Emrax 208 MV",
        inverter: "Rinehart PM100DX",
        gearbox: "Single reduction 8:1"
      },
      aerodynamics: {
        frontWing: "Multi-element carbon fiber",
        sideWing: "Basic sidepod design",
        rearWing: "Single-element rear wing"
      }
    }
  }
];