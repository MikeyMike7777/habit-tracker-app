import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';

export default function Chart({ data }) {
  const screenWidth = Dimensions.get('window').width;

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
    <BarChart
      style={styles.chart}
      data={data}
      width={screenWidth - 40}
      height={350}
      yAxisLabel=""
      yAxisSuffix="%"
      yAxisInterval={20}
      chartConfig={chartConfig}
      verticalLabelRotation={0}
      fromZero={true}
      showValuesOnTopOfBars={false}
      withInnerLines={false}
      segments={5}
    />
  );
}

const styles = StyleSheet.create({
  chart: {
    marginVertical: -25,
    borderRadius: 16,
    marginRight: 20,
  },
});
