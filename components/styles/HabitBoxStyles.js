import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { StyleSheet } from 'react-native';

export const HabitBoxStyles = StyleSheet.create({
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
