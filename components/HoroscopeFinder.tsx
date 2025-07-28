
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ZODIAC_DATES, ZODIAC_SIGNS } from '../constants';
import type { ZodiacSign } from '../types';
import { CloseIcon } from './Icons';

interface HoroscopeFinderProps {
    onZodiacFound: (zodiac: ZodiacSign) => void;
}

export const HoroscopeFinder: React.FC<HoroscopeFinderProps> = ({ onZodiacFound }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [foundSign, setFoundSign] = useState<ZodiacSign | null>(null);
    const { t } = useLanguage();

    const findZodiacSign = (date: string) => {
        if (!date) return null;
        const [year, month, day] = date.split('-').map(Number);
        const dateStr = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Special case for Capricorn spanning new year
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            return ZODIAC_SIGNS.find(s => s.nameEn === 'Capricorn') || null;
        }

        const sign = ZODIAC_DATES.find(s => {
            const [_startMonth, _startDay] = s.start.split('-').map(Number);
            const [_endMonth, _endDay] = s.end.split('-').map(Number);
            if (month === _startMonth && day >= _startDay) return true;
            if (month === _endMonth && day <= _endDay) return true;
            return false;
        });
        
        return ZODIAC_SIGNS.find(s => s.nameEn === sign?.nameEn) || null;
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setBirthDate(date);
        const sign = findZodiacSign(date);
        setFoundSign(sign);
    };

    const handleShowHoroscope = () => {
        if (foundSign) {
            onZodiacFound(foundSign);
            setIsOpen(false);
            setFoundSign(null);
            setBirthDate('');
        }
    };

    if (!isOpen) {
        return (
            <div className="text-center mb-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-sm font-bold text-cosmic-teal dark:text-cosmic-teal hover:underline"
                >
                    {t('horoscope.finderTitle')}
                </button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-space-dark/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div
                className="bg-white dark:bg-space-blue rounded-2xl shadow-2xl p-8 w-full max-w-sm relative"
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 end-4 p-2 text-gray-400 hover:text-starlight rounded-full hover:bg-space-dark/50 dark:hover:bg-space-dark transition-colors"
                >
                    <CloseIcon className="w-6 h-6" />
                </button>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-starlight">{t('horoscope.finderButton')}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">{t('horoscope.finderPrompt')}</p>
                <input
                    type="date"
                    value={birthDate}
                    onChange={handleDateChange}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-space-dark border-2 border-transparent focus:border-cosmic-teal rounded-lg outline-none transition text-center text-gray-800 dark:text-starlight"
                    style={{ colorScheme: 'dark' }}
                />
                {foundSign && (
                    <div className="text-center mt-6 animate-fade-in">
                        <p className="text-lg">{t('horoscope.finderResult', { sign: t(`zodiac.${foundSign.nameKey}`) })}</p>
                        <foundSign.Icon className="w-16 h-16 mx-auto my-2 text-cosmic-teal" />
                        <button
                            onClick={handleShowHoroscope}
                            className="w-full mt-2 py-3 font-bold text-white bg-gradient-to-r from-nebula-purple to-cosmic-teal rounded-lg hover:opacity-90 transition-opacity"
                        >
                            {t('horoscope.showHoroscope')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};