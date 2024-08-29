import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { StyleSheet } from 'react-native';

export const HabitBoxStyles = StyleSheet.create({
    box: {
        width: '100%',
        paddingHorizontal: 28,
        paddingVertical: 22,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 28,
        borderWidth: 3,
        borderColor: 'black',
    },
    blackBox: {
        backgroundColor: 'black',
    },
    whiteBox: {
        backgroundColor: Colors.offWhite,
    },
    title: {
        fontFamily: Fonts.AvenirHeavyOblique,
        fontSize: 18,
        marginBottom: 10,
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    count: {
        fontFamily: Fonts.AvenirHeavyOblique,
        fontSize: 16,
        marginLeft: 5,
    }
});
