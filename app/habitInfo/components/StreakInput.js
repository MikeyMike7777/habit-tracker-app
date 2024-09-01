import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/HabitInfoStyles';

export default function StreakInput({ streak, setStreak }) {
  return (
    <View style={styles.inputRow}>
      <Text style={styles.pickerText}>Streak:</Text>
      <TextInput
        style={styles.streakInput}
        keyboardType="numeric"
        value={streak}
        onChangeText={(value) => {
          if (/^\d*$/.test(value)) {
            setStreak(value);
          }
        }}
        maxLength={4}
      />
    </View>
  );
}
