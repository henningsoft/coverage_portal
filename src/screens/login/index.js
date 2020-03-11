// Login screen

import React from 'react';
import {
  View, 
  TouchableOpacity,
  Text
} from 'react-native';

import { Container, Button } from '../../components';
import {
  Welcome,
  RegisterButton,
  InputField,
  ForgotButton,
  SeparateLine,
  GoogleButton
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

  onGoogle() {

  }

  renderHeaderContent() {
    return (
      <View style={styles.titleContent}>
        <Welcome />
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
        <SeparateLine />
        <GoogleButton
          onPress={() => this.onGoogle()}
        />
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