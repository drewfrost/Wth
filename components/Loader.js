import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.text}>Getting the weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#432c4f',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  text: {
    color: 'white',
    fontSize: 56
  }
});
