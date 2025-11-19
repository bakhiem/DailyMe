import { create } from 'zustand';

export const useHabitStore = create((set) => ({
  habits: [],
  toggleHabit: (id) => set((state) => ({
    habits: state.habits.map(h =>
      h.id === id ? { ...h, isCompleted: !h.isCompleted } : h
    ),
  })),
}));