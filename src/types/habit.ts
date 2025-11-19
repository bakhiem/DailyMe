export type Habit = {
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
};