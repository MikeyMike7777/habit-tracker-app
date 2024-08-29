import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import BottomNav from '../../components/BottomNav';

export default function Habits() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Link href="/habits/HabitInfo">Habit info</Link>
      </View>
      <BottomNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
