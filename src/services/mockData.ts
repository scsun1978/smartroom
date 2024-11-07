import { subDays, format, subHours, addHours } from 'date-fns';

// Generate random number within range
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate random float with fixed decimal places
const randomFloat = (min: number, max: number, decimals: number = 1) => {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
};

export const generateNetworkData = () => {
  const now = new Date();
  return Array.from({ length: 24 }, (_, i) => {
    const time = format(subHours(now, 23 - i), 'HH:00');
    const bandwidth = randomInRange(30, 95);
    return {
      time,
      bandwidth,
      predicted: bandwidth + randomInRange(-5, 5),
      baseline: bandwidth - randomInRange(5, 10),
    };
  });
};

export const generateOptimizationData = () => {
  return [
    {
      device: 'HVAC',
      optimizations: randomInRange(100, 150),
      timeSaved: randomInRange(30, 60),
      previousTime: randomInRange(100, 140),
      currentTime: randomInRange(60, 90)
    },
    {
      device: 'Lighting',
      optimizations: randomInRange(200, 300),
      timeSaved: randomInRange(20, 40),
      previousTime: randomInRange(80, 100),
      currentTime: randomInRange(40, 70)
    },
    {
      device: 'Security',
      optimizations: randomInRange(150, 200),
      timeSaved: randomInRange(15, 35),
      previousTime: randomInRange(70, 90),
      currentTime: randomInRange(35, 65)
    },
    {
      device: 'Entertainment',
      optimizations: randomInRange(80, 120),
      timeSaved: randomInRange(10, 30),
      previousTime: randomInRange(50, 70),
      currentTime: randomInRange(30, 50)
    }
  ];
};

export const generateEnergyData = () => {
  const hvac = randomInRange(35, 45);
  const lighting = randomInRange(20, 30);
  const electronics = randomInRange(15, 25);
  const other = 100 - hvac - lighting - electronics;
  
  return [
    { name: 'HVAC', value: hvac, color: '#3B82F6' },
    { name: 'Lighting', value: lighting, color: '#F59E0B' },
    { name: 'Electronics', value: electronics, color: '#10B981' },
    { name: 'Other', value: other, color: '#6366F1' }
  ];
};

export const generateSatisfactionTrend = () => {
  return Array.from({ length: 6 }, (_, i) => {
    const date = subDays(new Date(), (5 - i) * 30);
    return {
      month: format(date, 'MMM'),
      rating: randomFloat(4.5, 5.0)
    };
  });
};

export const generateRoomEnvironmentData = () => {
  return {
    temperature: randomInRange(20, 26),
    humidity: randomInRange(40, 60),
    airQuality: randomInRange(80, 99),
    lighting: randomInRange(0, 100),
    noise: randomInRange(30, 50),
    occupancy: randomInRange(0, 100)
  };
};

export const generateEnergyMetrics = () => {
  return {
    consumption: randomInRange(200, 300),
    savings: randomFloat(10, 20),
    renewable: randomInRange(30, 40),
    waterSaved: randomInRange(1000, 1500)
  };
};

// Update intervals (in milliseconds)
export const UPDATE_INTERVALS = {
  NETWORK: 5000,
  OPTIMIZATION: 10000,
  ENERGY: 15000,
  SATISFACTION: 60000,
  ENVIRONMENT: 3000,
  METRICS: 8000
};