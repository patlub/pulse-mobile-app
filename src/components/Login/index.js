import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import styles from './styles'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Log In
        </Text>
        <Button
          title="Log In"
          onPress={() =>
            this.props.navigation.navigate('Drawer')
          }
        />
      </View>
    )
  }
}

export default Login
