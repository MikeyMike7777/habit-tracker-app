import { View, Text, StyleSheet } from 'react-native';
import BottomNav from '../../components/BottomNav';

export default function Insights() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>  
        <Text>Details</Text>
      </View>
      <BottomNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
