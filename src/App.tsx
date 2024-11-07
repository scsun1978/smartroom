import React, { useState } from 'react';
import { LayoutGrid, Hotel, Users, Leaf, Settings, Cog } from 'lucide-react';
import Dashboard from './components/Dashboard';
import HotelView from './components/HotelView';
import GuestProfile from './components/GuestProfile';
import EnergyManagement from './components/EnergyManagement';
import RoomControl from './components/RoomControl';
import RoomManagement from './components/RoomManagement';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { t } = useLanguage();
  const [activeView, setActiveView] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', name: t('nav.dashboard'), icon: LayoutGrid },
    { id: 'hotel', name: t('nav.hotelView'), icon: Hotel },
    { id: 'guests', name: t('nav.guestProfiles'), icon: Users },
    { id: 'energy', name: t('nav.energySustainability'), icon: Leaf },
    { id: 'room', name: t('nav.rcuControl'), icon: Settings },
    { id: 'management', name: t('nav.roomManagement'), icon: Cog },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'hotel':
        return <HotelView />;
      case 'guests':
        return <GuestProfile />;
      case 'energy':
        return <EnergyManagement />;
      case 'room':
        return <RoomControl />;
      case 'management':
        return <RoomManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <div className="fixed left-0 top-0 h-16 w-full bg-white shadow-lg z-10">
        <div className="max-w-full mx-auto px-4 h-full flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-800">
            {t('app.title')}
          </span>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <span className="text-sm text-gray-700">{t('app.admin')}</span>
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="fixed left-0 top-16 h-full w-16 bg-white shadow-lg flex flex-col items-center py-4 space-y-8">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`p-3 rounded-xl transition-all ${
                activeView === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={item.name}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="pl-16 pt-16">
        <div className="container mx-auto px-6">
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default App;