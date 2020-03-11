// Container View

import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import constants from '../const';

class Container extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={constants.colors.darkBlue} barStyle='light-content' />
        { this.props.children }
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.tint
  }
});

Container.propTypes = {
  children: PropTypes.node
}

Container.defaultProps = {
  children: null
}

export default Container;