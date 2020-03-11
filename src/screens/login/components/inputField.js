// Input Field

import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

import constants from '../../../const';

class InputField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secureTextEntry: false
    }
  }

  componentDidMount() {
    const { type } = this.props;

    if (type == 'password') {
      this.setState({ secureTextEntry: true });
    }
  }

  render() {
    const { secureTextEntry } = this.state;
    const { style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <TextInput
          {...this.props}
          style={styles.input}
          placeholderTextColor={constants.colors.placeholer}
          secureTextEntry={secureTextEntry}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: constants.colors.border,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: 'white'
  },
  input: {
    width: '100%',
    height: 30,
    fontSize: 20
  }
});

InputField.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string
}

InputField.defaultProps = {
  type: 'username'
}

export default InputField;