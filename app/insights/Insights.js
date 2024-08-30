import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import BottomNav from '../../components/BottomNav';
import AppTitle from '../../components/AppTitle';
import Colors from '../../constants/Colors';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Fonts } from '../../constants/Fonts';

export default function Insights() {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ["H1", "H2", "H3", "H4", "H5", "H6"], // Abbreviated labels
    datasets: [
      {
        data: [90, 82, 30, 100, 10, 42], // Example percentages
      },
    ],
  };

  const chartConfig = {
    backgroundColor: Colors.offWhite,
    backgroundGradientFrom: Colors.offWhite,
    backgroundGradientTo: Colors.offWhite,
    decimalPlaces: 0,
    color: () => Colors.black,
    labelColor: () => Colors.black,
    style: {
      borderRadius: 16,
    },
    barPercentage: 1.0,
    fillShadowGradient: Colors.black,
    fillShadowGradientOpacity: 1,
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
    propsForLabels: {
      fontSize: 14,
      fontFamily: Fonts.AvenirHeavyOblique,
    },
  };

  return (
    <View style={GlobalStyles.container}>
      <AppTitle />
      <View style={GlobalStyles.content}>
        <BarChart
          style={styles.chart}
          data={data}
          width={screenWidth - 40} // Adjust width for padding
          height={300} // Adjust height as needed
          yAxisLabel=""
          yAxisSuffix="%"
          yAxisInterval={20} // Steps of 20 for the y-axis labels
          chartConfig={chartConfig}
          verticalLabelRotation={0} // Horizontal labels
          fromZero={true}
          showValuesOnTopOfBars={false} // Disable default value labels
          withInnerLines={false}
          segments={5} // Ensure segments divide the y-axis into 0, 20, 40, 60, 80, 100
        />
        <View style={styles.percentagesRow}>
          {data.datasets[0].data.map((value, index) => (
            <Text key={index} style={styles.percentage}>
              {value}%
            </Text>
          ))}
        </View>
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    marginVertical: -25,
    borderRadius: 16,
    marginRight: 20,
  },
  percentagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Evenly space out the percentages
    width: '100%',
    paddingHorizontal: 58,
    left: 30
  },
  percentage: {
    fontFamily: Fonts.AvenirHeavyOblique,
    fontSize: 14,
    color: Colors.black,
  },
});
