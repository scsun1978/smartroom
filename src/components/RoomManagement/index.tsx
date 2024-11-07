import React from 'react';
import { Building, RefreshCw, Brain } from 'lucide-react';
import RoomCard from './RoomCard';
import RoomStatus from './RoomStatus';
import { useRoomEnvironment } from '../../hooks/useDataUpdates';
import { useLanguage } from '../../contexts/LanguageContext';

const RoomManagement = () => {
  const { t } = useLanguage();
  const [selectedFloor, setSelectedFloor] = React.useState('8');
  const environmentData = useRoomEnvironment();
  const floors = ['8', '7', '6', '5'];
  
  const roomsData = [
    {
      roomNumber: "801",
      roomType: "executiveSuite",
      currentSettings: {
        temperature: 24,
        lighting: 70,
        humidity: 45,
        airQuality: 85,
        curtains: 100
      },
      recommendedSettings: {
        temperature: 22,
        lighting: 80,
        humidity: 50,
        airQuality: 90,
        curtains: 80
      },
      guest: {
        name: "Sarah Johnson",
        age: 42,
        preferences: [t('roomMgmt.preferences.coolTemp'), t('roomMgmt.preferences.brightLight')],
        healthConditions: [t('roomMgmt.health.allergies')]
      },
      weather: {
        temperature: 28,
        humidity: 65,
        condition: t('roomMgmt.weather.sunny')
      },
      factors: {
        time: "14:30",
        season: t('roomMgmt.season.summer'),
        location: t('roomMgmt.location.southFacing')
      }
    },
    {
      roomNumber: "802",
      roomType: "deluxeRoom",
      currentSettings: {
        temperature: 23,
        lighting: 60,
        humidity: 40,
        airQuality: 88,
        curtains: 50
      },
      recommendedSettings: {
        temperature: 24,
        lighting: 65,
        humidity: 45,
        airQuality: 92,
        curtains: 70
      },
      guest: {
        name: "Michael Chen",
        age: 35,
        preferences: [t('roomMgmt.preferences.naturalLight'), t('roomMgmt.preferences.freshAir')],
      },
      weather: {
        temperature: 28,
        humidity: 65,
        condition: t('roomMgmt.weather.sunny')
      },
      factors: {
        time: "14:30",
        season: t('roomMgmt.season.summer'),
        location: t('roomMgmt.location.eastFacing')
      }
    },
    {
      roomNumber: "803",
      roomType: "premiumSuite",
      currentSettings: {
        temperature: 25,
        lighting: 50,
        humidity: 42,
        airQuality: 82,
        curtains: 30
      },
      recommendedSettings: {
        temperature: 23,
        lighting: 70,
        humidity: 48,
        airQuality: 95,
        curtains: 60
      },
      guest: {
        name: "Emma Davis",
        age: 28,
        preferences: [t('roomMgmt.preferences.warmLight'), t('roomMgmt.preferences.quiet')],
        healthConditions: [t('roomMgmt.health.tempSensitive')]
      },
      weather: {
        temperature: 28,
        humidity: 65,
        condition: t('roomMgmt.weather.sunny')
      },
      factors: {
        time: "14:30",
        season: t('roomMgmt.season.summer'),
        location: t('roomMgmt.location.westFacing')
      }
    }
  ];

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{t('roomMgmt.title')}</h1>
          <p className="text-sm text-gray-600">{t('roomMgmt.subtitle')}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Building className="w-5 h-5 text-gray-600" />
            <select 
              className="rounded-lg border-gray-300 text-sm"
              value={selectedFloor}
              onChange={(e) => setSelectedFloor(e.target.value)}
            >
              {floors.map(floor => (
                <option key={floor} value={floor}>{t('hotelView.floor')} {floor}</option>
              ))}
            </select>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
            <RefreshCw className="w-4 h-4" />
            <span>{t('roomMgmt.updateStatus')}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100">
            <Brain className="w-4 h-4" />
            <span>{t('roomMgmt.aiRecommendations')}</span>
          </button>
        </div>
      </div>

      {/* Room Status Overview */}
      <RoomStatus environmentData={environmentData} />

      {/* Room Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {roomsData.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default RoomManagement;