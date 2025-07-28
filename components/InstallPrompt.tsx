
import React, { useState, useEffect } from 'react';
import { DownloadIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

export const InstallPrompt: React.FC = () => {
    const [installPromptEvent, setInstallPromptEvent] = useState<any>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const handleBeforeInstallPrompt = (event: Event) => {
            event.preventDefault();
            setInstallPromptEvent(event);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (!installPromptEvent) {
            return;
        }
        installPromptEvent.prompt();
        installPromptEvent.userChoice.then((choiceResult: { outcome: string }) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            setInstallPromptEvent(null);
        });
    };

    // Do not show the prompt if the app is already in standalone mode
    if (!installPromptEvent || window.matchMedia('(display-mode: standalone)').matches) {
        return null;
    }

    // A simple translation map for the button text
    const installText: {[key: string]: string} = {
        ar: "تثبيت التطبيق",
        en: "Install App",
        es: "Instalar aplicación",
    }

    return (
        <div className="fixed bottom-24 end-4 z-50 animate-fade-in" dir="ltr">
            <button 
                onClick={handleInstallClick}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-nebula-purple to-cosmic-teal text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform"
                aria-label={installText[t('nav.horoscope')] || 'Install App'}
            >
                <DownloadIcon className="w-5 h-5" />
                <span>{installText[t('nav.horoscope')] || 'Install App'}</span>
            </button>
        </div>
    );
};
