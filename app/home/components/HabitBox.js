import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import Colors from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';
import { HabitContext } from '../../contexts/HabitContext';

export default function HabitBox({ id, title, curStreak, bestStreak, isDone }) {
    const { updateHabit } = useContext(HabitContext);

    const toggleDone = () => {
        let newCurStreak = isDone ? parseInt(curStreak) - 1 : parseInt(curStreak) + 1;
        let newBestStreak = bestStreak;
    
        // Only update bestStreak if curStreak surpasses or equals it
        if (newCurStreak >= bestStreak) {
            newBestStreak = newCurStreak;
        }
    
        // Ensure bestStreak follows the curStreak adjustment
        if (parseInt(curStreak) >= parseInt(bestStreak)) {
            newBestStreak = isDone ? parseInt(bestStreak) - 1 : parseInt(bestStreak) + 1;
        }
    
        // Update the habit
        updateHabit(id, { 
            curStreak: newCurStreak, 
            bestStreak: newBestStreak, 
            isDone: !isDone 
        });
    };
    
    

    const getIconColor = () => {
        if (curStreak >= 90) return Colors.purple;
        if (curStreak >= 66) return Colors.blue;
        if (curStreak >= 21) return Colors.green;
        if (curStreak >= bestStreak) return Colors.gold;
        return isDone ? Colors.offWhite : Colors.black;
    };

    return (
        <TouchableOpacity activeOpacity={1} onPress={toggleDone}>
            <View style={[HabitBoxStyles.box, isDone ? HabitBoxStyles.blackBox : HabitBoxStyles.whiteBox]}>
                <Text
                    style={[HabitBoxStyles.title, { color: isDone ? Colors.offWhite : Colors.black }]}
                    numberOfLines={2}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.5}
                >
                    {title}
                </Text>
                <View style={HabitBoxStyles.iconRow}>
                    <Ionicons name="checkmark-circle" size={20} color={getIconColor()} />
                    <Text style={[HabitBoxStyles.count, { color: isDone ? Colors.offWhite : Colors.black }]}>
                        {curStreak}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const HabitBoxStyles = StyleSheet.create({
    box: {
        width: 120,
        height: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 28,
        borderWidth: 2,
        borderColor: 'black',
        marginHorizontal: 15,
    },
    blackBox: {
        backgroundColor: 'black',
    },
    whiteBox: {
        backgroundColor: Colors.offWhite,
    },
    title: {
        fontFamily: Fonts.AvenirHeavy,
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center'
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    count: {
        fontFamily: Fonts.AvenirHeavy,
        fontSize: 16,
        marginLeft: 5,
    }
});
