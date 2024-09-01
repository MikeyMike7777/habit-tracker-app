import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Link } from 'expo-router';
import Colors from '../../constants/Colors';
import { GlobalStyles } from '../styles/GlobalStyles';
import DateInput from './components/DateInput';
import FrequencySelector from './components/FrequencySelector';
import StreakInput from './components/StreakInput';
import { styles } from './styles/HabitInfoStyles';

export default function HabitInfo() {
  const [frequency, setFrequency] = useState('1');
  const [streak, setStreak] = useState('0');
  const [startDate, setStartDate] = useState('');

  const frequencyData = [
    { key: 1, label: '1' },
    { key: 2, label: '2' },
    { key: 3, label: '3' },
    { key: 4, label: '4' },
    { key: 5, label: '5' },
    { key: 6, label: '6' },
    { key: 7, label: '7' },
  ];

  const handleDateChange = (value) => {
    let sanitizedValue = value.replace(/[^0-9/]/g, '');
  
    // Handle backspace when a slash is deleted
    if (sanitizedValue.length < startDate.length) {
      if (startDate[startDate.length - 1] === '/' && sanitizedValue[sanitizedValue.length - 1] !== '/') {
        sanitizedValue = sanitizedValue.slice(0, -1);
      }
    }
  
    // Auto-insert slashes as the user types
    if (sanitizedValue.length === 2 || sanitizedValue.length === 5) {
      sanitizedValue += '/';
    }
  
    setStartDate(sanitizedValue);
  };
  

  return (
    <View style={styles.container}>
      <View style={GlobalStyles.header}>
        <Link href="/habits/Habits" style={GlobalStyles.cancelButton}>Cancel</Link>
        <Link href="/habits/Habits" style={GlobalStyles.doneButton}>Done</Link>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor={Colors.gray}
      />
      
      <DateInput value={startDate} onChange={handleDateChange} />
      <FrequencySelector frequency={frequency} setFrequency={setFrequency} frequencyData={frequencyData} />
      <StreakInput streak={streak} setStreak={setStreak} />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description"
        placeholderTextColor={Colors.gray}
        multiline
      />
    </View>
  );
}
