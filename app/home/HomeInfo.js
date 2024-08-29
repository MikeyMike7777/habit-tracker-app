import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Link } from 'expo-router';

export default function HomeInfo() {
  return (
    <View style={GlobalStyles.container}>
      <View style={styles.done}>
        <Link href="/home/Home">Done</Link>
      </View>
      <View style={GlobalStyles.content}>
        <Text style={styles.text}>Home Info Page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  done: {
    alignItems: 'flex-end',
    width: '100%',
    padding: 30,
  },
});
