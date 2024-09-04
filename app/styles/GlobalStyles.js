import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.offWhite,
        paddingTop: 70,
        paddingBottom: 40,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wordButton: {
        fontFamily: Fonts.AvenirHeavy,
        fontSize: 18,
        color: Colors.black,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 30,
    },
    noHabitsText: {
        fontFamily: Fonts.AvenirHeavy,
        fontSize: 18,
        color: Colors.gray,
        textAlign: 'center',
      },
});
