
import { GoogleGenAI } from "@google/genai";
import { LANGUAGES } from '../translations';
import type { SupportedLanguage, UserData } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("Gemini API key is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getDailyHoroscope = async (zodiacNameEn: string, langCode: SupportedLanguage, localizedZodiacName: string): Promise<string> => {
  const languageName = LANGUAGES[langCode]?.name || 'English';
  
  if (!API_KEY) {
    // Return a mock response in the selected language if the key is not available.
    if (langCode === 'ar') {
        return Promise.resolve(`هذه توقعات تجريبية لبرج ${localizedZodiacName}. لإظهار توقعات حقيقية، يجب توفير مفتاح Gemini API.`);
    }
    return Promise.resolve(`This is a mock horoscope for ${zodiacNameEn}. To show real predictions, a Gemini API key must be provided.`);
  }

  try {
    const prompt = `Provide a daily horoscope for the zodiac sign ${zodiacNameEn} (which is "${localizedZodiacName}" in the target language).
      The horoscope should be insightful, positive, and offer some advice for the day, covering aspects like love, career, and health.
      The entire response MUST be in ${languageName}.
      Do not include any English text (unless ${languageName} is English) or introductory phrases like "Here is the horoscope".
      The tone should be encouraging and mystical. Format it into a few paragraphs.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching horoscope from Gemini:", error);
    throw new Error("Failed to fetch horoscope");
  }
};


export const getSelfImprovementTip = async (topicKey: string, langCode: SupportedLanguage, userData: UserData | null): Promise<string> => {
    const languageName = LANGUAGES[langCode]?.name || 'English';
    if (!API_KEY) {
        return Promise.resolve("This is a mock self-improvement tip. An API key is needed for real, personalized advice.");
    }
    
    let prompt = `Provide a short, actionable self-improvement tip about "${topicKey}".`;

    if (userData?.zodiacSign || userData?.mbtiType) {
        prompt += ` This tip should be personalized for someone who is a`;
        if (userData.zodiacSign) {
            prompt += ` ${userData.zodiacSign.nameEn} (zodiac sign)`;
        }
        if (userData.zodiacSign && userData.mbtiType) {
            prompt += ' and';
        }
        if (userData.mbtiType) {
            prompt += ` ${userData.mbtiType} (MBTI personality type)`;
        }
        prompt += `. The advice should resonate with the known traits of this profile.`;
    }

    prompt += `\nThe entire response MUST be in ${languageName}. Do not include introductory phrases. Just provide the tip directly in a few paragraphs.`;
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch(error) {
        console.error("Error fetching self-improvement tip from Gemini:", error);
        throw new Error("Failed to fetch self-improvement tip");
    }
};

export const getDreamInterpretation = async (dream: string, langCode: SupportedLanguage, userData: UserData | null): Promise<string> => {
    const languageName = LANGUAGES[langCode]?.name || 'English';
    if (!API_KEY) {
        if (langCode === 'ar') {
            return Promise.resolve("هذا تفسير حلم تجريبي. مطلوب مفتاح API للحصول على رؤى حقيقية.");
        }
        return Promise.resolve("This is a mock dream interpretation. An API key is needed for real insights.");
    }

    let prompt = `Analyze the following dream: "${dream}".`;
    prompt += ` Provide a psychological and mystical interpretation.`;
    
    if (userData?.zodiacSign || userData?.mbtiType) {
        prompt += ` Tailor the interpretation for someone who is a`;
        if (userData.zodiacSign) {
            prompt += ` ${userData.zodiacSign.nameEn} (zodiac sign)`;
        }
        if (userData.zodiacSign && userData.mbtiType) {
            prompt += ' and';
        }
        if (userData.mbtiType) {
            prompt += ` a ${userData.mbtiType} (MBTI personality type)`;
        }
        prompt += `. Consider how the dream symbols might relate to their known traits.`;
    }

    prompt += `\nThe entire response MUST be in ${languageName}. Do not include introductory phrases. Format it into a few paragraphs.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch(error) {
        console.error("Error fetching dream interpretation from Gemini:", error);
        throw new Error("Failed to fetch dream interpretation");
    }
};
