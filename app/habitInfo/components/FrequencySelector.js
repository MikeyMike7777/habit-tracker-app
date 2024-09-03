import React from 'react';
import { TextInput } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { styles } from '../styles/HabitInfoStyles';

export default function FrequencySelector({ frequency, setFrequency, frequencyData }) {
  const handleFrequencyChange = (option) => {
    // Extract the numeric part and set it as frequency
    const numericValue = option.label.split(' ')[0];
    setFrequency(numericValue);
  };

  return (
    <ModalSelector
      data={frequencyData}
      initValue="Select Frequency"
      onChange={handleFrequencyChange}
      selectStyle={styles.selectorText}
      optionTextStyle={styles.optionText}
    >
      <TextInput
        style={styles.input}
        editable={false}
        placeholder="Frequency"
        placeholderTextColor={styles.gray}
        value={`Frequency: ${frequency} ${frequency === '1' ? 'Day' : 'Days'}`}
      />
    </ModalSelector>
  );
}
