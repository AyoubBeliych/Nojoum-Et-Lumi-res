
import React, { useRef } from 'react';
import type { UserData, View } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { ZODIAC_SIGNS } from '../constants';
import { LogoutIcon, UserIcon, ProfileIcon, SettingsIcon, TrashIcon } from './Icons';

interface ProfileViewProps {
    userData: UserData | null;
    onLogout: () => void;
    onNavigate: (view: View) => void;
    onUpdateUserData: (data: Partial<UserData>) => void;
    onForgetMe: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ userData, onLogout, onNavigate, onUpdateUserData, onForgetMe }) => {
    const { t } = useLanguage();
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const zodiac = ZODIAC_SIGNS.find(sign => sign.nameEn === userData?.zodiacSign?.nameEn);
    const mbti = userData?.mbtiType;

    const handlePictureUpload = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onUpdateUserData({ profilePicture: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    if (!userData?.isLoggedIn) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-8 h-[calc(100vh-150px)] max-w-lg mx-auto">
                <UserIcon className="w-24 h-24 text-gray-400 dark:text-gray-600 mb-4" />
                <h2 className="text-2xl font-bold mb-2">{t('profile.notLoggedIn')}</h2>
                <p className="text-gray-500 dark:text-gray-400">{t('profile.loginPrompt')}</p>
            </div>
        )
    }

    return (
        <div className="p-4 max-w-lg mx-auto animate-fade-in">
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            <div className="text-center my-4 relative">
                 <button onClick={handlePictureUpload} className="group relative inline-block">
                    {userData.profilePicture ? (
                        <img src={userData.profilePicture} alt="Profile" className="w-28 h-28 rounded-full object-cover border-4 border-nebula-purple transition-opacity group-hover:opacity-70" />
                    ) : (
                        <ProfileIcon className="w-28 h-28 text-cosmic-teal inline-block p-3 bg-white/10 dark:bg-space-blue/50 rounded-full transition-opacity group-hover:opacity-70" />
                    )}
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-sm font-bold">{userData.profilePicture ? t('profile.changePicture') : t('profile.uploadPicture')}</span>
                    </div>
                 </button>
                 <h2 className="text-2xl font-bold mt-2">{userData.email}</h2>
            </div>
            
            <div className="bg-white/70 dark:bg-space-blue/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 space-y-4">
                 <button
                    onClick={() => onNavigate({type: 'settings'})}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-space-dark transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <SettingsIcon className="w-6 h-6 text-cosmic-teal" />
                        <span className="text-lg font-semibold">{t('profile.settingsButton')}</span>
                    </div>
                    <span className="text-lg">&rsaquo;</span>
                </button>

                <div className="border-t border-gray-300 dark:border-space-dark my-2"></div>

                <div>
                    <h3 className="font-bold text-gray-500 dark:text-gray-400">{t('profile.zodiac')}</h3>
                    {zodiac ? (
                        <div className="flex items-center gap-3 mt-1">
                            <zodiac.Icon className="w-8 h-8 text-nebula-purple" />
                            <p className="text-lg font-semibold">{t(`zodiac.${zodiac.nameKey}`)}</p>
                        </div>
                    ) : <p className="text-gray-500">{t('profile.noData')}</p>}
                </div>

                 <div>
                    <h3 className="font-bold text-gray-500 dark:text-gray-400">{t('profile.mbti')}</h3>
                    {mbti ? (
                        <p className="text-lg font-semibold">{mbti} - {t(`mbti.${mbti.toLowerCase()}.name`)}</p>
                    ) : <p className="text-gray-500">{t('profile.noData')}</p>}
                </div>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-4">
                <button
                    onClick={onLogout}
                    className="flex items-center gap-2 px-6 py-3 font-bold text-white bg-gradient-to-r from-nebula-purple to-cosmic-teal rounded-full hover:opacity-90 transition-opacity transform hover:scale-105"
                >
                    <LogoutIcon className="w-5 h-5"/>
                    <span>{t('profile.logoutButton')}</span>
                </button>
            </div>
             <div className="mt-4 text-center">
                 <button
                    onClick={onForgetMe}
                    className="flex items-center gap-2 mx-auto text-sm text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                    <TrashIcon className="w-4 h-4"/>
                    <span>{t('profile.forgetMe')}</span>
                </button>
            </div>
        </div>
    );
};