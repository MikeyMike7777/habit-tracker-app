import React, { useContext } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AppTitle from './AppTitle';
import Colors from '../constants/Colors';
import { HabitContext } from '../app/contexts/HabitContext';

export default function TitleWithButtons() {
  const { habits } = useContext(HabitContext);
  const router = useRouter();

  const handleAddHabit = () => {
    if (habits.length >= 6) {
      Alert.alert("Maximum Habits", "You cannot add more than 6 habits.");
    } else {
      router.push('/habitInfo/HabitInfo');
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* Info Button */}
      <Link href="/info/Info" style={styles.infoButton}>
        <Ionicons name="information-circle-outline" size={32} color={Colors.black} />
      </Link>

      {/* App Title */}
      <AppTitle />

      {/* Add Button */}
      <TouchableOpacity onPress={handleAddHabit} style={styles.addButton}>
        <Ionicons name="add-outline" size={32} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 90,
  },
  infoButton: {
    position: 'absolute',
    top: 20,
    left: 0,
  },
  addButton: {
    position: 'absolute',
    top: 20,
    right: 0,
  },
});
