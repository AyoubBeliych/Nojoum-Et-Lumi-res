
import React from 'react';
import { ProfileIcon } from './Icons';
import { useLanguage } from './LanguageContext';
import { UserData } from './types';

interface HeaderProps {
  isLoggedIn: boolean;
  userData: UserData | null;
  onProfileClick: () => void;
  showLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, userData, onProfileClick, showLogin }) => {
  const { t, language } = useLanguage();
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = today.toLocaleDateString(language, options);

  return (
    <header className="flex justify-between items-center py-2 px-4 sticky top-0 bg-starlight/80 dark:bg-space-dark/80 backdrop-blur-md z-30">
      <div className="flex-1">
        {/* Placeholder for left side alignment */}
      </div>
      <div className="text-center flex-grow mx-2">
        <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-nebula-purple to-cosmic-teal">
          {t('appTitle')}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</p>
      </div>
      <div className="flex-1 flex justify-end">
        {isLoggedIn ? (
          <button onClick={onProfileClick} className="rounded-full hover:ring-2 hover:ring-cosmic-teal transition-all" aria-label="Profile">
              {userData?.profilePicture ? (
                <img src={userData.profilePicture} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-nebula-purple"/>
              ) : (
                <ProfileIcon className="w-10 h-10 text-cosmic-teal p-1 bg-gray-200 dark:bg-space-blue rounded-full"/>
              )}
          </button>
        ) : (
          <button onClick={showLogin} className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-nebula-purple to-cosmic-teal rounded-full hover:opacity-90 transition-opacity">
            {t('auth.loginLink')}
          </button>
        )}
      </div>
    </header>
  );
};