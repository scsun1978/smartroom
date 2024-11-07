import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'app.title': 'IHG SmartRoom Management',
    'app.admin': 'Admin User',
    'nav.dashboard': 'Dashboard',
    'nav.hotelView': 'Hotel View',
    'nav.guestProfiles': 'Guest Profiles',
    'nav.energySustainability': 'Energy & Sustainability',
    'nav.rcuControl': 'RCU Control',
    'nav.roomManagement': 'Room Management',
  },
  zh: {
    'app.title': 'IHG智能房间管理',
    'app.admin': '管理员',
    'nav.dashboard': '仪表盘',
    'nav.hotelView': '酒店视图',
    'nav.guestProfiles': '客人档案',
    'nav.energySustainability': '能源与可持续性',
    'nav.rcuControl': 'RCU控制',
    'nav.roomManagement': '房间管理',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};