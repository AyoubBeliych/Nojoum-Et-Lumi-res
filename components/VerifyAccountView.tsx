
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { EmailIcon } from './Icons';

interface VerifyAccountViewProps {
  email: string;
  onVerify: (email: string) => void;
}

export const VerifyAccountView: React.FC<VerifyAccountViewProps> = ({ email, onVerify }) => {
    const { t } = useLanguage();
    const [isVerifying, setIsVerifying] = useState(false);

    const handleVerify = () => {
        setIsVerifying(true);
        setTimeout(() => {
            onVerify(email);
        }, 1500);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-starlight dark:bg-space-dark animate-fade-in">
            <div className="w-full max-w-lg text-center bg-white dark:bg-space-blue p-8 rounded-2xl shadow-2xl">
                <EmailIcon className="w-16 h-16 mx-auto mb-4 text-cosmic-teal"/>
                <h1 className="text-3xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-nebula-purple to-cosmic-teal">
                    {t('verify.title')}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{t('verify.subtitle')}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{t('verify.instructions')}</p>
                <button
                    onClick={handleVerify}
                    disabled={isVerifying}
                    className="w-full py-3 font-bold text-white bg-gradient-to-r from-nebula-purple to-cosmic-teal rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105 disabled:opacity-50"
                >
                    {isVerifying ? t('verify.success') : t('verify.button')}
                </button>
            </div>
        </div>
    );
};
