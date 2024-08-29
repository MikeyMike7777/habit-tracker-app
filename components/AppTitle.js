import React from 'react';
import { View, Text } from 'react-native';
import { AppTitleStyles } from './styles/AppTitleStyles.js';

export default function AppTitle() {
    return (
        <View style={AppTitleStyles.titleContainer}>
            <Text style={AppTitleStyles.DIN}>DIN</Text>
            <Text style={AppTitleStyles.DoItNow}>Do It Now</Text>
        </View>
    );
}