// Button

import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import constants from '../../../const';

const GoogleButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Image source={require('../../../assets/images/google.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: constants.colors.border
  },
});

export default GoogleButton;