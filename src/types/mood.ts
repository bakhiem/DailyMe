export type Emotion = 'HAPPY' | 'CALM' | 'SAD' | 'ANGRY' | 'ANXIOUS' | 'TIRED';

export type MoodEntry = {
  text: string;
  icon: string;
  emotion: Emotion;
  note?: string;
};