import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import BottomNav from '../../components/BottomNav';
import { GlobalStyles } from '../styles/GlobalStyles';
import { HomeStyles } from './styles/HomeStyles';

export default function HomeScreen() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.content}>
        <Text style={HomeStyles.title}>Home</Text>
        <Link href="/home/HomeInfo" style={HomeStyles.link}>Go to Home Info</Link>
      </View>

      <BottomNav/>
    </View>
  );
}


