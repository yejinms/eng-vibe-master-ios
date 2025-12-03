// Storage utility for Capacitor and Web compatibility
import { Preferences } from '@capacitor/preferences';

// Check if running in Capacitor environment
const isCapacitor = () => {
  return typeof window !== 'undefined' && (window as any).Capacitor !== undefined;
};

// Fallback to localStorage for web development
const localStorageAvailable = () => {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};

export const storage = {
  async get(key: string): Promise<any> {
    if (isCapacitor()) {
      try {
        const { value } = await Preferences.get({ key });
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error('Storage get error:', error);
        return null;
      }
    } else {
      // Fallback to localStorage for web
      if (localStorageAvailable()) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      }
      return null;
    }
  },
  
  async set(key: string, value: any): Promise<void> {
    if (isCapacitor()) {
      try {
        await Preferences.set({ 
          key, 
          value: JSON.stringify(value) 
        });
      } catch (error) {
        console.error('Storage set error:', error);
      }
    } else {
      // Fallback to localStorage for web
      if (localStorageAvailable()) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  },
  
  async remove(key: string): Promise<void> {
    if (isCapacitor()) {
      try {
        await Preferences.remove({ key });
      } catch (error) {
        console.error('Storage remove error:', error);
      }
    } else {
      // Fallback to localStorage for web
      if (localStorageAvailable()) {
        localStorage.removeItem(key);
      }
    }
  }
};

