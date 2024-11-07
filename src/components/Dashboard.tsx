import React from 'react';
import { 
  Brain, Users, Hotel, Battery, Wifi, 
  TrendingUp, Bell, Clock, CheckCircle,
  AlertTriangle, ThermometerSun, Wind
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNetworkData, useOptimizationData } from '../hooks/useDataUpdates';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';

function Dashboard() {
  const { t } = useLanguage();
  const networkData = useNetworkData();
  const optimizationData = useOptimizationData();

  const quickStats = [
    {
      title: 'Occupancy Rate',
      value: '85%',
      trend: '+5%',
      icon: Users,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      title: 'Active Rooms',
      value: '142',
      trend: '24 Available',
      icon: Hotel,
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    },
    {
      title: 'Energy Efficiency',
      value: '92%',
      trend: '-8% Usage',
      icon: Battery,
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      title: 'System Health',
      value: '98%',
      trend: 'All Systems Normal',
      icon: Wifi,
      color: 'text-yellow-500',
      bg: 'bg-yellow-50'
    }
  ];

  const alerts = [
    {
      title: 'High Energy Usage',
      description: 'Room 801 showing unusual consumption pattern',
      type: 'warning',
      time: '10 mins ago'
    },
    {
      title: 'Maintenance Required',
      description: 'HVAC system in Room 505 needs inspection',
      type: 'alert',
      time: '25 mins ago'
    },
    {
      title: 'Optimization Complete',
      description: 'AI completed room comfort optimization for floor 7',
      type: 'success',
      time: '1 hour ago'
    }
  ];

  return (
    <div className="pt-4 pb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{t('nav.dashboard')}</h1>
          <p className="text-sm text-gray-600">AI-Powered Smart Hotel Management System</p>
        </div>
        <div className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg">
          <Brain className="w-5 h-5" />
          <span className="text-sm font-medium">AI Health Score: 94%</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-sm text-gray-600 mb-2">{stat.title}</h3>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-green-500">{stat.trend}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Network Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Network Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={networkData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="bandwidth" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#10B981" 
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Room Optimization */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Room Optimization</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={optimizationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="device" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="optimizations" 
                  stackId="1"
                  stroke="#3B82F6" 
                  fill="#93C5FD" 
                />
                <Area 
                  type="monotone" 
                  dataKey="timeSaved" 
                  stackId="1"
                  stroke="#10B981" 
                  fill="#6EE7B7" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Recent Alerts</h2>
            <Bell className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${
                  alert.type === 'warning' 
                    ? 'bg-yellow-100' 
                    : alert.type === 'alert'
                    ? 'bg-red-100'
                    : 'bg-green-100'
                }`}>
                  {alert.type === 'warning' ? (
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  ) : alert.type === 'alert' ? (
                    <Bell className="w-5 h-5 text-red-600" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-semibold text-gray-800">{alert.title}</h3>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">{alert.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environment Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Environment Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <ThermometerSun className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-800">Average Temperature</span>
              </div>
              <p className="text-2xl font-bold text-blue-700">23.5°C</p>
              <p className="text-xs text-blue-600 mt-1">Optimal range maintained</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Wind className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-800">Air Quality</span>
              </div>
              <p className="text-2xl font-bold text-green-700">96%</p>
              <p className="text-xs text-green-600 mt-1">Excellent conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;