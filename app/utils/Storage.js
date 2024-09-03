import AsyncStorage from '@react-native-async-storage/async-storage';

// Save habits to AsyncStorage
export const saveHabits = async (habits) => {
  try {
    await AsyncStorage.setItem('habits', JSON.stringify(habits));
  } catch (error) {
    console.error('Failed to save habits:', error);
  }
};

// Load habits from AsyncStorage and parse numeric values
export const loadHabits = async () => {
  try {
    const storedHabits = await AsyncStorage.getItem('habits');
    if (!storedHabits) return [];

    const habits = JSON.parse(storedHabits);

    // Parse numeric values for each habit
    return habits.map(habit => ({
      ...habit,
      curStreak: parseInt(habit.curStreak) || 0,
      bestStreak: parseInt(habit.bestStreak) || 0,
      frequency: parseInt(habit.frequency) || 0,
    }));
  } catch (error) {
    console.error('Failed to load habits:', error);
    return [];
  }
};

