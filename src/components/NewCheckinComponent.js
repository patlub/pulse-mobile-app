import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import styles from '../styles/NewCheckinStyles'

class NewCheckIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to New Checkin
        </Text>
        <Button
          title="Log Out"
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        />
        <Button
          title="dRAWER"
          onPress={() =>
            this.props.navigation.navigate('DrawerOpen')
          }
        />
      </View>
    )
  }
}

export default NewCheckIn
