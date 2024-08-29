import React from 'react';
import { View } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { NavStyles } from './styles/NavStyles';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <View style={NavStyles.bottomNav}>
      <Link href="/habits/Habits" style={NavStyles.navItem}>
        <Ionicons 
          name={pathname === '/habits/Habits' ? 'checkmark-circle-outline' : 'checkmark-circle'} 
          size={50} 
          color="black"
        />
      </Link>
      <Link href="/" style={NavStyles.navItem}>
        <Ionicons 
          name={pathname === '/home/Home' ? 'home-outline' : 'home'} 
          size={50} 
          color="black"
        />
      </Link>
      <Link href="/insights/Insights" style={NavStyles.navItem}>
        <Ionicons 
          name={pathname === '/insights/Insights' ? 'bar-chart-outline' : 'bar-chart'} 
          size={50} 
          color="black"
        />
      </Link>
    </View>
  );
}