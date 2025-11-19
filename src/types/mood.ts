export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export type MoodEntry = {
  id: string;
  date: string;
  mood: MoodLevel;
  note?: string;
};