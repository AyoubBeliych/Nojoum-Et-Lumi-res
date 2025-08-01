
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { getSelfImprovementTip } from './geminiService';
import type { ImprovementTopicKey, UserData } from './types';
import { LoadingSpinner } from './Icons';

interface ImprovementTopicViewProps {
    topicKey: ImprovementTopicKey;
    userData: UserData | null;
    onBack: () => void;
}

const SkeletonLoader: React.FC = () => (
    <div className="space-y-3 animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-5/6"></div>
    </div>
);

export const ImprovementTopicView: React.FC<ImprovementTopicViewProps> = ({ topicKey, userData, onBack }) => {
    const { t, language } = useLanguage();
    const [advice, setAdvice] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAdvice = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const tip = await getSelfImprovementTip(topicKey, language, userData);
                setAdvice(tip);
            } catch (err) {
                setError(t('error.fetch'));
            } finally {
                setIsLoading(false);
            }
        };
        fetchAdvice();
    }, [topicKey, userData, language, t]);

    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-starlight dark:bg-space-dark">
             <div className="w-full max-w-lg">
                <div className="relative mb-6 text-center">
                    <button onClick={onBack} className="absolute start-0 top-1/2 -translate-y-1/2 text-cosmic-teal font-bold hover:underline">
                        &larr; {t('personality.backButton')}
                    </button>
                    <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-nebula-purple to-cosmic-teal">
                        {t(`growth.${topicKey}`)}
                    </h2>
                </div>
                
                <div className="min-h-[400px] w-full bg-white dark:bg-space-blue p-8 rounded-2xl shadow-2xl">
                    {isLoading && (
                        <div className="flex flex-col items-center justify-center h-full">
                            <LoadingSpinner className="w-8 h-8 text-nebula-purple" />
                            <p className="mt-2 font-semibold">{t('growth.fetchingAdvice')}</p>
                            <div className="w-full mt-4">
                                <SkeletonLoader />
                            </div>
                        </div>
                    )}
                    {error && <p className="text-red-500 dark:text-red-400 text-center">{error}</p>}
                    {!isLoading && !error && (
                         <p className="text-lg leading-relaxed whitespace-pre-line animate-fade-in">{advice}</p>
                    )}
                </div>
            </div>
        </div>
    );
};