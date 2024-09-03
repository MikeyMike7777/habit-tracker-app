import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useContext } from 'react';
import { HabitContext } from '../contexts/HabitContext';

export default function MidnightResetHandler() {
  const { habits, updateHabit } = useContext(HabitContext);

  // Function to calculate the time remaining until the target time
  const getTimeUntilTargetTime = () => {
    const now = new Date();
    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0, 0, 0, 0 
    );

    // If it's already past the target time today, set it for tomorrow
    if (now >= targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }

    return targetTime.getTime() - now.getTime();
  };

  // Function to reset all habits' isDone to false
  const resetHabitsAtTargetTime = () => {
    habits.forEach(habit => {
      updateHabit(habit.id, { isDone: false });
    });
  };

  useEffect(() => {
    // Calculate the time until the next target time
    const timeUntilTarget = getTimeUntilTargetTime();
    console.log('Time until target:', timeUntilTarget);

    // Set the first timeout for the initial reset
    const resetTimeout = setTimeout(() => {
      resetHabitsAtTargetTime();

      // After the initial reset, use setInterval to reset every 24 hours
      const resetInterval = setInterval(() => {
        resetHabitsAtTargetTime();
      }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

      // Clean up the interval when the component unmounts
      return () => clearInterval(resetInterval);
    }, timeUntilTarget);

    // Clean up the initial timeout if the component unmounts
    return () => clearTimeout(resetTimeout);
  }, [habits]);

  return null;
}
