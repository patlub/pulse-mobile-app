import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import styles from '../styles/PartnerHistoryStyles'

class PartnerHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to PartnerHistory
        </Text>
        <Button
          title="CheckIn"
          onPress={() =>
            this.props.navigation.navigate('CheckIn')
          }
        />
        <Button
          title="Back"
          onPress={() =>
            this.props.navigation.navigate('PartnerList')
          }
        />
      </View>
    )
  }
}

export default  PartnerHistory
