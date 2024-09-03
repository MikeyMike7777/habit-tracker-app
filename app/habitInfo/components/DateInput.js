import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../styles/HabitInfoStyles';
import Colors from '../../../constants/Colors';

export default function DateInput({ value, onChange }) {
  const formatDate = (input) => {
    let sanitizedValue = input.replace(/[^0-9/]/g, '');
  
    // Handle backspace when a slash is deleted
    if (sanitizedValue.length < value.length) {
      if (value[value.length - 1] === '/' && sanitizedValue[sanitizedValue.length - 1] !== '/') {
        sanitizedValue = sanitizedValue.slice(0, -1);
      }
    }
  
    // Auto-insert slashes as the user types
    if (sanitizedValue.length === 2 || sanitizedValue.length === 5) {
      sanitizedValue += '/';
    }
  
    onChange(sanitizedValue);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Start Date: mm/dd/yyyy"
      placeholderTextColor={Colors.gray}
      value={value}
      // onChangeText={formatDate}
      keyboardType="numeric"
      maxLength={10} // mm/dd/yyyy
    />
  );
}
