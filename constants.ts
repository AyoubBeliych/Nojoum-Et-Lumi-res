
import type { ZodiacSign, MBTIQuestion, ImprovementTopicKey } from './types';
import { AriesIcon, TaurusIcon, GeminiIcon, CancerIcon, LeoIcon, VirgoIcon, LibraIcon, ScorpioIcon, SagittariusIcon, CapricornIcon, AquariusIcon, PiscesIcon, CometIcon, OrbitingStarsIcon, LotusStarIcon } from './Icons';

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { nameKey: 'aries', nameEn: 'Aries', Icon: AriesIcon },
  { nameKey: 'taurus', nameEn: 'Taurus', Icon: TaurusIcon },
  { nameKey: 'gemini', nameEn: 'Gemini', Icon: GeminiIcon },
  { nameKey: 'cancer', nameEn: 'Cancer', Icon: CancerIcon },
  { nameKey: 'leo', nameEn: 'Leo', Icon: LeoIcon },
  { nameKey: 'virgo', nameEn: 'Virgo', Icon: VirgoIcon },
  { nameKey: 'libra', nameEn: 'Libra', Icon: LibraIcon },
  { nameKey: 'scorpio', nameEn: 'Scorpio', Icon: ScorpioIcon },
  { nameKey: 'sagittarius', nameEn: 'Sagittarius', Icon: SagittariusIcon },
  { nameKey: 'capricorn', nameEn: 'Capricorn', Icon: CapricornIcon },
  { nameKey: 'aquarius', nameEn: 'Aquarius', Icon: AquariusIcon },
  { nameKey: 'pisces', nameEn: 'Pisces', Icon: PiscesIcon },
];

export const ZODIAC_DATES: { nameEn: string, start: string, end: string }[] = [
    { nameEn: 'Aries', start: '03-21', end: '04-19' },
    { nameEn: 'Taurus', start: '04-20', end: '05-20' },
    { nameEn: 'Gemini', start: '05-21', end: '06-20' },
    { nameEn: 'Cancer', start: '06-21', end: '07-22' },
    { nameEn: 'Leo', start: '07-23', end: '08-22' },
    { nameEn: 'Virgo', start: '08-23', end: '09-22' },
    { nameEn: 'Libra', start: '09-23', end: '10-22' },
    { nameEn: 'Scorpio', start: '10-23', end: '11-21' },
    { nameEn: 'Sagittarius', start: '11-22', end: '12-21' },
    { nameEn: 'Capricorn', start: '12-22', end: '01-19' },
    { nameEn: 'Aquarius', start: '01-20', end: '02-18' },
    { nameEn: 'Pisces', start: '02-19', end: '03-20' },
];

export const MBTI_QUESTIONS: MBTIQuestion[] = [
    { questionKey: 'q1', options: [{ textKey: 'q1a', value: 'E' }, { textKey: 'q1b', value: 'I' }] },
    { questionKey: 'q2', options: [{ textKey: 'q2a', value: 'S' }, { textKey: 'q2b', value: 'N' }] },
    { questionKey: 'q3', options: [{ textKey: 'q3a', value: 'T' }, { textKey: 'q3b', value: 'F' }] },
    { questionKey: 'q4', options: [{ textKey: 'q4a', value: 'J' }, { textKey: 'q4b', value: 'P' }] },
    { questionKey: 'q5', options: [{ textKey: 'q5a', value: 'E' }, { textKey: 'q5b', value: 'I' }] },
    { questionKey: 'q6', options: [{ textKey: 'q6a', value: 'S' }, { textKey: 'q6b', value: 'N' }] },
    { questionKey: 'q7', options: [{ textKey: 'q7a', value: 'T' }, { textKey: 'q7b', value: 'F' }] },
    { questionKey: 'q8', options: [{ textKey: 'q8a', value: 'J' }, { textKey: 'q8b', value: 'P' }] },
    { questionKey: 'q9', options: [{ textKey: 'q9a', value: 'E' }, { textKey: 'q9b', value: 'I' }] },
    { questionKey: 'q10', options: [{ textKey: 'q10a', value: 'S' }, { textKey: 'q10b', value: 'N' }] },
    { questionKey: 'q11', options: [{ textKey: 'q11a', value: 'T' }, { textKey: 'q11b', value: 'F' }] },
    { questionKey: 'q12', options: [{ textKey: 'q12a', value: 'J' }, { textKey: 'q12b', value: 'P' }] },
];

export const IMPROVEMENT_TOPICS: { key: ImprovementTopicKey; icon: React.FC<{className?: string}> }[] = [
    { key: 'mindfulness', icon: LotusStarIcon },
    { key: 'career', icon: CometIcon },
    { key: 'relationships', icon: OrbitingStarsIcon },
];