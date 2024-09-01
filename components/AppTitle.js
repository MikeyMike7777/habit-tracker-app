import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../constants/Fonts.js';

export default function AppTitle() {
    return (
        <View style={AppTitleStyles.titleContainer}>
            <Text style={AppTitleStyles.DIN}>DIN</Text>
            <Text style={AppTitleStyles.DoItNow}>Do It Now</Text>
        </View>
    );
}

export const AppTitleStyles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20
    },
    DIN: {
        fontFamily: Fonts.Copperplate,
        fontSize: 70,
        margin: -10,
    },
    DoItNow: {
        fontFamily: Fonts.Baskerville,
        fontSize: 17,
        fontStyle: 'italic'
    }
});