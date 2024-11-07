import React, { useState } from 'react';
import { 
  ThermometerSun, Sun, Wind, Droplets, 
  Building, RefreshCw, Brain, Power,
  Volume2, Coffee, Bell, Blinds,
  Moon, Music, Tv, Wifi, Lock,
  DoorOpen, Fan, PhoneCall
} from 'lucide-react';
import { useRoomEnvironment } from '../../hooks/useDataUpdates';
import { useLanguage } from '../../contexts/LanguageContext';

const RoomControl = () => {
  const { t } = useLanguage();
  const [selectedFloor, setSelectedFloor] = useState('8');
  const [temperature, setTemperature] = useState(22);
  const [lighting, setLighting] = useState(70);
  const [curtains, setCurtains] = useState(100);
  const [tvPower, setTvPower] = useState(false);
  const [musicVolume, setMusicVolume] = useState(30);
  const [fanSpeed, setFanSpeed] = useState(50);
  const [doorLocked, setDoorLocked] = useState(true);
  const [dndActive, setDndActive] = useState(false);
  const [selectedScene, setSelectedScene] = useState('day');

  const environmentData = useRoomEnvironment();
  const floors = ['8', '7', '6', '5'];
  const scenes = [
    { id: 'day', name: t('scene.dayMode'), icon: Sun, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { id: 'night', name: t('scene.nightMode'), icon: Moon, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 'relax', name: t('scene.relaxMode'), icon: Wind, color: 'text-green-500', bg: 'bg-green-50' },
    { id: 'work', name: t('scene.workMode'), icon: Brain, color: 'text-purple-500', bg: 'bg-purple-50' }
  ];

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{t('rcu.title')}</h1>
          <p className="text-sm text-gray-600">{t('rcu.subtitle')}</p>
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
            <span>{t('rcu.syncStatus')}</span>
          </button>
        </div>
      </div>

      {/* Primary Controls */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button 
          onClick={() => setDoorLocked(!doorLocked)}
          className={`p-4 rounded-xl flex flex-col items-center space-y-2 transition-all ${
            doorLocked ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
          }`}
        >
          {doorLocked ? <Lock className="w-6 h-6" /> : <DoorOpen className="w-6 h-6" />}
          <span className="text-sm font-medium">
            {doorLocked ? t('rcu.door.locked') : t('rcu.door.unlocked')}
          </span>
        </button>

        <button 
          onClick={() => setDndActive(!dndActive)}
          className={`p-4 rounded-xl flex flex-col items-center space-y-2 transition-all ${
            dndActive ? 'bg-purple-50 text-purple-600' : 'bg-gray-50 text-gray-600'
          }`}
        >
          <PhoneCall className="w-6 h-6" />
          <span className="text-sm font-medium">
            {dndActive ? t('rcu.dnd.active') : t('rcu.dnd.inactive')}
          </span>
        </button>

        <button className="p-4 rounded-xl flex flex-col items-center space-y-2 bg-yellow-50 text-yellow-600">
          <Bell className="w-6 h-6" />
          <span className="text-sm font-medium">{t('rcu.serviceCall')}</span>
        </button>

        <button className="p-4 rounded-xl flex flex-col items-center space-y-2 bg-blue-50 text-blue-600">
          <Fan className="w-6 h-6" />
          <span className="text-sm font-medium">{t('rcu.fanControl')}</span>
        </button>
      </div>

      {/* Scene Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {scenes.map(scene => {
          const Icon = scene.icon;
          return (
            <button
              key={scene.id}
              onClick={() => setSelectedScene(scene.id)}
              className={`p-4 rounded-xl flex flex-col items-center space-y-2 transition-all ${
                selectedScene === scene.id 
                  ? `${scene.bg} ${scene.color} ring-2 ring-offset-2 ring-current` 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{scene.name}</span>
            </button>
          );
        })}
      </div>

      {/* Environment Controls */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">{t('rcu.environment')}</h2>
        <div className="space-y-6">
          {/* Temperature Control */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <ThermometerSun className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">{t('rcu.temperature')}</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">{temperature}°C</span>
            </div>
            <input
              type="range"
              min="16"
              max="30"
              value={temperature}
              onChange={(e) => setTemperature(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Lighting Control */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <Sun className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">{t('rcu.lighting')}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{lighting}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={lighting}
              onChange={(e) => setLighting(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Fan Speed Control */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <Fan className="w-5 h-5 text-cyan-500" />
                <span className="text-sm font-medium text-gray-700">{t('rcu.fanSpeed')}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{fanSpeed}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={fanSpeed}
              onChange={(e) => setFanSpeed(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Curtains Control */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <Blinds className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">{t('rcu.curtains')}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{curtains}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={curtains}
              onChange={(e) => setCurtains(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Entertainment Controls */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">{t('rcu.entertainment')}</h2>
        <div className="space-y-6">
          {/* TV Control */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Tv className="w-6 h-6 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-800">Smart TV</p>
                <p className="text-xs text-gray-500">55" 4K OLED Display</p>
              </div>
            </div>
            <button
              onClick={() => setTvPower(!tvPower)}
              className={`p-2 rounded-lg ${
                tvPower ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
              }`}
            >
              <Power className="w-5 h-5" />
            </button>
          </div>

          {/* Music Control */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <Music className="w-6 h-6 text-purple-500" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Music</p>
                  <p className="text-xs text-gray-500">Volume: {musicVolume}%</p>
                </div>
              </div>
              <Volume2 className="w-5 h-5 text-gray-600" />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={musicVolume}
              onChange={(e) => setMusicVolume(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Quick Services */}
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gray-50 rounded-lg flex items-center space-x-3 hover:bg-gray-100">
              <Coffee className="w-6 h-6 text-yellow-500" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-800">Room Service</p>
                <p className="text-xs text-gray-500">24/7 Available</p>
              </div>
            </button>
            <button className="p-4 bg-gray-50 rounded-lg flex items-center space-x-3 hover:bg-gray-100">
              <Bell className="w-6 h-6 text-red-500" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-800">Assistance</p>
                <p className="text-xs text-gray-500">Call Front Desk</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Room Status */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">{t('rcu.status')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Droplets className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-800">{t('rcu.humidity')}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{environmentData.humidity}%</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Wind className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-800">{t('rcu.airQuality')}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{environmentData.airQuality}%</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Lock className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-800">{t('rcu.security')}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {doorLocked ? t('rcu.secured') : t('rcu.open')}
            </p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Wifi className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-800">{t('rcu.network')}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{t('rcu.connected')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomControl;