
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Subscription: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(email){
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <div className="mt-10 p-6 bg-gradient-to-br from-space-dark to-space-blue rounded-2xl shadow-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-2">{t('subscription.title')}</h3>
            <p className="mb-4 opacity-80">{t('subscription.description')}</p>
            {subscribed ? (
                 <p className="text-lg font-bold text-green-300 animate-fade-in">{t('subscription.success')}</p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('subscription.emailPlaceholder')}
                        required
                        className="flex-grow px-4 py-2 rounded-full text-gray-800 dark:text-starlight dark:bg-space-blue border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-celestial-gold"
                    />
                    <button type="submit" className="px-6 py-2 bg-celestial-gold text-space-dark font-bold rounded-full hover:bg-opacity-80 transition-colors transform hover:scale-105">
                        {t('subscription.button')}
                    </button>
                </form>
            )}
        </div>
    );
};