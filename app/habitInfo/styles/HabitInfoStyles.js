import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 20,
    maxHeight: 800,
    marginTop: 50,
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
    paddingVertical: 13,
    color: Colors.black,
    paddingHorizontal: 25,
  },
  descriptionInput: {
    height: 390,
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
    paddingHorizontal: 25,
  },
  streakInput: {
    fontFamily: Fonts.AvenirMedium,
    fontSize: 16,
    color: Colors.black,
    marginLeft: 10,
    flex: 1,
  },
  deleteButton: {
    alignItems: 'center',
    padding: 30,
    borderRadius: 10,
  },
  deleteButtonText: {
    fontFamily: Fonts.AvenirHeavy,
    fontSize: 18,
  },
  cancelButton: {
    paddingLeft: 25,
  },
  saveButton: {
      paddingRight: 25,
  },
});
