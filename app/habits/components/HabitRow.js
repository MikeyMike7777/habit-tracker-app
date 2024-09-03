import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';
import { Link } from 'expo-router';

export default function HabitRow({ habit }) {
  return (
    <View style={HabitRowStyles.rowContainer}>
      <View style={HabitRowStyles.leftSection}>
        <Text style={HabitRowStyles.title}>{habit.title}</Text>
      </View>
      <View style={HabitRowStyles.middleLeftSection}>
        <View style={HabitRowStyles.iconRow}>
          <Ionicons name="checkmark-circle" size={20} color={Colors.black} />
          <Text style={HabitRowStyles.count}>{habit.curStreak}</Text>
        </View>
      </View>
      <View style={HabitRowStyles.middleRightSection}>
        <View style={HabitRowStyles.iconRow}>
          <Ionicons name="checkmark-circle" size={20} color={Colors.gold} />
          <Text style={HabitRowStyles.count}>{habit.bestStreak}</Text>
        </View>
      </View>
      <View style={HabitRowStyles.rightSection}>
        <Link
          href={{
            pathname: '/habitInfo/HabitInfo',
            params: { habit: JSON.stringify(habit) }, // Pass entire habit object as string
          }}
        >
          <Ionicons name="information-circle-outline" size={25} color={Colors.black} />
        </Link>
      </View>
    </View>
  );
}

const HabitRowStyles = StyleSheet.create({
  rowContainer: {
    width: '100%',
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
