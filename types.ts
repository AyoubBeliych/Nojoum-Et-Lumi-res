
import type { ReactNode, FC } from 'react';
import { LANGUAGES } from './translations';
import { ZODIAC_SIGNS } from './constants';

export interface ZodiacSign {
  nameKey: string;
  nameEn: string;
  Icon: FC<{ className?: string }>;
}

export type AuthMode = 'login' | 'register' | null;

export type SupportedLanguage = keyof typeof LANGUAGES;

export interface UserData {
    email?: string;
    isLoggedIn?: boolean;
    zodiacSign?: { nameKey: string; nameEn: string; }; // Store only serializable data
    mbtiType?: string;
    profilePicture?: string; // Base64 string
    soundEnabled?: boolean;
    notificationsEnabled?: boolean;
    darkMode?: boolean;
    language?: SupportedLanguage;
}

export type ImprovementTopicKey = 'mindfulness' | 'career' | 'relationships';

export type View = 
  | { type: 'horoscope' }
  | { type: 'growth' }
  | { type: 'dreamJournal' }
  | { type: 'profile' }
  | { type: 'settings' }
  | { type: 'personalityTest' }
  | { type: 'improvementTopic'; topicKey: ImprovementTopicKey }
  | { type: 'verifyAccount'; email: string };


export interface MBTIQuestion {
    questionKey: string;
    options: [
        { textKey: string; value: 'E' | 'S' | 'T' | 'J'; },
        { textKey: string; value: 'I' | 'N' | 'F' | 'P'; }
    ]
}