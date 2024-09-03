import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BottomNav from '../../components/BottomNav';
import { GlobalStyles } from '../styles/GlobalStyles';
import AppTitle from '../../components/AppTitle';
import HabitBox from './components/HabitBox';
import Colors from '../../constants/Colors';
import TitleWithButtons from '../../components/TitleWithButtons';
import { HabitContext } from '../contexts/HabitContext';

export default function HomeScreen() {
  const { habits } = useContext(HabitContext);

  return (
    <View style={GlobalStyles.container}>
      <TitleWithButtons />
      <View style={GlobalStyles.content}>
      {habits.length > 0 ? (
        <View style={styles.grid}>
          {habits.slice(0, 6).map((habit) => (
            <HabitBox
              key={habit.id}
              id={habit.id}
              title={habit.title}
              curStreak={habit.curStreak}
              bestStreak={habit.bestStreak}
              isDone={habit.isDone}
            />
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

export const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 35,
    paddingTop: 20,
  },
});
