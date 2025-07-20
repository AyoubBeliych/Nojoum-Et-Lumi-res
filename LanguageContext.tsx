
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { translations, LANGUAGES } from '../translations';
import type { SupportedLanguage } from '../types';
import { getUserData } from '../services/userDataService';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, substitutions?: Record<string, string>) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>(() => {
    const savedData = getUserData();
    return savedData?.language || 'ar';
  });

  const t = useMemo(() => {
    return (key: string, substitutions: Record<string, string> = {}): string => {
        const currentTranslations = translations[language] || translations.en;
        
        const keys = key.split('.');
        let result: any = currentTranslations;
        
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) {
                // Fallback to English for missing keys
                let fallbackResult: any = translations.en;
                for(const fk of keys) {
                    fallbackResult = fallbackResult?.[fk];
                }
                result = fallbackResult || key;
                break;
            }
        }
        
        let CSTR = String(result);

        // Replace placeholders like {sign}
        for (const subKey in substitutions) {
            CSTR = CSTR.replace(`{${subKey}}`, substitutions[subKey]);
        }
        
        return CSTR;
    };
  }, [language]);

  const dir = useMemo(() => LANGUAGES[language]?.dir || 'ltr', [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};