import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import { GlobalStyles } from '../styles/GlobalStyles';
import DateInput from './components/DateInput';
import FrequencySelector from './components/FrequencySelector';
import StreakInput from './components/StreakInput';
import { styles } from './styles/HabitInfoStyles';
import { HabitContext } from '../contexts/HabitContext';

export default function HabitInfo() {
  const { habits, addHabit, updateHabit, removeHabit } = useContext(HabitContext);
  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('1');
  const [streak, setStreak] = useState('0');
  const [bestStreak, setBestStreak] = useState('0'); 
  const [startDate, setStartDate] = useState('');
  const [description, setDescription] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const params = useLocalSearchParams(); 
  const router = useRouter();

  const frequencyData = [
    { key: 1, label: '1' },
    { key: 2, label: '2' },
    { key: 3, label: '3' },
    { key: 4, label: '4' },
    { key: 5, label: '5' },
    { key: 6, label: '6' },
    { key: 7, label: '7' },
  ];

  useEffect(() => {
    if (params.habit && !isLoaded) {
      const habit = JSON.parse(params.habit);
      setTitle(habit.title);
      setFrequency(habit.frequency);
      setStreak(habit.curStreak);
      setBestStreak(habit.bestStreak);
      setStartDate(habit.startDate);
      setDescription(habit.description);
      setIsLoaded(true);
    }
  }, [params, isLoaded]);

  const handleDateChange = (value) => {
    let sanitizedValue = value.replace(/[^0-9/]/g, '');
  
    if (sanitizedValue.length < startDate.length) {
      if (startDate[startDate.length - 1] === '/' && sanitizedValue[sanitizedValue.length - 1] !== '/') {
        sanitizedValue = sanitizedValue.slice(0, -1);
      }
    }
  
    if (sanitizedValue.length === 2 || sanitizedValue.length === 5) {
      sanitizedValue += '/';
    }
  
    setStartDate(sanitizedValue);
  };

  const handleSave = () => {
    const habitData = {
      id: params.habit ? JSON.parse(params.habit).id : Date.now(),
      title,
      frequency,
      curStreak: streak,
      bestStreak,
      startDate,
      description,
      isDone: false,
    };
  
    if (params.habit) {
      updateHabit(habitData.id, habitData);
    } else {
      addHabit(habitData);
    }
  
    router.push('/');
  };
  

  const handleDelete = () => {
    if (params.habit) {
      const habitId = JSON.parse(params.habit).id;
      removeHabit(habitId);
      router.push('/habits/Habits');
    }
  };

  return (
    <View style={styles.container}>
      <View style={GlobalStyles.header}>
        <Link href="/" style={[styles.cancelButton, GlobalStyles.wordButton]}>Cancel</Link>
        <Text style={[styles.saveButton, GlobalStyles.wordButton]} onPress={handleSave}>Save</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor={Colors.gray}
        value={title}
        onChangeText={setTitle}
      />
      
      <DateInput value={startDate} onChange={handleDateChange} />
      <FrequencySelector frequency={frequency} setFrequency={setFrequency} frequencyData={frequencyData} />
      <StreakInput streak={streak} setStreak={setStreak} label="Current Streak:"/>
      <StreakInput streak={bestStreak} setStreak={setBestStreak} label="Best Streak:"/>

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description"
        placeholderTextColor={Colors.gray}
        multiline
        value={description}
        onChangeText={setDescription}
      />
     
      <TouchableOpacity style={[GlobalStyles.wordButton, styles.deleteButton]} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
