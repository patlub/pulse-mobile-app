import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  Linking,
  Platform
} from 'react-native'
import SafariView from 'react-native-safari-view'
var qs = require('qs')
import styles from '../styles'

class Login extends Component {

  constructor(props) {
    super(props)
    this._processURL = this._processURL.bind(this)
  }

  state = {
    token: undefined
  }

  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this._processURL)
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this._processURL({ url })
      }
    })
  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this._processURL)
  }

  _processURL(e) {
    let url = e.url.replace('pulsemobile://', '').split('?')
    let path = url[0]
    let params = url[1] ? qs.parse(url[1]) : null

    console.log(path, params)
    // do something here based on `path` and `params`
    this.setState({ token: params})

    if (Platform.OS === 'ios') {
      SafariView.dismiss()
    }
  }

  loginWithGoogle = () => this.openURL("https://api-staging.andela.com/login?redirect_url=pulsemobile://login")

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.isAvailable()
        .then(SafariView.show({
          url: url,
          fromBottom: true,
        }))
        .catch(error => {
          // Fallback WebView code for iOS 8 and earlier
          console.log(error)
        });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Log In
        </Text>
        <Button
          title="Log In"
          onPress={this.loginWithGoogle}
        />
      </View>
    )
  }
}

export default Login
