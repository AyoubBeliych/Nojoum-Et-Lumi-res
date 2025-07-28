
import React from 'react';
import type { ZodiacSign } from '../types';
import { LoadingSpinner } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

interface HoroscopeDisplayProps {
  zodiac: ZodiacSign | null;
  horoscope: string;
  isLoading: boolean;
  error: string | null;
}

const SkeletonLoader: React.FC = () => (
    <div className="space-y-3 animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-5/6"></div>
    </div>
);

export const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ zodiac, horoscope, isLoading, error }) => {
  const { t } = useLanguage();
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center">
             {zodiac && <zodiac.Icon className="w-16 h-16 mb-4 text-cosmic-teal" />}
            <LoadingSpinner className="w-8 h-8 text-nebula-purple" />
            <p className="mt-2 font-semibold">{t('horoscope.loading', { sign: zodiac ? t(`zodiac.${zodiac.nameKey}`) : '' })}</p>
            <div className="w-full mt-4">
               <SkeletonLoader />
            </div>
        </div>
      )
    }
    if (error) {
      return <p className="text-red-500 dark:text-red-400 text-center">{error}</p>;
    }
    if (horoscope && zodiac) {
      return (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-nebula-purple to-cosmic-teal rounded-full text-white">
              <zodiac.Icon className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{t('horoscope.title', { sign: t(`zodiac.${zodiac.nameKey}`) })}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('horoscope.subtitle')}</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed whitespace-pre-line">{horoscope}</p>
        </div>
      );
    }
    return <p className="text-center text-gray-500 dark:text-gray-400">{t('horoscope.prompt')}</p>;
  };

  return (
    <div className="min-h-[250px] p-6 bg-white/70 dark:bg-space-blue/50 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300">
      {renderContent()}
    </div>
  );
};