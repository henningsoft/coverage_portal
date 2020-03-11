// Welcome

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import constants from '../../../const';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          style={styles.logo}
          source={require('../../../assets/images/logo.png')} 
        />
        <Text style={styles.title}>Coverage Portal</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.welcome}>WELCOME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 40,
    height: 40
  },
  title: {
    fontWeight: '900',
    fontSize: 24,
    color: 'white',
    marginLeft: 10
  },
  line: {
    height: 4,
    width: '50%',
    backgroundColor: constants.colors.sky,
    marginVertical: 20
  },
  welcome: {
    fontSize: 24,
    color: constants.colors.sky,
    letterSpacing: 4
  }
});

export default Welcome;