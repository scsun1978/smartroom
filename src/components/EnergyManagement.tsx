import React, { useState } from 'react';
import { 
  Leaf, Droplets, Wind, Sun, Battery, TrendingDown, 
  Building, BarChart3, ThermometerSun, Users 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEnergyMetrics } from '../hooks/useDataUpdates';

const EnergyManagement = () => {
  const { t } = useLanguage();
  const [selectedArea, setSelectedArea] = useState('all');
  const [timeRange, setTimeRange] = useState('30');
  const energyMetrics = useEnergyMetrics();

  const areas = [
    {
      id: 'all',
      name: t('energy.areas.all'),
      energyScore: 92,
      savings: energyMetrics.savings,
      consumption: energyMetrics.consumption,
      renewable: energyMetrics.renewable,
      waterSaved: energyMetrics.waterSaved,
    },
    {
      id: 'rooms',
      name: t('energy.areas.rooms'),
      energyScore: 94,
      savings: 18.2,
      consumption: 180,
      renewable: 40,
      waterSaved: 850,
    },
    {
      id: 'public',
      name: t('energy.areas.public'),
      energyScore: 88,
      savings: 12.5,
      consumption: 65,
      renewable: 30,
      waterSaved: 400,
    }
  ];

  const selectedAreaData = areas.find(area => area.id === selectedArea) || areas[0];

  const smartFeatures = [
    {
      name: t('energy.features.temperature'),
      description: t('energy.features.temperatureDesc'),
      savings: t('energy.features.temperatureSavings'),
      area: "rooms"
    },
    {
      name: t('energy.features.lighting'),
      description: t('energy.features.lightingDesc'),
      savings: t('energy.features.lightingSavings'),
      area: "all"
    },
    {
      name: t('energy.features.water'),
      description: t('energy.features.waterDesc'),
      savings: t('energy.features.waterSavings'),
      area: "all"
    },
    {
      name: t('energy.features.climate'),
      description: t('energy.features.climateDesc'),
      savings: t('energy.features.climateSavings'),
      area: "public"
    }
  ];

  const filteredFeatures = smartFeatures.filter(
    feature => selectedArea === 'all' || feature.area === selectedArea
  );

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{t('energy.title')}</h1>
          <p className="text-sm text-gray-600">{t('energy.subtitle')}</p>
        </div>
        <div className="flex space-x-4">
          <select 
            className="rounded-lg border-gray-300 text-sm"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            <option value="all">{t('energy.areas.all')}</option>
            <option value="rooms">{t('energy.areas.rooms')}</option>
            <option value="public">{t('energy.areas.public')}</option>
          </select>
          <select 
            className="rounded-lg border-gray-300 text-sm"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7">{t('energy.timeRange.week')}</option>
            <option value="30">{t('energy.timeRange.month')}</option>
            <option value="90">{t('energy.timeRange.quarter')}</option>
          </select>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">{t('energy.score')}</p>
              <p className="text-2xl font-bold text-gray-800">{selectedAreaData.energyScore}%</p>
            </div>
            <Leaf className="w-8 h-8 text-green-500" />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${selectedAreaData.energyScore}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">{t('energy.savings')}</p>
              <p className="text-2xl font-bold text-gray-800">{selectedAreaData.savings}%</p>
            </div>
            <TrendingDown className="w-8 h-8 text-blue-500" />
          </div>
          <p className="text-sm text-green-500">{t('energy.savingsTrend')}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">{t('energy.renewable')}</p>
              <p className="text-2xl font-bold text-gray-800">{selectedAreaData.renewable}%</p>
            </div>
            <Sun className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-sm text-green-500">{t('energy.renewableTrend')}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">{t('energy.waterSaved')}</p>
              <p className="text-2xl font-bold text-gray-800">{selectedAreaData.waterSaved}L</p>
            </div>
            <Droplets className="w-8 h-8 text-blue-500" />
          </div>
          <p className="text-sm text-green-500">{t('energy.waterTrend')}</p>
        </div>
      </div>

      {/* Smart Features Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">{t('energy.features.title')}</h2>
          <div className="space-y-4">
            {filteredFeatures.map((feature, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-800">{feature.name}</h3>
                  <span className="text-green-600 text-sm font-medium">{feature.savings}</span>
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">{t('energy.monitoring.title')}</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <ThermometerSun className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-800">{t('energy.monitoring.load')}</span>
                </div>
                <p className="text-2xl font-bold text-blue-700">72%</p>
                <p className="text-xs text-blue-600 mt-1">{t('energy.monitoring.loadDesc')}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-800">{t('energy.monitoring.occupancy')}</span>
                </div>
                <p className="text-2xl font-bold text-green-700">85%</p>
                <p className="text-xs text-green-600 mt-1">{t('energy.monitoring.occupancyDesc')}</p>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-800">{t('energy.distribution.title')}</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{t('energy.distribution.hvac')}</span>
                    <span className="text-gray-800">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{t('energy.distribution.lighting')}</span>
                    <span className="text-gray-800">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{t('energy.distribution.other')}</span>
                    <span className="text-gray-800">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Initiatives */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">{t('energy.initiatives.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Battery className="w-6 h-6 text-green-500" />
              <h3 className="font-medium text-gray-800">{t('energy.initiatives.smartEnergy')}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {t('energy.initiatives.smartEnergyDesc')}
            </p>
            <p className="text-sm text-green-500 mt-2">{t('energy.initiatives.smartEnergyMetric')}</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Droplets className="w-6 h-6 text-blue-500" />
              <h3 className="font-medium text-gray-800">{t('energy.initiatives.water')}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {t('energy.initiatives.waterDesc')}
            </p>
            <p className="text-sm text-blue-500 mt-2">{t('energy.initiatives.waterMetric')}</p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Sun className="w-6 h-6 text-yellow-500" />
              <h3 className="font-medium text-gray-800">{t('energy.initiatives.renewable')}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {t('energy.initiatives.renewableDesc')}
            </p>
            <p className="text-sm text-yellow-500 mt-2">{t('energy.initiatives.renewableMetric')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyManagement;