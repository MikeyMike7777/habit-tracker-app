import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AppTitle from './AppTitle';
import Colors from '../constants/Colors';

export default function TitleWithButtons() {
  return (
    <View style={styles.headerContainer}>
      {/* Info Button */}
      <Link href="/info/Info" style={styles.infoButton}>
        <Ionicons name="information-circle-outline" size={32} color={Colors.black}/>
      </Link>

      {/* App Title */}
      <AppTitle />

      {/* Add Button */}
      <Link href="/habitInfo/HabitInfo" style={styles.addButton}>
        <Ionicons name="add-outline" size={32} color={Colors.black} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:110,
    },
    infoButton: {
        position: 'absolute',
        top: 20, // Adjust according to your layout
        left: 0
    },
    addButton: {
        position: 'absolute',
        top: 18, // Adjust according to your layout
        right: 0, // Adjust according to your layout
    },
});
