import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/Fonts';

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