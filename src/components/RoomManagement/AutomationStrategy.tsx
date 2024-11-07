import React from 'react';
import { Brain, User, Clock, Zap, ThermometerSun, Sun, Wind } from 'lucide-react';

interface Strategy {
  guestName: string;
  roomNumber: string;
  preferences: {
    temperature: number;
    lighting: number;
    curtains: number;
    checkIn: string;
    checkOut: string;
    aiLearned: {
      wakeTime: string;
      sleepTime: string;
      preferredTemp: number;
      lightingPreference: string;
    };
  };
  automations: {
    name: string;
    description: string;
    status: 'active' | 'scheduled' | 'completed';
    energyImpact: string;
  }[];
}

const AutomationStrategy: React.FC = () => {
  const strategies: Strategy[] = [
    {
      guestName: "Sarah Johnson",
      roomNumber: "801",
      preferences: {
        temperature: 22,
        lighting: 80,
        curtains: 100,
        checkIn: "2024-03-15 14:00",
        checkOut: "2024-03-18 12:00",
        aiLearned: {
          wakeTime: "07:00",
          sleepTime: "23:00",
          preferredTemp: 22,
          lightingPreference: "Bright during work hours"
        }
      },
      automations: [
        {
          name: "Morning Routine",
          description: "Gradually increase lighting and open curtains at 7:00 AM",
          status: "active",
          energyImpact: "-15% daily energy"
        },
        {
          name: "Work Mode",
          description: "Optimize lighting and temperature for workspace during 9:00 AM - 5:00 PM",
          status: "active",
          energyImpact: "-10% daily energy"
        }
      ]
    },
    {
      guestName: "Michael Chen",
      roomNumber: "802",
      preferences: {
        temperature: 24,
        lighting: 60,
        curtains: 80,
        checkIn: "2024-03-15 15:30",
        checkOut: "2024-03-17 11:00",
        aiLearned: {
          wakeTime: "06:30",
          sleepTime: "22:00",
          preferredTemp: 24,
          lightingPreference: "Natural light preferred"
        }
      },
      automations: [
        {
          name: "Sleep Mode",
          description: "Reduce lighting and temperature at 10:00 PM",
          status: "scheduled",
          energyImpact: "-20% nightly energy"
        },
        {
          name: "Natural Light Optimization",
          description: "Adjust curtains based on sunlight intensity",
          status: "active",
          energyImpact: "-25% lighting energy"
        }
      ]
    },
    {
      guestName: "Emma Davis",
      roomNumber: "803",
      preferences: {
        temperature: 23,
        lighting: 70,
        curtains: 90,
        checkIn: "2024-03-16 13:00",
        checkOut: "2024-03-19 10:00",
        aiLearned: {
          wakeTime: "08:00",
          sleepTime: "23:30",
          preferredTemp: 23,
          lightingPreference: "Warm lighting in evening"
        }
      },
      automations: [
        {
          name: "Evening Comfort",
          description: "Transition to warm lighting and optimal temperature from 18:00",
          status: "scheduled",
          energyImpact: "-18% evening energy"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">AI-Driven Room Automation</h2>
          <p className="text-sm text-gray-600">Personalized strategies for each guest</p>
        </div>
        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg flex items-center space-x-2">
          <Brain className="w-5 h-5" />
          <span>AI Insights</span>
        </button>
      </div>

      <div className="space-y-6">
        {strategies.map((strategy, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <User className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-800">{strategy.guestName}</h3>
                  <p className="text-sm text-gray-600">Room {strategy.roomNumber}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{strategy.preferences.checkIn.split(' ')[0]}</span>
                <span>→</span>
                <span>{strategy.preferences.checkOut.split(' ')[0]}</span>
              </div>
            </div>

            {/* AI-Learned Preferences */}
            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <h4 className="text-sm font-medium text-blue-800 mb-2">AI-Learned Preferences</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-blue-600">Wake Time</p>
                  <p className="text-sm font-medium text-blue-900">
                    {strategy.preferences.aiLearned.wakeTime}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-blue-600">Sleep Time</p>
                  <p className="text-sm font-medium text-blue-900">
                    {strategy.preferences.aiLearned.sleepTime}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-blue-600">Preferred Temp</p>
                  <p className="text-sm font-medium text-blue-900">
                    {strategy.preferences.aiLearned.preferredTemp}°C
                  </p>
                </div>
                <div>
                  <p className="text-xs text-blue-600">Lighting</p>
                  <p className="text-sm font-medium text-blue-900">
                    {strategy.preferences.aiLearned.lightingPreference}
                  </p>
                </div>
              </div>
            </div>

            {/* Current Settings */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <ThermometerSun className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-xs text-gray-600">Temperature</p>
                  <p className="font-medium text-gray-800">{strategy.preferences.temperature}°C</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <Sun className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="text-xs text-gray-600">Lighting</p>
                  <p className="font-medium text-gray-800">{strategy.preferences.lighting}%</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <Wind className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-xs text-gray-600">Curtains</p>
                  <p className="font-medium text-gray-800">{strategy.preferences.curtains}%</p>
                </div>
              </div>
            </div>

            {/* Automations */}
            <div className="space-y-3">
              {strategy.automations.map((automation, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{automation.name}</p>
                      <p className="text-xs text-gray-600">{automation.description}</p>
                      <p className="text-xs text-green-600 mt-1">{automation.energyImpact}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(automation.status)}`}>
                    {automation.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomationStrategy;