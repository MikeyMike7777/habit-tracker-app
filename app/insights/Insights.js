import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../../components/BottomNav';
import AppTitle from '../../components/AppTitle';
import Chart from './components/Chart';
import PercentagesRow from './components/PercentageRow';
import { GlobalStyles } from '../styles/GlobalStyles';
import TitleWithButtons from '../../components/TitleWithButtons';
import { HabitContext } from '../contexts/HabitContext';

export default function Insights() {
  const { habits } = useContext(HabitContext);

  const calculateDays = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const differenceInTime = today.getTime() - start.getTime();
    return Math.floor(differenceInTime / (1000 * 3600 * 24)) + 1;
  };
  
  const calculatePercentage = (daysCompleted, startDate, habit) => {
    const totalDays = calculateDays(startDate);
    return totalDays > 0 ? (daysCompleted / totalDays) * 100 : 0;
  };

  const chartData = {
    labels: habits.slice(0, 6).map((habit, index) => habit.title.slice(0, 5)),
    datasets: [
      {
        data: habits.slice(0, 6).map(habit => 
          calculatePercentage(habit.daysCompleted || 0, habit.startDate, habit)
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
        <PercentagesRow data={chartData.datasets[0].data} />
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
