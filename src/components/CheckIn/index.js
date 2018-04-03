import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import styles from './styles'

class CheckIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to CheckIn
        </Text>
        <Button
          title="Back"
          onPress={() =>
            this.props.navigation.navigate('PartnerHistory')
          }
        />
      </View>
    )
  }
}

export default CheckIn
