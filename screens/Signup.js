import React from 'react'
import {StyleSheet, Text, View, Button, TextInput} from 'react-native'
export default class Signup extends React.Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    confPass: ''
  };
  handleFullNameChange = fullName => {
    this.setState({ fullName })
  };
  handleEmailChange = email => {
    this.setState({ email })
  };
  handlePasswordChange = password => {
    this.setState({ password })
  };
  handleConfPassChange = confPass => {
    this.setState({ confPass })
  };
  goToLogin = () => this.props.navigation.navigate('Login')

  render() {
    const { fullName, email, password, confPass } = this.state
    return (
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
        <TextInput
          name="full name"
          value={fullName}
          placeholder="Enter your full name"
          autoCapitalize="none"
          // onChangeText={this.handleFullNameChange()}
        />
        </View>
        <View style={{ margin: 10 }}>
        <TextInput
          name="email"
          value={email}
          placeholder="Enter email"
          autoCapitalize="none"
          // onChangeText={this.handleEmailChange}
        />
        </View>
        <View style={{ margin: 10 }}>
        <TextInput
          name="password"
          value={password}
          placeholder="Enter password"
          secureTextEntry
          // onChangeText={this.handlePasswordChange}
        />
        </View>
        <View style={{ margin: 10 }}>
        <TextInput
          name="password"
          value={confPass}
          placeholder="Confirm password"
          secureTextEntry
          // onChangeText={this.handleConfPassChange()}
        />
        </View>
        <Button title=" Sign up " onPress={this.goToLogin}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})