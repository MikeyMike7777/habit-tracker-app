import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Habits() {
  return (
    <View style={styles.container}>
      <Link href="/habits/HabitInfo">Habit info</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
