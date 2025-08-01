
import type { UserData } from './types';

const USER_DATA_KEY = 'horoscopeAppUserData';

export const saveUserData = (data: Partial<UserData>): void => {
    try {
        const existingData = getUserData() || {};
        const newData: UserData = { ...existingData, ...data };
        
        // Ensure we only store serializable data, not React components
        const serializableData = {
            ...newData,
            zodiacSign: newData.zodiacSign ? { nameEn: newData.zodiacSign.nameEn, nameKey: newData.zodiacSign.nameKey } : undefined,
        };
        const dataString = JSON.stringify(serializableData);
        localStorage.setItem(USER_DATA_KEY, dataString);
    } catch (error) {
        console.error("Could not save user data to localStorage", error);
    }
};

export const getUserData = (): UserData | null => {
    try {
        const dataString = localStorage.getItem(USER_DATA_KEY);
        if (dataString) {
            return JSON.parse(dataString);
        }
        return null;
    } catch (error) {
        console.error("Could not retrieve user data from localStorage", error);
        return null;
    }
};

export const logoutUser = (): void => {
    try {
        const data = getUserData();
        if (data) {
            const loggedOutData: UserData = {
                ...data,
                isLoggedIn: false,
                // Keep email, settings, etc.
            };
            saveUserData(loggedOutData);
        }
    } catch (error) {
        console.error("Could not update user data on logout", error);
    }
};

export const clearAllUserData = (): void => {
    try {
        localStorage.removeItem(USER_DATA_KEY);
    } catch (error) {
        console.error("Could not remove user data from localStorage", error);
    }
}