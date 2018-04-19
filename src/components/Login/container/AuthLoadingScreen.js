import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import {isValidToken} from "./utils";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    let validAuth = undefined
    try {
      validAuth = await isValidToken(userToken)
    } catch (e) {

    }
    // This will switch to the Drawer screen or Login screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(validAuth ? 'Drawer' : 'Login');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;