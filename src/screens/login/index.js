// Login screen

import React from 'react';
import {
  View, 
  TouchableOpacity,
  Text
} from 'react-native';

import { Container, Button } from '../../components';
import {
  RegisterButton,
  InputField,
  ForgotButton
} from './components';

import styles from './style';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  onSignIn() {
    
  }

  onForgotLogin() {
    
  }

  onRegister() {

  }

  renderHeaderContent() {
    return (
      <View style={styles.titleContent}>

      </View>
    )
  }

  renderInputContent() {
    return (
      <View style={styles.inputContent}>
        <InputField
          placeholder="Username"
        />
        <InputField
          type='password'
          placeholder="Password"
        />
        <Button
          title="Sign in"
          onPress={() => this.onSignIn()}
        />
        <ForgotButton
          title="Forgot your login detail? Get help signing in."
          onPress={() => this.onForgotLogin()}
        />
      </View>
    )
  }

  renderSocialLoginContent() {
    return (
      <View style={styles.socialLoginContent}>
        
      </View>
    )
  }

  renderContent() {
    return (
      <View style={styles.container}>
        {this.renderHeaderContent()}
        {this.renderInputContent()}
        {this.renderSocialLoginContent()}
      </View>
    )
  }

  render() {
    return (
      <Container>
        {this.renderContent()}

        <RegisterButton
          title='REGISTER FOR AN ACCOUNT'
          onPress={() => this.onRegister()}
        />
      </Container>
    )
  }
}

export default Login;