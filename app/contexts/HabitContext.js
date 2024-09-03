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

  const logHabits = (action, habits) => {
    console.log(`${action} - Current Habits:`);
    habits.forEach(habit => {
      console.log(`ID: ${habit.id}, Title: ${habit.title}, Frequency: ${habit.frequency}, CurStreak: ${habit.curStreak}, BestStreak: ${habit.bestStreak}, StartDate: ${habit.startDate}, Description: ${habit.description}, DaysCompleted: ${habit.daysCompleted}, IsDone: ${habit.isDone}`);
    });
  };

  const addHabit = (newHabit) => {
    const updatedHabits = [...habits, newHabit];
    setHabits(updatedHabits);
    logHabits("Add Habit", updatedHabits);
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
    logHabits("Update Habit", updatedHabits);
  };

  const removeHabit = (habitId) => {
    const updatedHabits = habits.filter(habit => habit.id !== habitId);
    setHabits(updatedHabits);
    logHabits("Remove Habit", updatedHabits);
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, updateHabit, removeHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
