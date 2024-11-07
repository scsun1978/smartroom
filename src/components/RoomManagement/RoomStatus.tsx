import React from 'react';
import { 
  Droplets, Wind, BedDouble, Wifi, 
  Users, Battery, ThermometerSun, Bell 
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface RoomStatusProps {
  environmentData: {
    humidity: number;
    airQuality: number;
    temperature: number;
    occupancy: number;
  };
}

const RoomStatus: React.FC<RoomStatusProps> = ({ environmentData }) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-6 h-6 text-blue-500" />
          <h3 className="font-medium text-gray-800">{t('roomMgmt.occupancy')}</h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold text-gray-800">{environmentData.occupancy}%</p>
          <p className="text-sm text-green-600">{t('roomMgmt.occupancyTrend')}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <ThermometerSun className="w-6 h-6 text-red-500" />
          <h3 className="font-medium text-gray-800">{t('roomMgmt.avgTemp')}</h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold text-gray-800">{environmentData.temperature}°C</p>
          <p className="text-sm text-gray-600">{t('roomMgmt.targetTemp')}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Battery className="w-6 h-6 text-green-500" />
          <h3 className="font-medium text-gray-800">{t('roomMgmt.energyScore')}</h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold text-gray-800">92%</p>
          <p className="text-sm text-green-600">{t('roomMgmt.energyTrend')}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Bell className="w-6 h-6 text-yellow-500" />
          <h3 className="font-medium text-gray-800">{t('roomMgmt.serviceCalls')}</h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold text-gray-800">4</p>
          <p className="text-sm text-gray-600">{t('roomMgmt.activeRequests')}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomStatus;