
import React from 'react';
import type { UserData, SupportedLanguage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { SunIcon, MoonIcon, SoundOnIcon, SoundOffIcon, NotificationIcon } from './Icons';

interface SettingsViewProps {
  userData: UserData | null;
  onUpdateUserData: (data: Partial<UserData>) => void;
  onBack: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onManageNotifications: () => void;
  notificationPermission: NotificationPermission | 'unsupported';
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  onBack,
  darkMode,
  onToggleDarkMode,
  soundEnabled,
  onToggleSound,
  onManageNotifications,
  notificationPermission
}) => {
  const { t } = useLanguage();

  const renderNotificationButton = () => {
    switch (notificationPermission) {
      case 'granted':
        return (
          <p className="text-green-400">{t('settings.notifications.enabled')}</p>
        );
      case 'denied':
        return (
          <p className="text-red-400">{t('settings.notifications.denied')}</p>
        );
      case 'default':
      case 'unsupported':
      default:
        return (
            <button onClick={onManageNotifications} className="font-semibold text-cosmic-teal hover:underline">
                {t('settings.notifications.enableButton')}
            </button>
        );
    }
  };


  return (
    <div className="p-4 max-w-lg mx-auto animate-fade-in">
      <div className="relative text-center mb-6">
          <button onClick={onBack} className="absolute start-0 top-1/2 -translate-y-1/2 text-cosmic-teal font-bold hover:underline">
              &larr; {t('personality.backButton')}
          </button>
          <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-nebula-purple to-cosmic-teal">
              {t('settings.title')}
          </h1>
      </div>

      <div className="bg-white/70 dark:bg-space-blue/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 space-y-6">
        
        {/* Theme Setting */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{t('settings.theme.title')}</span>
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-space-dark text-gray-800 dark:text-starlight hover:bg-gray-300 dark:hover:bg-opacity-70 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="w-6 h-6 text-celestial-gold" /> : <MoonIcon className="w-6 h-6 text-nebula-purple" />}
          </button>
        </div>

        {/* Language Setting */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{t('settings.language.title')}</span>
          <LanguageSelector />
        </div>

        {/* Sound Setting */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{t('settings.sound.title')}</span>
           <button
            onClick={onToggleSound}
            className="p-2 rounded-full bg-gray-200 dark:bg-space-dark text-gray-800 dark:text-starlight hover:bg-gray-300 dark:hover:bg-opacity-70 transition-colors"
            aria-label="Toggle sound"
          >
            {soundEnabled ? <SoundOnIcon className="w-6 h-6 text-cosmic-teal" /> : <SoundOffIcon className="w-6 h-6 text-gray-500" />}
          </button>
        </div>

        {/* Notification Setting */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <NotificationIcon className="w-6 h-6 text-nebula-purple" />
            <span className="font-bold text-lg">{t('settings.notifications.title')}</span>
          </div>
          {renderNotificationButton()}
        </div>
        {notificationPermission === 'granted' && (
            <div className="text-center pt-2 border-t border-gray-300 dark:border-space-dark">
                 <button onClick={onManageNotifications} className="font-semibold text-cosmic-teal hover:underline">
                    {t('settings.notifications.dailyReminderButton')}
                </button>
            </div>
        )}

      </div>
    </div>
  );
};