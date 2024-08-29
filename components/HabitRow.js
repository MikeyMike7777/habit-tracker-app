import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

export default function HabitRow({ title, count1, count2, iconColor1 }) {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.middleLeftSection}>
        <View style={styles.iconRow}>
          <Ionicons name="checkmark-circle" size={20} color={iconColor1} />
          <Text style={styles.count}>{count1}</Text>
        </View>
    </View>
    <View style={styles.middleRightSection}>
        <View style={styles.iconRow}>
          <Ionicons name="checkmark-circle" size={20} color={Colors.gold} />
          <Text style={styles.count}>{count2}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Ionicons name="information-circle-outline" size={25} color={Colors.black} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginLeft: 5,
    fontSize: 16,
    color: Colors.black,
  },
});
