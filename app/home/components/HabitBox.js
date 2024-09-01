import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import Colors from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';

export default function HabitBox({ title, count, iconColor }) {
    const [isDone, setIsDone] = useState(true);

    const toggleDone = () => {
        setIsDone(!isDone);
    };

    return (
        <TouchableOpacity activeOpacity={1} onPress={toggleDone}>
            <View style= {[HabitBoxStyles.box, isDone ? HabitBoxStyles.whiteBox : HabitBoxStyles.blackBox]}>
                <Text
                    style={[HabitBoxStyles.title, {color: isDone ? Colors.black : Colors.offWhite}]}
                    numberOfLines={2} // Ensure text stays on one line
                    adjustsFontSizeToFit={true} // Adjust font size to fit within the box
                    minimumFontScale={0.5} // Set a minimum font scale
                >
                    {title}
                </Text>
                <View style={HabitBoxStyles.iconRow}>
                    <Ionicons name="checkmark-circle" size={20} color={iconColor} />
                    <Text style={[HabitBoxStyles.count, {color: isDone ? Colors.black : Colors.offWhite}]}>
                        {count}
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
