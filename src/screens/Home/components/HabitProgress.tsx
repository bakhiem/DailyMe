import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DailyHabitItem, Habit } from '../../../types';
import { HABBIT } from '../../../utils/constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {
  dailyHabits?: DailyHabitItem[];
  updateHabit: (habits: DailyHabitItem[]) => void;
};

type HabitItemProps = {
  habit: Habit;
  isDone: boolean;
  onPress: () => void;
};

const HabitItem = ({ habit, isDone, onPress }: HabitItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.habitItem, isDone && styles.habitDone]}
  >
    {/* <Checkbox */}
    <BouncyCheckbox
      isChecked={isDone}
      fillColor="#7ab59d"
      onPress={onPress}
      innerIconStyle={styles.radius4}
      iconStyle={styles.radius4}
      useBuiltInState={false}
      size={16}
      style={styles.checkboxStyle}
    />
    <Text style={styles.moodEmoji}>{habit.icon}</Text>
    <Text style={[styles.habitText, isDone && styles.habitTextDone]}>
      {habit.title}
    </Text>
  </TouchableOpacity>
);

export const HabitProgress = ({ dailyHabits, updateHabit }: Props) => {
  const numberOfCompletedHabits =
    dailyHabits?.filter(habit => habit.isCompleted).length || 0;
  const updateHabitStatus = (habitId: string, isDone: boolean) => {
    const updatedHabits = dailyHabits ? [...dailyHabits] : [];
    for (const habit of updatedHabits) {
      if (habit?.habitId === habitId) {
        habit.isCompleted = !isDone;
      }
    }
    updateHabit(updatedHabits);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>✨ Daily Habits</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {numberOfCompletedHabits}/{HABBIT?.length}
          </Text>
        </View>
      </View>
      <Text style={styles.description}>
        Keep building healthy habits, one day at a time
      </Text>
      <View style={styles.listHabit}>
        {HABBIT.map(habit => {
          const isDone =
            dailyHabits?.find(item => item.habitId === habit.id)?.isCompleted ||
            false;
          return (
            <HabitItem
              key={habit.id}
              habit={habit}
              isDone={isDone}
              onPress={() => updateHabitStatus(habit.id, isDone)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfcfa',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressContainer: {
    backgroundColor: '#e6f2f7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  progressText: {
    fontSize: 12,
  },
  description: {
    color: '#6b7b69',
    fontSize: 13,
    marginTop: 8,
  },
  listHabit: {
    marginTop: 16,
    justifyContent: 'space-between',
  },
  habitItem: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 12,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  habitDone: {
    backgroundColor: '#f0f4f1',
  },
  moodEmoji: {
    fontSize: 16,
  },
  habitText: {
    fontSize: 13,
    marginLeft: 8,
  },
  habitTextDone: {
    textDecorationLine: 'line-through',
  },
  checkboxStyle: {
   width: 16, marginRight: 8 
  },
  radius4: {
    borderRadius: 4,
  }
});
