import React from 'react';
import { TextInput } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { styles } from '../styles/HabitInfoStyles';

export default function FrequencySelector({ frequency, setFrequency, frequencyData }) {
  return (
    <ModalSelector
      data={frequencyData}
      initValue="Select Frequency"
      onChange={(option) => setFrequency(option.label)}
      selectStyle={styles.selectorText}
      optionTextStyle={styles.optionText}
    >
      <TextInput
        style={styles.input}
        editable={false}
        placeholder="Frequency"
        placeholderTextColor={styles.gray}
        value={`Frequency: ${frequency}`}
      />
    </ModalSelector>
  );
}
