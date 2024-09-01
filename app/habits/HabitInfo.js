import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Link } from 'expo-router';
import ModalSelector from 'react-native-modal-selector';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function HabitInfo({ navigation }) {
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
  
    // Auto-insert slashes as the user types
    if (sanitizedValue.length === 2 || sanitizedValue.length === 5) {
      sanitizedValue += '/';
    }

    // Handle backspace when a slash is deleted
    if (sanitizedValue.length < startDate.length) {
      if (startDate[startDate.length - 1] === '/' && sanitizedValue[sanitizedValue.length - 1] !== '/') {
        sanitizedValue = sanitizedValue.slice(0, -1);
      }
    }
  
    setStartDate(sanitizedValue);
  };
  


  return (
    <View style={styles.container}>
      {/* Header with Cancel and Done buttons */}
      <View style={GlobalStyles.header}>
        <Link href="/habits/Habits" style={GlobalStyles.cancelButton}>Cancel</Link>
        <Link href="/habits/Habits" style={GlobalStyles.doneButton}>Done</Link>
      </View>

      {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor={Colors.gray}
      />
      
      {/* Start Date Input */}
      <TextInput
        style={styles.input}
        placeholder="Start Date:  dd/mm/yyyy"
        placeholderTextColor={Colors.gray}
        value={startDate}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10} // dd/mm/yyyy 
      />
      
      {/* Frequency Input with Dropdown Selector */}
      <ModalSelector
        data={frequencyData}
        initValue="Select Frequency"
        onChange={(option) => setFrequency(option.label)}
        selectStyle={styles.selectorText}
        optionTextStyle={styles.optionText}
      >
        <TextInput
          style={styles.input}
          editable={false}
          placeholder="Frequency"
          placeholderTextColor={Colors.gray}
          value={`Frequency: ${frequency}`}
        />
      </ModalSelector>

      {/* Editable Streak Input */}
      <View style={styles.inputRow}>
        <Text style={styles.pickerText}>Streak:</Text>
        <TextInput
          style={styles.streakInput}
          keyboardType="numeric"
          value={streak}
          onChangeText={(value) => {
            if (/^\d*$/.test(value)) {
              setStreak(value);
            }
          }}
          maxLength={3}
        />
      </View>

      {/* Description */}
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description"
        placeholderTextColor={Colors.gray}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
    paddingVertical: 13,
    color: Colors.black,
    paddingHorizontal: 20
  },
  descriptionInput: {
    height: 290,
    textAlignVertical: 'top',
    fontFamily: Fonts.AvenirMedium
  },
  selectorText: {
    borderWidth: 0,
    padding: 0,
  },
  optionText: {
    color: Colors.black,
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
  },
  pickerText: {
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
    color: Colors.black,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  streakInput: {
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
    color: Colors.black,
    marginLeft: 10,
    flex: 1,
  },
});
