import { create } from 'zustand';

export const useAppStore = create((set) => ({
  theme: 'light',
  language: 'vn',
  onboardingDone: false,
  setTheme: (theme) => set({ theme }),
  setLanguage: (lng) => set({ language: lng }),
  finishOnboarding: () => set({ onboardingDone: true }),
}));