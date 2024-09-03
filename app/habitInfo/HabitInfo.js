import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import { GlobalStyles } from '../styles/GlobalStyles';
import FrequencySelector from './components/FrequencySelector';
import StreakInput from './components/StreakInput';
import DateInput from './components/DateInput';
import { styles } from './styles/HabitInfoStyles';
import { HabitContext } from '../contexts/HabitContext';
import { parse, format } from 'date-fns';

export default function HabitInfo() {
  const { addHabit, updateHabit, removeHabit } = useContext(HabitContext);
  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('7'); // Default to "7 Days"
  const [streak, setStreak] = useState('0');
  const [bestStreak, setBestStreak] = useState('0');
  const [startDate, setStartDate] = useState('');
  const [description, setDescription] = useState('');
  const [daysCompleted, setDaysCompleted] = useState(0);
  const [isDone, setIsDone] = useState(false); // Ensure isDone is part of the state
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useLocalSearchParams(); 
  const router = useRouter();

  const frequencyData = [
    { key: 1, label: '1 Day per Week' },
    { key: 2, label: '2 Days per Week' },
    { key: 3, label: '3 Days per Week' },
    { key: 4, label: '4 Days per Week' },
    { key: 5, label: '5 Days per Week' },
    { key: 6, label: '6 Days per Week' },
    { key: 7, label: '7 Days per Week' },
  ];

  useEffect(() => {
    if (params.habit && !isLoaded) {
      const habit = JSON.parse(params.habit);
      setTitle(habit.title);
      setFrequency(habit.frequency.toString()); // Ensure it is a string
      setStreak(habit.curStreak);
      setBestStreak(habit.bestStreak);
      setStartDate(format(parseDateWithoutTimezone(habit.startDate), 'MM/dd/yyyy'));
      setDescription(habit.description);
      setDaysCompleted(habit.daysCompleted);
      setIsDone(habit.isDone); // Load the isDone value
      setIsLoaded(true);
    } else if (!params.habit && !isLoaded) {
      const today = format(new Date(), 'MM/dd/yyyy');
      setStartDate(today);
      setDaysCompleted(0);
      setIsDone(false); // Initialize as false for new habits
      setIsLoaded(true);
    }
  }, [params, isLoaded]);

  const parseDateWithoutTimezone = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month is zero-indexed
  };

  const calculateDays = (startDate) => {
    const start = parse(startDate, 'MM/dd/yyyy', new Date());
    const today = new Date();
    const differenceInTime = today.getTime() - start.getTime();
    return Math.floor(differenceInTime / (1000 * 3600 * 24)) + 1;
  };

  const handleStreakChange = (newStreak) => {
    const totalDays = calculateDays(startDate);

    if (parseInt(newStreak) > totalDays) {
      Alert.alert(
        "Invalid Streak",
        `Current streak cannot be greater than the number of days since the start date (${totalDays} days).`
      );
      return;
    }

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
      frequency: parseInt(frequency), // Store only the numeric value
      curStreak: streak,
      bestStreak: params.habit ? bestStreak : streak,
      startDate: new Date(Date.UTC(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate())).toISOString().split('T')[0],
      description,
      daysCompleted: params.habit ? daysCompleted : streak,
      isDone, // Save the current value of isDone
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