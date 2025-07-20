
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MBTI_QUESTIONS } from '../constants';

interface PersonalityTestViewProps {
    onComplete: (mbtiType: string) => void;
    onBack: () => void;
}

export const PersonalityTestView: React.FC<PersonalityTestViewProps> = ({ onComplete, onBack }) => {
    const { t } = useLanguage();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [result, setResult] = useState<string | null>(null);

    const handleAnswer = (value: string) => {
        const newAnswers = { ...answers, [currentQuestionIndex]: value };
        
        if (currentQuestionIndex < MBTI_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswers(newAnswers);
        } else {
            // No need to set answers again, just calculate
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers: { [key: string]: string }) => {
        const dichotomies = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        Object.values(finalAnswers).forEach(value => {
            if (value in dichotomies) {
                (dichotomies as any)[value]++;
            }
        });

        let mbtiType = '';
        mbtiType += dichotomies.E >= dichotomies.I ? 'E' : 'I';
        mbtiType += dichotomies.S >= dichotomies.N ? 'S' : 'N';
        mbtiType += dichotomies.T >= dichotomies.F ? 'T' : 'F';
        mbtiType += dichotomies.J >= dichotomies.P ? 'P' : 'J';
        
        setResult(mbtiType);
    };

    const progress = ((currentQuestionIndex + 1) / MBTI_QUESTIONS.length) * 100;

    if (result) {
        const resultKey = result.toLowerCase();
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-starlight dark:bg-space-dark">
                <div className="w-full max-w-lg text-center bg-white dark:bg-space-blue p-8 rounded-2xl shadow-2xl animate-fade-in">
                    <h2 className="text-xl font-bold text-gray-500 dark:text-gray-400">{t('personality.resultTitle')}</h2>
                    <p className="text-4xl font-black my-2 bg-clip-text text-transparent bg-gradient-to-r from-nebula-purple to-cosmic-teal">{t('mbti.'+resultKey+'.name')}</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{result}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{t('mbti.'+resultKey+'.desc')}</p>
                    <button
                        onClick={() => onComplete(result)}
                        className="w-full py-3 font-bold text-white bg-gradient-to-r from-nebula-purple to-cosmic-teal rounded-lg hover:opacity-90 transition-opacity"
                    >
                        {t('horoscope.showHoroscope')}
                    </button>
                </div>
            </div>
        );
    }
    
    const question = MBTI_QUESTIONS[currentQuestionIndex];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-starlight dark:bg-space-dark">
            <div className="w-full max-w-lg">
                <div className="relative mb-6">
                    <button onClick={onBack} className="absolute start-0 top-0 text-cosmic-teal font-bold hover:underline">
                        &larr; {t('personality.backButton')}
                    </button>
                    <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">{t('personality.testTitle')}</h2>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-space-blue rounded-full h-2.5 mb-6">
                    <div className="bg-gradient-to-r from-nebula-purple to-cosmic-teal h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
                </div>

                <div className="bg-white dark:bg-space-blue p-8 rounded-2xl shadow-2xl">
                    <h3 className="text-xl font-semibold text-center mb-6 min-h-[56px] flex items-center justify-center">{t(`mbti.${question.questionKey}`)}</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option.value)}
                                className="w-full text-lg p-4 font-semibold text-center rounded-lg transition-colors duration-200 bg-gray-100 dark:bg-space-dark hover:bg-nebula-purple hover:text-white dark:hover:bg-nebula-purple"
                            >
                                {t(`mbti.${option.textKey}`)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};