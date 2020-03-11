// Forgot Button

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ForgotButton = ({ title, onPress }) => {
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
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  title: {
    fontSize: 16,
    color: 'white'
  }
});

export default ForgotButton;