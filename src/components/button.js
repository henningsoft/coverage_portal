// Button

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import constants from '../const';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constants.colors.sky,
    borderRadius: 4
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
});

export default Button;