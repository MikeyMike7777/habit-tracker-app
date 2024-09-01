import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../styles/HabitInfoStyles';
import Colors from '../../../constants/Colors';

export default function DateInput({ value, onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Start Date:  dd/mm/yyyy"
      placeholderTextColor={Colors.gray}
      value={value}
      onChangeText={onChange}
      keyboardType="numeric"
      maxLength={10} // dd/mm/yyyy
    />
  );
}
