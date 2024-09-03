import React from 'react';
import { HabitProvider } from './contexts/HabitContext';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <HabitProvider>
      <Slot/>
    </HabitProvider>
  );
}
