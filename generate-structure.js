const fs = require('fs');
const path = require('path');

const folders = [
  'src/assets/icons',
  'src/assets/images',
  'src/assets/fonts',

  'src/components/common',
  'src/components/mood',
  'src/components/habits',

  'src/screens/Overview/components',
  'src/screens/TodayMood/components',
  'src/screens/Habits/components',
  'src/screens/History/components',
  'src/screens/Analytics/components',
  'src/screens/Settings/components',
  'src/screens/Onboarding/components',

  'src/navigation',

  'src/store',

  'src/types',

  'src/utils',

  'src/theme',

  'src/hooks',

  'src/libs',
];

const files = {
  'src/screens/Overview/OverviewScreen.tsx':
`export const OverviewScreen = () => {
  return null;
};`,

  'src/screens/TodayMood/TodayMoodScreen.tsx':
`export const TodayMoodScreen = () => {
  return null;
};`,

  'src/screens/Habits/HabitsScreen.tsx':
`export const HabitsScreen = () => {
  return null;
};`,

  'src/screens/History/HistoryScreen.tsx':
`export const HistoryScreen = () => {
  return null;
};`,

  'src/screens/Analytics/AnalyticsScreen.tsx':
`export const AnalyticsScreen = () => {
  return null;
};`,

  'src/screens/Settings/SettingsScreen.tsx':
`export const SettingsScreen = () => {
  return null;
};`,

  'src/screens/Onboarding/OnboardingScreen.tsx':
`export const OnboardingScreen = () => {
  return null;
};`,

  'src/navigation/AppNavigator.tsx':
`export const AppNavigator = () => {
  return null;
};`,

  'src/navigation/MainTabs.tsx':
`export const MainTabs = () => {
  return null;
};`,

  'src/navigation/OnboardingNavigator.tsx':
`export const OnboardingNavigator = () => {
  return null;
};`,

  'src/store/moodStore.ts':
`import { create } from 'zustand';

export const useMoodStore = create((set) => ({
  moods: [],
  addMood: (entry) => set((state) => ({
    moods: [...state.moods, entry],
  })),
}));`,

  'src/store/habitStore.ts':
`import { create } from 'zustand';

export const useHabitStore = create((set) => ({
  habits: [],
  toggleHabit: (id) => set((state) => ({
    habits: state.habits.map(h =>
      h.id === id ? { ...h, isCompleted: !h.isCompleted } : h
    ),
  })),
}));`,

  'src/store/appStore.ts':
`import { create } from 'zustand';

export const useAppStore = create((set) => ({
  theme: 'light',
  language: 'vn',
  onboardingDone: false,
  setTheme: (theme) => set({ theme }),
  setLanguage: (lng) => set({ language: lng }),
  finishOnboarding: () => set({ onboardingDone: true }),
}));`,

  'src/types/mood.ts':
`export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export type MoodEntry = {
  id: string;
  date: string;
  mood: MoodLevel;
  note?: string;
};`,

  'src/types/habit.ts':
`export type Habit = {
  id: string;
  title: string;
  icon: string;
  order: number;
};

export type DailyHabitItem = {
  habitId: string;
  isCompleted: boolean;
};

export type DailyHabitRecord = {
  date: string;
  items: DailyHabitItem[];
};`,

  'src/types/analytics.ts':
`export type WeeklyMoodStat = {
  date: string;
  mood: number | null;
};`,

  'src/types/index.ts': 
`export * from './mood';
export * from './habit';
export * from './analytics';`,

  'src/utils/date.ts':
`export const getToday = () => {
  const d = new Date();
  return d.toISOString().split('T')[0];
};`,

  'src/utils/constants.ts':
`export const APP_NAME = 'DailyMe';`,

  'src/theme/colors.ts':
`export const colors = {
  primary: '#A58BD9',
  background: '#FAFAF8',
  text: '#222222'
};`,

  'src/hooks/useAppTheme.ts':
`import { useAppStore } from '../store/appStore';

export const useAppTheme = () => {
  const theme = useAppStore((s) => s.theme);
  return theme;
};`,

  'src/libs/mmkv.ts':
`import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV();`,
};

function createFolders() {
  folders.forEach((folder) => {
    const dirPath = path.join(process.cwd(), folder);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log('Created folder:', folder);
    }
  });
}

function createFiles() {
  Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, content);
      console.log('Created file:', filePath);
    }
  });
}

createFolders();
createFiles();

console.log('\n🎉 Project structure created successfully!');