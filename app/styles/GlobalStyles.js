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
    cancelButton: {
        fontFamily: Fonts.AvenirHeavy,
        fontSize: 18,
        color: Colors.black,
        paddingLeft: 20,
      },
    doneButton: {
        fontFamily: Fonts.AvenirHeavy,
        fontSize: 18,
        color: Colors.black,
        paddingRight: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 30,
    },
});
