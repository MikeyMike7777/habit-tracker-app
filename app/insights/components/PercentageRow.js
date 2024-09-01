import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';

export default function PercentagesRow({ data }) {
  return (
    <View style={styles.percentagesRow}>
      {data.map((value, index) => (
        <Text key={index} style={styles.percentage}>
          {value}%
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  percentagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 58,
    left: 30,
  },
  percentage: {
    fontFamily: Fonts.AvenirHeavyOblique,
    fontSize: 14,
    color: Colors.black,
  },
});
