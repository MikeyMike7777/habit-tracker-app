import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../../components/BottomNav';
import AppTitle from '../../components/AppTitle';
import Chart from './components/Chart';
import PercentagesRow from './components/PercentageRow';
import { GlobalStyles } from '../styles/GlobalStyles';
import TitleWithButtons from '../../components/TitleWithButtons';

export default function Insights() {
  const chartData = {
    labels: ["H1", "H2", "H3", "H4", "H5", "H6"],
    datasets: [
      {
        data: [90, 82, 30, 100, 10, 42],
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