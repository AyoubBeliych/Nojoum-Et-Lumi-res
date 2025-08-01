
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './Header';
import { ZodiacSelector } from './ZodiacSelector';
import { HoroscopeDisplay } from './HoroscopeDisplay';
import { AuthModal } from './AuthModal';
import { Subscription } from './Subscription';
import { getDailyHoroscope } from './geminiService';
import { ZODIAC_SIGNS } from './constants';
import type { ZodiacSign, AuthMode, UserData, View } from './types';
import { useLanguage } from './LanguageContext';
import { HoroscopeFinder } from './HoroscopeFinder';
import { PersonalityTestView } from './PersonalityTestView';
import { ImprovementTopicView } from './ImprovementTopicView';
import { getUserData, saveUserData, logoutUser, clearAllUserData } from './userDataService';
import { BottomNavBar } from './BottomNavBar';
import { GrowthView } from './GrowthView';
import { ProfileView } from './ProfileView';
import { DreamJournalView } from './DreamJournalView';
import { VerifyAccountView } from './VerifyAccountView';
import { SettingsView } from './SettingsView';
import { soundService } from './soundService';
import { notificationService } from './notificationService';
import { InstallPrompt } from './InstallPrompt';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacSign | null>(null);
  const [horoscope, setHoroscope] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [view, setView] = useState<View>({ type: 'horoscope' });
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | 'unsupported'>('default');

  const { t, language, setLanguage } = useLanguage();
  const isLoggedIn = userData?.isLoggedIn ?? false;
  const soundEnabled = userData?.soundEnabled ?? true;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const loadedData = getUserData();
    if (loadedData) {
      setUserData(loadedData);
      setDarkMode(loadedData.darkMode ?? true);
      soundService.setSoundEnabled(loadedData.soundEnabled ?? true);
      setLanguage(loadedData.language ?? 'ar');

      if (loadedData.zodiacSign) {
        const fullZodiacObject = ZODIAC_SIGNS.find(sign => sign.nameEn === loadedData.zodiacSign?.nameEn);
        if(fullZodiacObject){
            setSelectedZodiac(fullZodiacObject);
        }
      }
    }
    setNotificationPermission(notificationService.hasPermission() ? 'granted' : ('Notification' in window ? Notification.permission : 'unsupported'));
  }, []);
  
  useEffect(() => {
      if(selectedZodiac && view.type === 'horoscope'){
        handleZodiacSelect(selectedZodiac, true);
      }
  }, [language, selectedZodiac, view.type]);


  const handleZodiacSelect = useCallback(async (zodiac: ZodiacSign, isPreselected: boolean = false) => {
    soundService.playSound('click');
    setSelectedZodiac(zodiac);
    if (!isPreselected) {
        updateUserData({ zodiacSign: zodiac });
    }
    setIsLoading(true);
    setHoroscope('');
    setError(null);
    try {
      const localizedZodiacName = t(`zodiac.${zodiac.nameKey}`);
      const dailyHoroscope = await getDailyHoroscope(zodiac.nameEn, language, localizedZodiacName);
      setHoroscope(dailyHoroscope);
    } catch (err) {
      setError(t('error.fetch'));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [language, t]);
  
  const updateUserData = (data: Partial<UserData>) => {
    const loadedData = getUserData() || {};
    const newData = { ...loadedData, ...userData, ...data };
    setUserData(newData);
    saveUserData(newData);
  };
  
  const handleRegister = (email: string) => {
    soundService.playSound('success');
    setAuthMode(null);
    setView({type: 'verifyAccount', email});
  };
  
  const handleLogin = (email: string) => {
    soundService.playSound('success');
    setAuthMode(null);
    updateUserData({ email, isLoggedIn: true });
    setView({type: 'horoscope'});
  };
  
  const handleVerify = (email: string) => {
     soundService.playSound('success');
     updateUserData({ email, isLoggedIn: true });
     setView({type: 'profile'});
  }

  const handleLogout = () => {
    soundService.playSound('navigate');
    logoutUser();
    updateUserData({ isLoggedIn: false }); // Keep email and settings
    setView({type: 'horoscope'});
  }

  const handleForgetMe = () => {
    if (window.confirm(t('profile.forgetMeConfirm'))) {
        soundService.playSound('navigate');
        clearAllUserData();
        setUserData(null);
        setAuthMode('login');
        setView({ type: 'horoscope'});
    }
  }

  const handlePersonalityTestComplete = (mbtiType: string) => {
    soundService.playSound('success');
    updateUserData({ mbtiType });
    setView({ type: 'growth' });
  };
  
  const handlePageChange = (page: View['type']) => {
    soundService.playSound('navigate');
    if ((page === 'dreamJournal' || page === 'profile') && !isLoggedIn) {
        setAuthMode('login');
    } else {
        setView({ type: page } as View);
    }
  }

  const handleToggleDarkMode = () => {
    soundService.playSound('click');
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateUserData({ darkMode: newDarkMode });
  }

  const handleToggleSound = () => {
      const newSoundEnabled = !soundEnabled;
      soundService.setSoundEnabled(newSoundEnabled);
      if (newSoundEnabled) {
        soundService.playSound('click');
      }
      updateUserData({ soundEnabled: newSoundEnabled });
  }

  const handleSetLanguage = (lang: any) => {
    soundService.playSound('click');
    setLanguage(lang);
    updateUserData({ language: lang });
  }

  const handleManageNotifications = async () => {
    soundService.playSound('click');
    if (!notificationService.hasPermission()) {
        const permission = await notificationService.requestPermission();
        setNotificationPermission(permission);
        if (permission === 'granted') {
            updateUserData({ notificationsEnabled: true });
            notificationService.showNotification(t('settings.notifications.enabledTitle'), {
                body: t('settings.notifications.enabledBody')
            });
        }
    } else {
        // Schedule a sample notification
        notificationService.scheduleDailyReminder(
            t('horoscope.title', { sign: selectedZodiac ? t(`zodiac.${selectedZodiac.nameKey}`) : t('appTitle') }),
            t('settings.notifications.dailyReminderBody')
        );
    }
  }

  const renderHoroscopeView = () => (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      <main onClick={() => soundService.playSound('click')}>
        {isLoggedIn && userData?.mbtiType && (
            <div className="p-4 bg-white/10 dark:bg-space-blue/50 backdrop-blur-sm rounded-2xl shadow-lg text-center mb-6">
                <p className="font-bold text-lg text-cosmic-teal dark:text-cosmic-teal">
                    {t('personality.welcome', { type: userData.mbtiType, name: t(`mbti.${userData.mbtiType.toLowerCase()}.name`) })}
                </p>
            </div>
        )}

        <HoroscopeFinder onZodiacFound={(zodiac) => handleZodiacSelect(zodiac)} />

        <ZodiacSelector
          zodiacs={ZODIAC_SIGNS}
          selectedZodiac={selectedZodiac}
          onSelect={handleZodiacSelect}
        />

        <div className="mt-6">
          <HoroscopeDisplay
            zodiac={selectedZodiac}
            horoscope={horoscope}
            isLoading={isLoading}
            error={error}
          />
        </div>
        
        {!isLoggedIn && <Subscription />}
      </main>
    </div>
  );

  const renderContent = () => {
    switch (view.type) {
        case 'personalityTest':
            return <PersonalityTestView onComplete={handlePersonalityTestComplete} onBack={() => setView({ type: 'growth' })} />;
        case 'improvementTopic':
            return <ImprovementTopicView topicKey={view.topicKey} userData={userData} onBack={() => setView({ type: 'growth' })} />;
        case 'growth':
            return <GrowthView setView={setView} userData={userData} />;
        case 'profile':
            return <ProfileView userData={userData} onLogout={handleLogout} onNavigate={setView} onUpdateUserData={updateUserData} onForgetMe={handleForgetMe}/>;
        case 'dreamJournal':
            return <DreamJournalView userData={userData}/>;
        case 'verifyAccount':
            return <VerifyAccountView email={view.email} onVerify={handleVerify} />
        case 'settings':
            return <SettingsView 
                userData={userData}
                onUpdateUserData={updateUserData}
                onBack={() => setView({ type: 'profile' })}
                darkMode={darkMode}
                onToggleDarkMode={handleToggleDarkMode}
                soundEnabled={soundEnabled}
                onToggleSound={handleToggleSound}
                onManageNotifications={handleManageNotifications}
                notificationPermission={notificationPermission}
            />
        case 'horoscope':
        default:
            return renderHoroscopeView();
    }
  };

  const showHeader = ['horoscope', 'growth', 'dreamJournal'].includes(view.type);
  const showNav = ['horoscope', 'growth', 'dreamJournal', 'profile'].includes(view.type);

  return (
    <div className="min-h-screen text-gray-800 dark:text-starlight transition-colors duration-300 pb-24">
       {showHeader && <Header 
            isLoggedIn={isLoggedIn}
            userData={userData}
            onProfileClick={() => handlePageChange('profile')}
            showLogin={() => { setAuthMode('login'); soundService.playSound('click'); }}
       />}
      
      {renderContent()}

      {showNav && <BottomNavBar activePage={view.type} onNavigate={handlePageChange} />}

      <AuthModal 
        mode={authMode} 
        setMode={(mode) => { setAuthMode(mode); soundService.playSound('click');}} 
        onLogin={handleLogin}
        onRegister={handleRegister}
        initialEmail={userData?.email}
      />
      <InstallPrompt />
    </div>
  );
}
