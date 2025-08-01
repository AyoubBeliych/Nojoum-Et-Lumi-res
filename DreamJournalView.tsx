
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { getDreamInterpretation } from './geminiService';
import type { UserData } from './types';
import { LoadingSpinner } from './Icons';

interface DreamJournalViewProps {
    userData: UserData | null;
}

const SkeletonLoader: React.FC = () => (
    <div className="space-y-3 animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-space-blue rounded w-5/6"></div>
    </div>
);


export const DreamJournalView: React.FC<DreamJournalViewProps> = ({ userData }) => {
    const { t, language } = useLanguage();
    const [dream, setDream] = useState('');
    const [interpretation, setInterpretation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!dream) return;

        setIsLoading(true);
        setError(null);
        setInterpretation('');

        try {
            const result = await getDreamInterpretation(dream, language, userData);
            setInterpretation(result);
        } catch (err) {
            setError(t('error.fetch'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <div className="mt-4 p-6 bg-white/70 dark:bg-space-blue/50 backdrop-blur-sm rounded-2xl shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-2">{t('dreamJournal.title')}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{t('dreamJournal.description')}</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        value={dream}
                        onChange={(e) => setDream(e.target.value)}
                        placeholder={t('dreamJournal.placeholder')}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-100 dark:bg-space-dark border-2 border-transparent focus:border-cosmic-teal rounded-lg outline-none transition"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !dream}
                        className="w-full py-3 font-bold text-white bg-gradient-to-r from-nebula-purple to-cosmic-teal rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <LoadingSpinner className="w-5 h-5" />
                                <span>{t('dreamJournal.interpreting')}</span>
                            </div>
                        ) : (
                            <span>{t('dreamJournal.button')}</span>
                        )}
                    </button>
                </form>
            </div>
            
            {(isLoading || error || interpretation) && (
                <div className="mt-6 min-h-[200px] p-6 bg-white/70 dark:bg-space-blue/50 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300">
                    {isLoading && <SkeletonLoader />}
                    {error && <p className="text-red-500 dark:text-red-400 text-center">{error}</p>}
                    {interpretation && (
                        <div className="animate-fade-in space-y-3">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nebula-purple to-cosmic-teal">{t('dreamJournal.resultTitle')}</h3>
                            <p className="text-lg leading-relaxed whitespace-pre-line">{interpretation}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
