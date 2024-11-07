import React from 'react';
import { ThermometerSun, Sun, Blinds } from 'lucide-react';

interface EnvironmentControlsProps {
  temperature: number;
  lighting: number;
  curtains: number;
  onTemperatureChange: (value: number) => void;
  onLightingChange: (value: number) => void;
  onCurtainsChange: (value: number) => void;
}

const EnvironmentControls: React.FC<EnvironmentControlsProps> = ({
  temperature,
  lighting,
  curtains,
  onTemperatureChange,
  onLightingChange,
  onCurtainsChange
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Environment</h2>
      
      <div className="space-y-6">
        {/* Temperature Control */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <ThermometerSun className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Temperature</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">{temperature}°C</span>
          </div>
          <input
            type="range"
            min="16"
            max="30"
            value={temperature}
            onChange={(e) => onTemperatureChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>16°C</span>
            <span>30°C</span>
          </div>
        </div>

        {/* Lighting Control */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <Sun className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Lighting</span>
            </div>
            <span className="text-sm font-medium text-gray-700">{lighting}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={lighting}
            onChange={(e) => onLightingChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Curtains Control */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-2">
              <Blinds className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Curtains</span>
            </div>
            <span className="text-sm font-medium text-gray-700">{curtains}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={curtains}
            onChange={(e) => onCurtainsChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default EnvironmentControls;