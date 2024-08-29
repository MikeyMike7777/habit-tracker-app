import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HabitBoxStyles } from './styles/HabitBoxStyles';
import React, { useState } from 'react';
import Colors from '../app/styles/Colors';

export default function HabitBox({ title, count, iconColor }) {
    const [isDone, setIsDone] = useState(true);

    const toggleDone = () => {
        setIsDone(!isDone);
    };

    return (
        <TouchableOpacity activeOpacity={1} onPress={toggleDone}>
            <View style= {[HabitBoxStyles.box, isDone ? HabitBoxStyles.blackBox : HabitBoxStyles.whiteBox]}>
                <Text style={[HabitBoxStyles.title, {color: isDone ? Colors.offWhite : Colors.black}]}>{title}</Text>
                    <View style={HabitBoxStyles.iconRow}>
                        <Ionicons name="checkmark-circle" size={20} color={iconColor} />
                    <Text style={[HabitBoxStyles.count, {color: isDone ? Colors.offWhite : Colors.black}]}>{count}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}