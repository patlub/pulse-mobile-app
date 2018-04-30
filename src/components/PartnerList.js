import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import styles from '../styles/styles'

class PartnerList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Partner List
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
        <Button
          title="history"
          onPress={() =>
            this.props.navigation.navigate('PartnerHistory')
          }
        />
      </View>
    )
  }
}

export default PartnerList
