import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native'
import styles from './styles'

class PartnerList extends Component {


  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Partner List
        </Text>
        <Button
          title="Log Out"
          onPress={this._signOutAsync}
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
