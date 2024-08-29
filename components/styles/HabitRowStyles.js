import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const HabitRowStyles = StyleSheet.create({
    rowContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 20,
    },
    middleLeftSection: {
        flexDirection: 'row',
        alignItems: 'left',
        flex: 1,
        justifyContent: 'left',
    },
    middleRightSection: {
        flexDirection: 'row',
        alignItems: 'left',
        flex: 1,
        justifyContent: 'left',
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    title: {
        fontFamily: Fonts.AvenirHeavy,
        fontSize: 18,
        color: Colors.black,
        marginRight: 10,
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        paddingHorizontal: 20,
    },
    count: {
        fontFamily: Fonts.AvenirMedium,
        marginLeft: 5,
        fontSize: 16,
        color: Colors.black,
    },
});
        