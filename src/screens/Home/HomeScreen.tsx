import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { format } from 'date-fns';
import { useState } from 'react';
import { DailyHabitItem, MoodEntry } from '../../types';
import { ChooseMood } from './components/ChooseMood';
import { HabitProgress } from './components/HabitProgress';
import { HABBIT } from '../../utils/constants';

export const HomeScreen = () => {
  const [activeMood, setActiveMood] = useState<MoodEntry>();
  const [dailyHabits, setDailyHabits] = useState<DailyHabitItem[]>(HABBIT.map(habit => ({
    habitId: habit.id,
    isCompleted: false,
  })));

  const getHelloText = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning! 🌱';
    } else if (currentHour < 18) {
      return 'Good afternoon! ☀️';
    } else {
      return 'Good evening! 🌙';
    }
  };

  const getDate = () => {
    const currenDate = new Date();
    return format(currenDate, 'EEEE, MMMM dd, yyyy');
  };

  const updateHabit = (habits: DailyHabitItem[]) => {
    setDailyHabits(habits);
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.helloText}>{getHelloText()}</Text>
        <Text style={styles.date}>{getDate()}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ChooseMood activeMood={activeMood} setActiveMood={setActiveMood}/>
        <HabitProgress dailyHabits={dailyHabits} updateHabit={updateHabit}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    backgroundColor: '#a8c79f',
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
  },
  helloText: {
    fontSize: 16,
    color: '#fff',
  },
  date: {
    color: '#fff',
    marginTop: 4,
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
});
