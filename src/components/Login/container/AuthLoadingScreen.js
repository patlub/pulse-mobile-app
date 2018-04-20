import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux'
import {isValidToken} from "./utils";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._bootstrapAsync();
  }
  _bootstrapAsync = () => {
    const { userInfo } = this.props

    if (userInfo) {
      let validAuth
      try {
        validAuth = isValidToken(userInfo.token)
      } catch (e) {
    }
    this.props.navigation.navigate(validAuth ? 'Drawer' : 'Login');
  } else {
    this.props.navigation.navigate('Login');
  }
  };
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { userInfo } = state.login
  return { userInfo }
}
export default connect(mapStateToProps, {})(AuthLoadingScreen)
