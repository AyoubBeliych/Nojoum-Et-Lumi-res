
import React, { useState, useEffect } from 'react';
import type { AuthMode } from './types';
import { CloseIcon } from './Icons';
import { useLanguage } from './LanguageContext';

interface AuthModalProps {
  mode: AuthMode;
  setMode: (mode: AuthMode) => void;
  onLogin: (email: string) => void;
  onRegister: (email: string) => void;
  initialEmail?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({ mode, setMode, onLogin, onRegister, initialEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useLanguage();

  useEffect(() => {
    if (mode === 'login' && initialEmail) {
        setEmail(initialEmail);
    } else {
        setEmail('');
    }
    setPassword('');
    setConfirmPassword('');
    setMessage('');
  }, [mode, initialEmail]);

  if (!mode) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'register') {
        if (password !== confirmPassword) {
          setMessage(t('auth.errorMatch'));
          return;
        }
        setMessage(t('auth.registerSuccess'));
        setTimeout(() => onRegister(email), 1500);
    } else { // login
        setMessage(t('auth.loginSuccess'));
        setTimeout(() => onLogin(email), 1500);
    }
  };

  const isRegister = mode === 'register';

  return (
    <div 
        className="fixed inset-0 bg-space-dark/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity animate-fade-in"
        onClick={() => setMode(null)}
    >
      <div 
        className="bg-white dark:bg-space-blue rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
            onClick={() => setMode(null)} 
            className="absolute top-4 end-4 p-2 text-gray-400 hover:text-starlight rounded-full hover:bg-space-dark/50 dark:hover:bg-space-dark transition-colors"
            aria-label="Close"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-nebula-purple to-cosmic-teal">
          {isRegister ? t('auth.registerTitle') : t('auth.loginTitle')}
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          {isRegister ? t('auth.registerSubtitle') : t('auth.loginSubtitle')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={t('auth.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-100 dark:bg-space-dark border-2 border-transparent focus:border-cosmic-teal rounded-lg outline-none transition"
          />
          <input
            type="password"
            placeholder={t('auth.passwordPlaceholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-100 dark:bg-space-dark border-2 border-transparent focus:border-cosmic-teal rounded-lg outline-none transition"
          />
          {isRegister && (
            <input
              type="password"
              placeholder={t('auth.confirmPasswordPlaceholder')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-100 dark:bg-space-dark border-2 border-transparent focus:border-cosmic-teal rounded-lg outline-none transition"
            />
          )}

          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-gradient-to-r from-nebula-purple to-cosmic-teal rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105"
            disabled={!!message}
          >
            {isRegister ? t('auth.registerButton') : t('auth.loginButton')}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-400">{message}</p>}

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          {isRegister ? t('auth.alreadyHaveAccount') : t('auth.noAccount')}{' '}
          <button 
            onClick={() => setMode(isRegister ? 'login' : 'register')}
            className="font-bold text-cosmic-teal hover:underline"
            disabled={!!message}
          >
            {isRegister ? t('auth.loginLink') : t('auth.registerLink')}
          </button>
        </p>
      </div>
    </div>
  );
};