import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import { GlobalStyles } from '../styles/GlobalStyles';
import FrequencySelector from './components/FrequencySelector';
import StreakInput from './components/StreakInput';
import { styles } from './styles/HabitInfoStyles';
import { HabitContext } from '../contexts/HabitContext';
import { parse } from 'date-fns';

export default function HabitInfo() {
  const { addHabit, updateHabit, removeHabit } = useContext(HabitContext);
  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('1');
  const [streak, setStreak] = useState('0');
  const [bestStreak, setBestStreak] = useState('0');
  const [startDate, setStartDate] = useState(''); // Used to store the date habit is created
  const [description, setDescription] = useState('');
  const [daysCompleted, setDaysCompleted] = useState(0); // New attribute for tracking completed days
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
      setDaysCompleted(habit.daysCompleted); 
      setIsLoaded(true);
    } else if (!params.habit && !isLoaded) {
      const today = new Date().toLocaleDateString();
      setStartDate(today);
      setDaysCompleted(0); // Explicitly set to 0 for new habits
      setIsLoaded(true);
    }
  }, [params, isLoaded]);

  const handleStreakChange = (newStreak) => {
    const streakDifference = parseInt(newStreak) - parseInt(streak);
    setStreak(newStreak);
    setDaysCompleted(parseInt(daysCompleted) + parseInt(streakDifference));
  };

  const handleSave = () => {
    const parsedDate = startDate
    ? parse(startDate, 'M/d/yyyy', new Date()) // Parses "9/3/2024" correctly
    : new Date();
  
    const habitData = {
      id: params.habit ? JSON.parse(params.habit).id : Date.now(),
      title,
      frequency,
      curStreak: streak,
      bestStreak: params.habit ? bestStreak : streak,
      startDate: parsedDate.toISOString().split('T')[0],
      description,
      daysCompleted: params.habit ? daysCompleted : streak,
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
      
      <View style={styles.input}>
        <Text style={styles.pickerText}>Start Date: {startDate}</Text>
      </View>
      <FrequencySelector frequency={frequency} setFrequency={setFrequency} frequencyData={frequencyData} />
      <StreakInput streak={streak} setStreak={handleStreakChange} label="Current Streak:"/>
      {/* <StreakInput streak={bestStreak} setStreak={setBestStreak} label="Best Streak:"/> */}

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
