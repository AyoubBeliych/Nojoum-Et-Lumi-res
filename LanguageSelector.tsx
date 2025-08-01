
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { LANGUAGES } from './translations';
import type { SupportedLanguage } from './types';
import { GlobeIcon, ChevronDownIcon } from './Icons';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (langCode: SupportedLanguage) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-200 dark:bg-space-dark text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-space-blue transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <GlobeIcon className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">{LANGUAGES[language].nativeName}</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 w-48 max-h-60 overflow-y-auto rounded-lg shadow-xl bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20 end-0"
          role="menu"
        >
          <div className="py-1" role="none">
            {Object.entries(LANGUAGES).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as SupportedLanguage)}
                className={`w-full text-start block px-4 py-2 text-sm  ${language === code ? 'font-bold text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700`}
                role="menuitem"
              >
                {lang.name} <span className="opacity-70">({lang.nativeName})</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};