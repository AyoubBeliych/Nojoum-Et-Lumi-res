import React from 'react';
import { useLanguage } from './LanguageContext';
import { IMPROVEMENT_TOPICS } from './constants';
import type { ImprovementTopicKey, UserData } from './types';

interface SelfImprovementProps {
    onTopicSelect: (topicKey: ImprovementTopicKey) => void;
    userData: UserData | null;
}

export const SelfImprovement: React.FC<SelfImprovementProps> = ({ onTopicSelect, userData }) => {
    const { t } = useLanguage();

    const handleTopicClick = (key: ImprovementTopicKey) => {
        onTopicSelect(key);
    }

    return (
        <div className="mt-10 p-6 bg-white/70 dark:bg-space-blue/50 backdrop-blur-sm rounded-2xl shadow-lg">
             <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{userData?.mbtiType ? t('growth.title') : t('personality.discoverTitle')}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{userData?.mbtiType ? t('growth.description') : t('personality.discoverDescription')}</p>
                
                {userData?.mbtiType ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        {IMPROVEMENT_TOPICS.map(({ key, icon: Icon }) => (
                            <button
                                key={key}
                                onClick={() => handleTopicClick(key)}
                                className="flex flex-col items-center justify-center p-4 aspect-w-1 aspect-h-1 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-space-dark focus:ring-cosmic-teal bg-gray-200 dark:bg-space-dark text-gray-600 dark:text-starlight hover:bg-nebula-purple dark:hover:bg-nebula-purple hover:text-white dark:hover:text-white"
                            >
                                <Icon className="w-10 h-10 mb-2" />
                                <span className="font-semibold">{t(`growth.${key}`)}</span>
                            </button>
                        ))}
                    </div>
                ) : (
                     <button
                        onClick={() => handleTopicClick('mindfulness')} // Placeholder key to trigger the flow
                        className="px-6 py-2 bg-celestial-gold text-space-dark font-bold rounded-full hover:bg-opacity-80 transition-colors transform hover:scale-105"
                    >
                        {t('personality.startButton')}
                    </button>
                )}
            </div>
        </div>
    );
};