import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Globe className="w-5 h-5 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">
        {language === 'en' ? '中文' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;