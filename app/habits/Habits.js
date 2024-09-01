import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNav from '../../components/BottomNav';
import AppTitle from '../../components/AppTitle';
import { GlobalStyles } from '../styles/GlobalStyles';
import Colors from '../../constants/Colors';
import HabitRow from './components/HabitRow';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import TitleWithButtons from '../../components/TitleWithButtons';

export default function Habits({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      {/* Info Button */}
      <TitleWithButtons/>

      {/* Habit List */}
      <View style={GlobalStyles.content}>
        <View style={styles.habitList}>
          <HabitRow title="Habit 1" count1="2" count2="5" iconColor1={Colors.black} />
          <HabitRow title="Habit 2" count1="2" count2="2" iconColor1={Colors.black} />
          <HabitRow title="Habit 3" count1="21" count2="71" iconColor1={Colors.green} />
          <HabitRow title="Habit 4" count1="66" count2="66" iconColor1={Colors.blue} />
          <HabitRow title="Habit 5" count1="90" count2="90" iconColor1={Colors.purple} />
          <HabitRow title="Habit 6" count1="2" count2="5" iconColor1={Colors.black} />
        </View>
      </View>
      
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  habitList: {
    paddingVertical: 10,
  },
});
