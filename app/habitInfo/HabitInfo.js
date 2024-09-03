import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import { GlobalStyles } from '../styles/GlobalStyles';
import FrequencySelector from './components/FrequencySelector';
import StreakInput from './components/StreakInput';
import DateInput from './components/DateInput';  // Import the DateInput component
import { styles } from './styles/HabitInfoStyles';
import { HabitContext } from '../contexts/HabitContext';
import { parse, format } from 'date-fns'; // Import date parsing and formatting functions

export default function HabitInfo() {
  const { addHabit, updateHabit, removeHabit } = useContext(HabitContext);
  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('1');
  const [streak, setStreak] = useState('0');
  const [bestStreak, setBestStreak] = useState('0');
  const [startDate, setStartDate] = useState('');
  const [description, setDescription] = useState('');
  const [daysCompleted, setDaysCompleted] = useState(0);
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
      setStartDate(format(new Date(habit.startDate), 'MM/dd/yyyy'));
      setDescription(habit.description);
      setDaysCompleted(habit.daysCompleted); 
      setIsLoaded(true);
    } else if (!params.habit && !isLoaded) {
      const today = format(new Date(), 'MM/dd/yyyy'); // Format today's date
      setStartDate(today);
      setDaysCompleted(0);
      setIsLoaded(true);
    }
  }, [params, isLoaded]);

  const handleStreakChange = (newStreak) => {
    const streakDifference = parseInt(newStreak) - parseInt(streak);
    setStreak(newStreak);
    setDaysCompleted(daysCompleted + streakDifference);
  };

  const handleSave = () => {
    const parsedDate = startDate
      ? parse(startDate, 'MM/dd/yyyy', new Date())
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
      
      <DateInput value={startDate} onChange={setStartDate}/>

      <FrequencySelector frequency={frequency} setFrequency={setFrequency} frequencyData={frequencyData} />
      <StreakInput streak={streak} setStreak={handleStreakChange} label="Current Streak:"/>

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
