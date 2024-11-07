import React from 'react';
import { 
  ThermometerSun, Sun, Wind, Droplets, 
  ArrowRight, UserCheck, Calendar, MapPin 
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface RoomSettings {
  temperature: number;
  lighting: number;
  humidity: number;
  airQuality: number;
  curtains: number;
}

interface RoomCardProps {
  roomNumber: string;
  roomType: string;
  currentSettings: RoomSettings;
  recommendedSettings: RoomSettings;
  guest?: {
    name: string;
    age: number;
    preferences: string[];
    healthConditions?: string[];
  };
  weather: {
    temperature: number;
    humidity: number;
    condition: string;
  };
  factors: {
    time: string;
    season: string;
    location: string;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({
  roomNumber,
  roomType,
  currentSettings,
  recommendedSettings,
  guest,
  weather,
  factors
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {t('roomMgmt.room')} {roomNumber}
          </h3>
          <p className="text-sm text-gray-600">{t(`roomMgmt.roomTypes.${roomType}`)}</p>
        </div>
        {guest && (
          <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
            <UserCheck className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-700">{t('roomMgmt.occupied')}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Current Settings */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-600">
            {t('roomMgmt.currentSettings')}
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ThermometerSun className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-600">{t('roomMgmt.temperature')}</span>
              </div>
              <span className="text-sm font-medium">{currentSettings.temperature}°C</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600">{t('roomMgmt.lighting')}</span>
              </div>
              <span className="text-sm font-medium">{currentSettings.lighting}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600">{t('roomMgmt.humidity')}</span>
              </div>
              <span className="text-sm font-medium">{currentSettings.humidity}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wind className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">{t('roomMgmt.airQuality')}</span>
              </div>
              <span className="text-sm font-medium">{currentSettings.airQuality}%</span>
            </div>
          </div>
        </div>

        {/* Recommended Settings */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-600">
            {t('roomMgmt.recommendedSettings')}
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ThermometerSun className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-600">{t('roomMgmt.temperature')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">{currentSettings.temperature}°C</span>
                <ArrowRight className="w-3 h-3 text-blue-500" />
                <span className="text-sm font-medium text-blue-600">{recommendedSettings.temperature}°C</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600">{t('roomMgmt.lighting')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">{currentSettings.lighting}%</span>
                <ArrowRight className="w-3 h-3 text-blue-500" />
                <span className="text-sm font-medium text-blue-600">{recommendedSettings.lighting}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600">{t('roomMgmt.humidity')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">{currentSettings.humidity}%</span>
                <ArrowRight className="w-3 h-3 text-blue-500" />
                <span className="text-sm font-medium text-blue-600">{recommendedSettings.humidity}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wind className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">{t('roomMgmt.airQuality')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">{currentSettings.airQuality}%</span>
                <ArrowRight className="w-3 h-3 text-blue-500" />
                <span className="text-sm font-medium text-blue-600">{recommendedSettings.airQuality}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation Factors */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="text-sm font-semibold text-gray-600 mb-4">
          {t('roomMgmt.recommendationFactors')}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">
                {t('roomMgmt.timeAndSeason')}
              </span>
            </div>
            <p className="text-xs text-gray-600">{factors.time}, {factors.season}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-gray-700">
                {t('roomMgmt.locationAndWeather')}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              {factors.location}, {weather.condition}
            </p>
          </div>
        </div>
        {guest && (
          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <UserCheck className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">
                {t('roomMgmt.guestFactors')}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              {t('roomMgmt.age')}: {guest.age}, 
              {t('roomMgmt.preferences')}: {guest.preferences.join(', ')}
              {guest.healthConditions && (
                <span className="block mt-1 text-blue-600">
                  {t('roomMgmt.healthConsiderations')}: {guest.healthConditions.join(', ')}
                </span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomCard;