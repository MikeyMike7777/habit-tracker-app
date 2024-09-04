import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Link } from 'expo-router';
import AppTitle from '../../components/AppTitle';
import { Fonts } from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function HomeInfo() {
  return (
    <View style={GlobalStyles.container}>
      {/* Title and Done button */}
      <View style={styles.space}>
        <AppTitle />
      </View>
      <Link href="/" style={[GlobalStyles.wordButton, styles.done]}>Done</Link>

      {/* Facts */}
      <View style={GlobalStyles.content}>
        <View style={styles.fact}>
          <Ionicons name="checkmark-circle" size={44} color={Colors.gold} />
          <View style={styles.info}>
            <Text style={styles.infoTitle}>Personal Record</Text>
          </View>
        </View>
        <View style={styles.fact}>
          <Ionicons name="checkmark-circle" size={44} color={Colors.green} />
          <View style={styles.info}>
            <Text style={styles.infoTitle}>Common Belief</Text>
            <Text style={styles.infoDesc}><Text style={styles.bold}>21</Text> days to form a habit</Text>
          </View>
        </View>
        <View style={styles.fact}>
          <Ionicons name="checkmark-circle" size={44} color={Colors.blue} />
          <View style={styles.info}>
            <Text style={styles.infoTitle}>Scientific Belief</Text>
            <Text style={styles.infoDesc}><Text style={styles.bold}>66</Text> days to form a habit</Text>
          </View>
        </View>
        <View style={styles.fact}>
          <Ionicons name="checkmark-circle" size={44} color={Colors.purple} />
          <View style={styles.info}>
            <Text style={styles.infoTitle}>Lifestyle</Text>
            <Text style={styles.infoDesc}><Text style={styles.bold}>90</Text> days to form a lifestyle</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  done: {
    position: 'absolute',
    fontSize: 16,
    top: 100,
    right: 40,
  },
  space: {
    marginTop: 45,
  },
  fact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 55,
    marginLeft: 70,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  infoTitle: {
    fontFamily: Fonts.AvenirBlackOblique,
    fontSize: 18,
  },
  infoDesc: {
    fontFamily: Fonts.AvenirMediumOblique,
    fontSize: 15,
    color: Colors.gray,
  },
  bold: {
    fontFamily: Fonts.AvenirBlackOblique,
    fontSize: 15,
  },
});
