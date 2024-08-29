import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { HabitRowStyles } from './styles/HabitRowStyles';

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