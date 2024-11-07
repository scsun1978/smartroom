import React from 'react';
import { Tv, Music, Coffee, Bell, Power, Volume2 } from 'lucide-react';

interface EntertainmentControlsProps {
  tvPower: boolean;
  musicVolume: number;
  onTvPowerToggle: () => void;
  onMusicVolumeChange: (value: number) => void;
}

const EntertainmentControls: React.FC<EntertainmentControlsProps> = ({
  tvPower,
  musicVolume,
  onTvPowerToggle,
  onMusicVolumeChange
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Entertainment & Services</h2>
      
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
            onClick={onTvPowerToggle}
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
            onChange={(e) => onMusicVolumeChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
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
  );
};

export default EntertainmentControls;