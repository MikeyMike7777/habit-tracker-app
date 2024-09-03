import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BottomNav from '../../components/BottomNav';
import AppTitle from '../../components/AppTitle';
import { GlobalStyles } from '../styles/GlobalStyles';
import Colors from '../../constants/Colors';
import HabitRow from './components/HabitRow';
import TitleWithButtons from '../../components/TitleWithButtons';
import { HabitContext } from '../contexts/HabitContext';
import { Fonts } from '../../constants/Fonts';

export default function Habits({ navigation }) {
  const { habits } = useContext(HabitContext);

  return (
    <View style={GlobalStyles.container}>
      <TitleWithButtons />

      {/* Habit List */}
      <View style={GlobalStyles.content}>
        {habits.length > 0 ? (
          <View style={styles.habitList}>
            {habits.slice(0, 6).map((habit) => (
              <HabitRow key={habit.id} habit={habit} />
            ))}
          </View>
        ) : (
          <Text style={GlobalStyles.noHabitsText}>No habits yet. Add a new habit!</Text>
        )}
      </View>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  habitList: {
    paddingVertical: 10,
  },
});
