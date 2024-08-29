import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.offWhite,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    DIN: {
        fontFamily: Fonts.Copperplate,
        fontSize: 70,
        fontWeight: 'bold',
        margin: -10,
    },
    DoItNow: {
        fontFamily: Fonts.Baskerville,
        fontSize: 17,
        fontStyle: 'italic'
    }
});
