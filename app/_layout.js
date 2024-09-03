import React from 'react';
import { HabitProvider } from './contexts/HabitContext';
import { Slot } from 'expo-router';
import MidnightResetHandler from './utils/MidnightResetHandler';

export default function RootLayout() {
  return (
    <HabitProvider>
      <Slot/>
      <MidnightResetHandler/>
    </HabitProvider>
  );
}
