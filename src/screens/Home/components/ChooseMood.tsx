import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MoodEntry } from '../../../types';
import { FEELING_MOODS } from '../../../utils/constants';

type Props = {
  activeMood?: MoodEntry;
  setActiveMood: (mood: MoodEntry) => void;
};

type MoodItemProps = {
  mood: MoodEntry;
  isActive: boolean;
  onPress: () => void;
};

const MoodItem = ({ mood, isActive, onPress }: MoodItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.moodItem, isActive && styles.moodItemActive]}
  >
    <Text style={styles.moodEmoji}>{mood.icon}</Text>
    <Text style={[styles.moodText, isActive && styles.moodTextActive]}>
      {mood.text}
    </Text>
  </TouchableOpacity>
);

export const ChooseMood = ({ activeMood, setActiveMood }: Props) => {
  return (
    <View style={styles.moodSection}>
      <Text>🌸 How are you feeling?</Text>
      <Text style={styles.moodDes}>
        Track your mood to better understand your wellbeing
      </Text>
      <View style={styles.listMood}>
        {FEELING_MOODS.map(mood => {
          const isActive = activeMood?.emotion === mood.emotion;
          return (
            <MoodItem
              key={mood.emotion}
              mood={mood}
              isActive={isActive}
              onPress={() => setActiveMood(mood)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moodSection: {
    backgroundColor: '#fdfcfa',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  moodDes: {
    color: '#6b7b69',
    fontSize: 13,
    marginTop: 8,
  },
  listMood: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  moodItem: {
    width: '29%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  moodItemActive: {
    backgroundColor: '#89bca6',
    borderWidth: 0,
  },
  moodEmoji: {
    fontSize: 16,
  },
  moodText: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
  },
  moodTextActive: {
    color: '#fff',
  },
});
