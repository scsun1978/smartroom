import React from 'react';
import { Brain, TrendingUp, Users, AlertTriangle } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="pt-16">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">AI Insights & Analytics</h1>

      {/* AI Models Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-purple-500" />
            <h3 className="text-lg font-semibold text-gray-800">Predictive Analytics</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Accuracy</span>
                <span className="text-gray-800 font-medium">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Predicting guest preferences and behavior patterns
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-800">Occupancy Forecast</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Accuracy</span>
                <span className="text-gray-800 font-medium">91%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91%' }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              7-day forecast for room occupancy rates
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-6 h-6 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-800">Guest Satisfaction</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Sentiment Score</span>
                <span className="text-gray-800 font-medium">4.8/5.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Based on real-time feedback analysis
            </p>
          </div>
        </div>
      </div>

      {/* Real-time Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Learning Insights</h3>
          <div className="space-y-4">
            {[
              {
                title: 'Temperature Optimization',
                description: 'AI suggests 2°C reduction in lobby area based on traffic patterns',
                impact: 'Energy savings potential: 15%',
                priority: 'high'
              },
              {
                title: 'Service Timing',
                description: 'Peak room service demand predicted between 7-9 AM',
                impact: 'Staff efficiency increase: 23%',
                priority: 'medium'
              },
              {
                title: 'Maintenance Prediction',
                description: 'HVAC system in room 506 showing early warning signs',
                impact: 'Preventive maintenance advised',
                priority: 'low'
              }
            ].map((insight, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-full ${
                  insight.priority === 'high' 
                    ? 'bg-red-100' 
                    : insight.priority === 'medium'
                    ? 'bg-yellow-100'
                    : 'bg-green-100'
                }`}>
                  <AlertTriangle className={`w-5 h-5 ${
                    insight.priority === 'high'
                      ? 'text-red-500'
                      : insight.priority === 'medium'
                      ? 'text-yellow-500'
                      : 'text-green-500'
                  }`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">{insight.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{insight.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Trend Analysis</h3>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <p className="text-gray-500">Interactive Trend Chart</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-800">Guest Behavior</h4>
              <p className="text-xs text-gray-600 mt-1">
                75% of guests prefer mobile check-in
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-800">Room Preferences</h4>
              <p className="text-xs text-gray-600 mt-1">
                High-floor rooms are 2.3x more requested
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;