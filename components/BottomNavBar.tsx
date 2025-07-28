
import React from 'react';
import { HomeIcon, SparklesIcon, DreamIcon, ProfileIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import type { View } from '../types';

interface BottomNavBarProps {
  activePage: View['type'];
  onNavigate: (page: View['type']) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activePage, onNavigate }) => {
  const { t } = useLanguage();

  const navItems = [
    { page: 'horoscope', icon: HomeIcon, label: t('nav.horoscope') },
    { page: 'growth', icon: SparklesIcon, label: t('nav.growth') },
    { page: 'dreamJournal', icon: DreamIcon, label: t('nav.dreamJournal') },
    { page: 'profile', icon: ProfileIcon, label: t('nav.profile') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-space-blue/80 backdrop-blur-lg border-t border-gray-200 dark:border-space-dark/50 shadow-t-xl z-40">
      <div className="max-w-lg mx-auto flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page as View['type'])}
            className={`flex flex-col items-center justify-center w-full pt-3 pb-2 transition-colors duration-300 ${
              activePage === item.page
                ? 'text-cosmic-teal'
                : 'text-gray-500 dark:text-gray-400 hover:text-cosmic-teal dark:hover:text-cosmic-teal'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs font-bold mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
