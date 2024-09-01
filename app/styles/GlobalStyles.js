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
    infoButton: {
        position: 'absolute',
        top: 20, // Adjust according to your layout
        left: 20, // Adjust according to your layout
      },
    addButton: {
        position: 'absolute',
        top: 18, // Adjust according to your layout
        right: 20, // Adjust according to your layout
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 30,
    },
});
