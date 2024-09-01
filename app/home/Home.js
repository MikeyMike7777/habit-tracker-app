import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import BottomNav from '../../components/BottomNav';
import { GlobalStyles } from '../styles/GlobalStyles';
import AppTitle from '../../components/AppTitle';
import HabitBox from './components/HabitBox';
import Colors from '../../constants/Colors';
import TitleWithButtons from '../../components/TitleWithButtons';

export default function HomeScreen() {
  return (
    <View style={GlobalStyles.container}>
      <TitleWithButtons/>
      <View style={GlobalStyles.content}> 
        <View style={styles.grid}>
          <HabitBox title="Habit 1" count="2" iconColor={Colors.blue}/>
          <HabitBox title="Habit 2" count="2" iconColor={Colors.blue}/>
          <HabitBox title="Habit 3" count="21" iconColor={Colors.blue}/>
          <HabitBox title="Habit 4" count="66" iconColor={Colors.blue}/>
          <HabitBox title="Habit 5" count="90" iconColor={Colors.blue}/>
          <HabitBox title="Habit 6" count="2" iconColor={Colors.blue}/>
        </View> 
      </View>
      <BottomNav/>
    </View>
  );
}

export const styles = StyleSheet.create({
  grid: {
    height: "100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginHorizontal: 10,
    paddingTop: 20,
  },
});