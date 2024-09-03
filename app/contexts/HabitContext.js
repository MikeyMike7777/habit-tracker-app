import React, { createContext, useState, useEffect } from 'react';
import { loadHabits, saveHabits } from '../utils/Storage'; // Adjust path if needed
import { Alert } from 'react-native';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const habitsFromStorage = await loadHabits();
      setHabits(habitsFromStorage);
    };
    fetchHabits();
  }, []);

  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  const addHabit = (newHabit) => {
    if (habits.length >= 6) {
      Alert.alert(
        "Maximum Habits",
        "You cannot add more than 6 habits.",
      );
      return;
    }
    setHabits([...habits, newHabit]);
  };

  const updateHabit = (habitId, updatedProperties) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === habitId) {
        const updatedCurStreak = updatedProperties.curStreak !== undefined ? updatedProperties.curStreak : habit.curStreak;
        const updatedBestStreak = Math.max(updatedCurStreak, updatedProperties.bestStreak !== undefined ? updatedProperties.bestStreak : habit.bestStreak);
  
        return {
          ...habit,
          ...updatedProperties,
          curStreak: updatedCurStreak,
          bestStreak: updatedBestStreak,
        };
      }
      return habit;
    });
  
    setHabits(updatedHabits);
  };


  const removeHabit = (habitId) => {
    const updatedHabits = habits.filter(habit => habit.id !== habitId);
    setHabits(updatedHabits);
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, updateHabit, removeHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
