import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { WeatherConditions, WeatherOptions } from '../utils/WeatherConditions';

export const Weather = ({ temp, condition }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={WeatherOptions[condition].gradientColors}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={WeatherOptions[condition].iconName}
          size={100}
          color='white'
        />
        <Text style={styles.temperature}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{WeatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {WeatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(WeatherConditions).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    paddingHorizontal: 15,
    alignItems: 'flex-start'
  },
  icon: {
    paddingBottom: 5
  },
  temperature: {
    fontSize: 64,
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: '300',
    marginBottom: 10
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 30
  }
});
