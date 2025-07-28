
import React from 'react';

interface IconProps {
  className?: string;
}

export const SunIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

export const LoginIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <polyline points="10 17 15 12 10 7"></polyline>
        <line x1="15" y1="12" x2="3" y2="12"></line>
    </svg>
);

export const LoadingSpinner: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`animate-spin ${props.className}`}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

export const HomeIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.94 14.32a2.38 2.38 0 0 0-3.26 0l-1.4 1.4a2.38 2.38 0 0 0 0 3.26l1.4 1.4a2.38 2.38 0 0 0 3.26 0l1.4-1.4a2.38 2.38 0 0 0 0-3.26z"></path><path d="m14 5-3 3"></path><path d="M19 10-3 3"></path><path d="M22 13-3 3"></path><path d="M10 22l-3-3"></path><path d="m2.68 11.68-1.4-1.4a2.38 2.38 0 0 1 0-3.26l1.4-1.4a2.38 2.38 0 0 1 3.26 0l1.4 1.4a2.38 2.38 0 0 1 0 3.26z"></path>
  </svg>
);

export const DreamIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    <path d="M12 16a4 4 0 0 1-8 0"></path>
    <path d="M12 20a4 4 0 0 1-8 0"></path>
  </svg>
);


export const ProfileIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
);

export const LogoutIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);

export const EmailIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

// --- NEW ICONS ---

export const SettingsIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

export const NotificationIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

export const SoundOnIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

export const SoundOffIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="1" x2="1" y2="23"></line>
  </svg>
);

export const TrashIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

// --- Celestial Self-Improvement Icons ---
export const LotusStarIcon: React.FC<IconProps> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s2-6 10-6 10 6 10 6-2 6-10 6-10-6-10-6z"/>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path d="M12 4V2"/>
        <path d="M12 22v-2"/>
        <path d="M16.24 7.76l1.42-1.42"/>
        <path d="M6.34 19.66l1.42-1.42"/>
        <path d="M20 12h2"/>
        <path d="M2 12h2"/>
        <path d="M16.24 16.24l1.42 1.42"/>
        <path d="M6.34 4.34l1.42 1.42"/>
    </svg>
);

export const CometIcon: React.FC<IconProps> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 21.5L4.5 10.5l-3-3L6 3l3 3 11 11-4.5 4.5z"/>
        <path d="M15 3l6 6"/>
        <path d="M2.5 13.5L6 17"/>
    </svg>
);

export const OrbitingStarsIcon: React.FC<IconProps> = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="12" r="8"/>
        <path d="M20.94 11a8 8 0 1 0-9.88 9.88"/>
        <circle cx="6" cy="6" r="1"/>
        <circle cx="18" cy="18" r="1"/>
    </svg>
);


// --- Celestial Zodiac Icons ---
const iconStrokeWidth = "1.5";
const ZodiacBase: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={iconStrokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {children}
    </svg>
);

const Star = ({ cx, cy }: { cx: number, cy: number }) => <circle cx={cx} cy={cy} r={1.2} fill="currentColor" strokeWidth="0" />;
const Line = ({ x1, y1, x2, y2 }: { x1: number, y1: number, x2: number, y2: number }) => <line x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.5" />;

