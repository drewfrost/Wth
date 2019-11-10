import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Loader } from './components/Loader';
import * as Location from 'expo-location';
import axios from 'axios';
import { OPEN_WEATHER_API_KEY } from 'react-native-dotenv';
import { Weather } from './components/Weather';

export default App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState('Clear');
  useEffect(() => {
    handleLocation();
  }, []);

  handleLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      let { coords } = await Location.getCurrentPositionAsync({ accuracy: 1 });
      handleWeather(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("Can't show u the weather without location :(");
    }
  };

  handleWeather = async (latitude, longitude) => {
    let openWeatherLink = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${OPEN_WEATHER_API_KEY}&units=metric`;
    let { data } = await axios.get(openWeatherLink);
    setTemperature(data.main.temp);
    setCondition(data.weather[0].main);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Weather temp={Math.round(temperature)} condition={condition} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black'
  }
});
