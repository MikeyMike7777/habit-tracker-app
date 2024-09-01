import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
    paddingVertical: 13,
    color: Colors.black,
    paddingHorizontal: 20,
  },
  descriptionInput: {
    height: 290,
    textAlignVertical: 'top',
    fontFamily: Fonts.AvenirMedium,
  },
  selectorText: {
    borderWidth: 0,
    padding: 0,
  },
  optionText: {
    color: Colors.black,
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
  },
  pickerText: {
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
    color: Colors.black,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  streakInput: {
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
    color: Colors.black,
    marginLeft: 10,
    flex: 1,
  },
});
