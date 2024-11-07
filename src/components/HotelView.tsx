import React, { useState } from 'react';
import { 
  Bed, ThermometerSun, Wifi, Lock, 
  Sun, Moon, Wind, Droplets, Coffee,
  Users, Timer, Battery
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HotelView = () => {
  const { t } = useLanguage();
  const [selectedFloor, setSelectedFloor] = useState('8');
  const [filterStatus, setFilterStatus] = useState('all');

  const rooms = [
    {
      number: '801',
      type: 'executiveSuite',
      status: 'occupied',
      temperature: '22°C',
      humidity: '45%',
      lighting: '60%',
      curtains: 'Open',
      tv: 'On',
      guest: 'John Smith',
      checkIn: '2024-03-10',
      checkOut: '2024-03-15',
      energyUsage: '2.4kWh',
      lastCleaned: '2'
    },
    {
      number: '802',
      type: 'deluxeRoom',
      status: 'available',
      temperature: '24°C',
      humidity: '40%',
      lighting: '0%',
      curtains: 'Closed',
      tv: 'Off',
      guest: null,
      checkIn: null,
      checkOut: null,
      energyUsage: '0.8kWh',
      lastCleaned: '1'
    },
    {
      number: '803',
      type: 'premiumSuite',
      status: 'maintenance',
      temperature: '23°C',
      humidity: '42%',
      lighting: '100%',
      curtains: 'Open',
      tv: 'Off',
      guest: null,
      checkIn: null,
      checkOut: null,
      energyUsage: '1.2kWh',
      lastCleaned: '30'
    },
    {
      number: '804',
      type: 'executiveSuite',
      status: 'occupied',
      temperature: '21°C',
      humidity: '48%',
      lighting: '80%',
      curtains: 'Open',
      tv: 'On',
      guest: 'Sarah Johnson',
      checkIn: '2024-03-11',
      checkOut: '2024-03-14',
      energyUsage: '2.1kWh',
      lastCleaned: '4'
    }
  ];

  const filteredRooms = rooms.filter(room => {
    if (filterStatus === 'all') return true;
    return room.status === filterStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'occupied':
        return 'bg-green-100 text-green-800';
      case 'available':
        return 'bg-blue-100 text-blue-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoomTypeTranslation = (type: string) => {
    return t(`hotelView.room.${type}`);
  };

  const getStatusTranslation = (status: string) => {
    return t(`hotelView.${status}`);
  };

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{t('hotelView.title')}</h1>
          <p className="text-sm text-gray-600">{t('hotelView.subtitle')}</p>
        </div>
        <div className="flex space-x-4">
          <select 
            className="rounded-lg border-gray-300 text-sm"
            value={selectedFloor}
            onChange={(e) => setSelectedFloor(e.target.value)}
          >
            {[8, 7, 6, 5].map(floor => (
              <option key={floor} value={floor}>{t('hotelView.floor')} {floor}</option>
            ))}
          </select>
          <select 
            className="rounded-lg border-gray-300 text-sm"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">{t('hotelView.allRooms')}</option>
            <option value="occupied">{t('hotelView.occupied')}</option>
            <option value="available">{t('hotelView.available')}</option>
            <option value="maintenance">{t('hotelView.maintenance')}</option>
          </select>
        </div>
      </div>

      {/* Floor Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('hotelView.stats.occupancyRate')}</p>
              <p className="text-2xl font-bold text-gray-800">75%</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('hotelView.stats.avgStay')}</p>
              <p className="text-2xl font-bold text-gray-800">3.2 {t('hotelView.stats.days')}</p>
            </div>
            <Timer className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('hotelView.stats.energyEfficiency')}</p>
              <p className="text-2xl font-bold text-gray-800">92%</p>
            </div>
            <Battery className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('hotelView.stats.roomService')}</p>
              <p className="text-2xl font-bold text-gray-800">4 {t('hotelView.stats.active')}</p>
            </div>
            <Coffee className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {filteredRooms.map((room) => (
          <div key={room.number} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{t('hotelView.room.number')} {room.number}</h3>
                <p className="text-sm text-gray-600">{getRoomTypeTranslation(room.type)}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                {getStatusTranslation(room.status)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <ThermometerSun className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">{room.temperature}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Droplets className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">{room.humidity}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">{room.lighting}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">{t('hotelView.room.freshAir')}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">{t('hotelView.room.energyUsage')}</p>
                <p className="text-sm font-medium text-gray-800">{room.energyUsage}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">{t('hotelView.room.lastCleaned')}</p>
                <p className="text-sm font-medium text-gray-800">
                  {parseInt(room.lastCleaned) > 2 
                    ? `${room.lastCleaned} ${t('hotelView.room.hoursAgo')}` 
                    : `${room.lastCleaned} ${t('hotelView.room.minsAgo')}`}
                </p>
              </div>
            </div>

            {room.guest && (
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{room.guest}</p>
                    <p className="text-xs text-gray-600">
                      {t('hotelView.room.checkIn')}: {room.checkIn} | {t('hotelView.room.checkOut')}: {room.checkOut}
                    </p>
                  </div>
                  <button className="text-blue-600 text-sm hover:text-blue-700">
                    {t('hotelView.room.viewDetails')}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelView;