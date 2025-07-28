
import React from 'react';
import type { ZodiacSign } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ZodiacSelectorProps {
  zodiacs: ZodiacSign[];
  selectedZodiac: ZodiacSign | null;
  onSelect: (zodiac: ZodiacSign) => void;
}

export const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({ zodiacs, selectedZodiac, onSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="p-4 bg-white/70 dark:bg-space-blue/50 backdrop-blur-sm rounded-2xl shadow-lg">
      <h2 className="text-center font-bold text-xl mb-4 text-gray-700 dark:text-starlight">{t('zodiac.select')}</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
        {zodiacs.map((zodiac) => (
          <button
            key={zodiac.nameEn}
            onClick={() => onSelect(zodiac)}
            className={`flex flex-col items-center justify-center p-2 aspect-square rounded-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-space-dark focus:ring-cosmic-teal ${
              selectedZodiac?.nameEn === zodiac.nameEn
                ? 'bg-gradient-to-br from-nebula-purple to-cosmic-teal text-white shadow-md'
                : 'bg-gray-200 dark:bg-space-dark text-gray-600 dark:text-starlight hover:bg-gray-300 dark:hover:bg-space-blue'
            }`}
            aria-label={`${t('zodiac.select')} ${t(`zodiac.${zodiac.nameKey}`)}`}
          >
            <zodiac.Icon className="w-8 h-8" />
            <span className="text-xs font-semibold mt-1">{t(`zodiac.${zodiac.nameKey}`)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};