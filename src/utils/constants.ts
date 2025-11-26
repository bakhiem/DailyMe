import { Habit, MoodEntry } from "../types";

export const APP_NAME = 'DailyMe';

export const FEELING_MOODS: MoodEntry[] = [
  { emotion: 'HAPPY', text: 'Happy', icon: '😊' },
  { emotion: 'CALM', text: 'Calm', icon: '😌' },
  { emotion: 'SAD', text: 'Sad', icon: '😔' },
  { emotion: 'ANGRY', text: 'Angry', icon: '😠' },
  { emotion: 'ANXIOUS', text: 'Anxious', icon: '😰' },
  { emotion: 'TIRED', text: 'Tired', icon: '😴' },
];

export const HABBIT: Habit[] = [
  { id: '1', title: 'Drink Water', icon: '💧', order: 1 },
  { id: '2', title: 'Exercise', icon: '🏃‍♂️', order: 2 },
  { id: '3', title: 'Read Book', icon: '📚', order: 3 },
  { id: '4', title: 'Meditate', icon: '🧘‍♀️', order: 4 },
  { id: '5', title: 'Sleep Early', icon: '🌙', order: 5 },
];