import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="home/HomeInfo"/>
      <Stack.Screen name="habits/Habits"/>
      <Stack.Screen name="insights/Insights"/>
      <Stack.Screen name="habits/HabitInfo"/>
    </Stack>
  );
}
