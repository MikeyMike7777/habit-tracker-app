import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../../components/BottomNav';
import Chart from './components/Chart';
import { GlobalStyles } from '../styles/GlobalStyles';
import TitleWithButtons from '../../components/TitleWithButtons';
import { HabitContext } from '../contexts/HabitContext';
import { parseISO } from 'date-fns';

export default function Insights() {
  const { habits } = useContext(HabitContext);

  const calculateDays = (startDate) => {
    const start = parseISO(startDate);
    const today = new Date();
    const differenceInTime = today.getTime() - start.getTime();
    return Math.floor(differenceInTime / (1000 * 3600 * 24)) + 1;
  };
  
  const calculatePercentage = (daysCompleted, startDate, frequency) => {
    const totalDays = (calculateDays(startDate)/7)*frequency;
    return totalDays > 0 ? Math.ceil((daysCompleted / totalDays) * 100) : 0;
  };

  const chartData = {
    labels: habits.slice(0, 6).map((habit) => habit.title.slice(0, 4)),
    datasets: [
      {
        data: habits.slice(0, 6).map(habit => 
          calculatePercentage(habit.daysCompleted || 0, habit.startDate, habit.frequency)
        ),
      },
    ],
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.spacing}>
        <TitleWithButtons/>
      </View>
      <View style={GlobalStyles.content}>
        <Chart data={chartData} />
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  spacing: {
    paddingBottom: 30,
  },
});
