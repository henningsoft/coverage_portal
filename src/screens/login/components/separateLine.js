// Separate Line

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import constants from '../../../const';

const SeparateLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or sign in with</Text>
      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: constants.colors.border
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: constants.colors.sky,
    marginHorizontal: 20
  }
});

export default SeparateLine;