export const AriesIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={7} y1={18} x2={4} y2={12}/> <Line x1={4} y1={12} x2={8} y2={6}/> <Line x1={8} y1={6} x2={16} y2={6}/> <Line x1={16} y1={6} x2={20} y2={12}/> <Star cx={7} cy={18}/> <Star cx={4} cy={12}/> <Star cx={8} cy={6}/> <Star cx={16} cy={6}/> <Star cx={20} cy={12}/> </ZodiacBase> );
export const TaurusIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={5} y1={10} x2={9} y2={6}/> <Line x1={9} y1={6} x2={15} y2={6}/> <Line x1={15} y1={6} x2={19} y2={10}/> <Line x1={9} y1={6} x2={12} y2={14}/> <Line x1={15} y1={6} x2={12} y2={14}/> <Line x1={12} y1={14} x2={12} y2={18}/> <Star cx={5} cy={10}/> <Star cx={9} cy={6}/> <Star cx={15} cy={6}/> <Star cx={19} cy={10}/> <Star cx={12} cy={14}/> <Star cx={12} cy={18}/> </ZodiacBase> );
export const GeminiIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={6} y1={4} x2={9} y2={8}/> <Line x1={9} y1={8} x2={6} y2={20}/> <Line x1={18} y1={4} x2={15} y2={8}/> <Line x1={15} y1={8} x2={18} y2={20}/> <Line x1={9} y1={8} x2={15} y2={8}/> <Star cx={6} cy={4}/> <Star cx={9} cy={8}/> <Star cx={6} cy={20}/> <Star cx={18} cy={4}/> <Star cx={15} cy={8}/> <Star cx={18} cy={20}/> </ZodiacBase> );
export const CancerIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={5} y1={15} x2={8} y2={10}/> <Line x1={8} y1={10} x2={16} y2={10}/> <Line x1={16} y1={10} x2={19} y2={15}/> <Star cx={5} cy={15}/> <Star cx={8} cy={10}/> <Star cx={16} cy={10}/> <Star cx={19} cy={15}/> </ZodiacBase> );
export const LeoIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={4} y1={16} x2={8} y2={12}/> <Line x1={8} y1={12} x2={12} y2={5}/> <Line x1={12} y1={5} x2={16} y2={8}/> <Line x1={16} y1={8} x2={18} y2={12}/> <Line x1={18} y1={12} x2={20} y2={16}/> <Line x1={16} y1={8} x2={21} y2={4}/> <Star cx={4} cy={16}/> <Star cx={8} cy={12}/> <Star cx={12} cy={5}/> <Star cx={16} cy={8}/> <Star cx={18} cy={12}/> <Star cx={20} cy={16}/> <Star cx={21} cy={4}/> </ZodiacBase> );
export const VirgoIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={4} y1={18} x2={7} y2={12}/> <Line x1={7} y1={12} x2={10} y2={14}/> <Line x1={10} y1={14} x2={13} y2={8}/> <Line x1={13} y1={8} x2={16} y2={11}/> <Line x1={16} y1={11} x2={20} y2={5}/> <Star cx={4} cy={18}/> <Star cx={7} cy={12}/> <Star cx={10} cy={14}/> <Star cx={13} cy={8}/> <Star cx={16} cy={11}/> <Star cx={20} cy={5}/> </ZodiacBase> );
export const LibraIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={4} y1={12} x2={8} y2={8}/> <Line x1={8} y1={8} x2={16} y2={8}/> <Line x1={16} y1={8} x2={20} y2={12}/> <Line x1={6} y1={18} x2={18} y2={18}/> <Star cx={4} cy={12}/> <Star cx={8} cy={8}/> <Star cx={16} cy={8}/> <Star cx={20} cy={12}/> <Star cx={6} cy={18}/> <Star cx={18} cy={18}/> </ZodiacBase> );
export const ScorpioIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={4} y1={12} x2={8} y2={8}/> <Line x1={8} y1={8} x2={12} y2={10}/> <Line x1={12} y1={10} x2={16} y2={8}/> <Line x1={16} y1={8} x2={20} y2={12}/> <Line x1={12} y1={10} x2={12} y2={18}/> <Line x1={12} y1={18} x2={16} y2={20}/> <Star cx={4} cy={12}/> <Star cx={8} cy={8}/> <Star cx={12} cy={10}/> <Star cx={16} cy={8}/> <Star cx={20} cy={12}/> <Star cx={12} cy={18}/> <Star cx={16} cy={20}/> </ZodiacBase> );
export const SagittariusIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={6} y1={18} x2={10} y2={14}/> <Line x1={10} y1={14} x2={9} y2={10}/> <Line x1={9} y1={10} x2={14} y2={9}/> <Line x1={14} y1={9} x2={18} y2={5}/> <Line x1={14} y1={9} x2={18} y2={13}/> <Line x1={10} y1={14} x2={14} y2={13}/> <Star cx={6} cy={18}/> <Star cx={10} cy={14}/> <Star cx={9} cy={10}/> <Star cx={14} cy={9}/> <Star cx={18} cy={5}/> <Star cx={18} cy={13}/> </ZodiacBase> );
export const CapricornIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={5} y1={16} x2={8} y2={10}/> <Line x1={8} y1={10} x2={13} y2={6}/> <Line x1={13} y1={6} x2={19} y2={8}/> <Line x1={19} y1={8} x2={16} y2={14}/> <Line x1={16} y1={14} x2={12} y2={18}/> <Star cx={5} cy={16}/> <Star cx={8} cy={10}/> <Star cx={13} cy={6}/> <Star cx={19} cy={8}/> <Star cx={16} cy={14}/> <Star cx={12} cy={18}/> </ZodiacBase> );
export const AquariusIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={4} y1={8} x2={8} y2={12}/> <Line x1={8} y1={12} x2={12} y2={8}/> <Line x1={12} y1={8} x2={16} y2={12}/> <Line x1={16} y1={12} x2={20} y2={8}/> <Line x1={5} y1={16} x2={9} y2={20}/> <Line x1={9} y1={20} x2={13} y2={16}/> <Line x1={13} y1={16} x2={17} y2={20}/> <Line x1={17} y1={20} x2={21} y2={16}/> <Star cx={4} cy={8}/> <Star cx={12} cy={8}/> <Star cx={20} cy={8}/> <Star cx={5} cy={16}/> <Star cx={13} cy={16}/> <Star cx={21} cy={16}/> </ZodiacBase> );
export const PiscesIcon: React.FC<IconProps> = (props) => ( <ZodiacBase {...props}> <Line x1={4} y1={8} x2={8} y2={6}/> <Line x1={8} y1={6} x2={12} y2={10}/> <Line x1={12} y1={10} x2={8} y2={14}/> <Line x1={8} y1={14} x2={4} y2={12}/> <Line x1={16} y1={18} x2={12} y2={20}/> <Line x1={12} y1={20} x2={8} y2={16}/> <Line x1={8} y1={16} x2={12} y2={12}/> <Line x1={12} y1={12} x2={16} y2={14}/> <Line x1={8} y1={10} x2={12} y2={16}/> <Star cx={4} cy={8}/> <Star cx={12} cy={10}/> <Star cx={4} cy={12}/> <Star cx={16} cy={18}/> <Star cx={8} cy={16}/> </ZodiacBase> );
