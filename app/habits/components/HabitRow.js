import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';


export default function HabitRow({ title, count1, count2, iconColor1 }) {
  return (
    <View style={HabitRowStyles.rowContainer}>
      <View style={HabitRowStyles.leftSection}>
        <Text style={HabitRowStyles.title}>{title}</Text>
      </View>
      <View style={HabitRowStyles.middleLeftSection}>
        <View style={HabitRowStyles.iconRow}>
          <Ionicons name="checkmark-circle" size={20} color={iconColor1} />
          <Text style={HabitRowStyles.count}>{count1}</Text>
        </View>
    </View>
    <View style={HabitRowStyles.middleRightSection}>
        <View style={HabitRowStyles.iconRow}>
          <Ionicons name="checkmark-circle" size={20} color={Colors.gold} />
          <Text style={HabitRowStyles.count}>{count2}</Text>
        </View>
      </View>
      <View style={HabitRowStyles.rightSection}>
        <Ionicons name="information-circle-outline" size={25} color={Colors.black} />
      </View>
    </View>
  );
}

const HabitRowStyles = StyleSheet.create({
  rowContainer: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgrey',
  },
  leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      paddingLeft: 20,
  },
  middleLeftSection: {
      flexDirection: 'row',
      alignItems: 'left',
      flex: 1,
      justifyContent: 'left',
  },
  middleRightSection: {
      flexDirection: 'row',
      alignItems: 'left',
      flex: 1,
      justifyContent: 'left',
  },
  rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
      paddingRight: 20,
  },
  title: {
      fontFamily: Fonts.AvenirHeavy,
      fontSize: 18,
      color: Colors.black,
      marginRight: 10,
  },
  iconRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      paddingHorizontal: 20,
  },
  count: {
      fontFamily: Fonts.AvenirMedium,
      marginLeft: 5,
      fontSize: 16,
      color: Colors.black,
  },
});
      