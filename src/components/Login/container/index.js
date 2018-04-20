import React, { Component } from 'react'
import {
  Linking,
  Platform,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SafariView from 'react-native-safari-view'
import qs from 'qs'
import Login from '../index'
import * as loginActions from '../actions'
import { getUserInfo, isValidToken } from '../../../utils/authUtil'
import CustomToast  from '../../Common/CustomToast'
import styles from '../styles'

class LoginContainer extends Component {

  constructor(props) {
    super(props)
    this._processURL = this._processURL.bind(this)
  }

  componentDidMount() {
    Linking.addEventListener('url', this._processURL)
    Linking.getInitialURL().then((url) => {
      if (url) {
        this._processURL({ url })
      }
    })
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._processURL)
  }

  _processURL = async(e) => {
    let url = e.url.replace('pulsemobile://', '').split('?')
    let params = url[1] ? qs.parse(url[1]) : null
    let validUser

    try {
      validUser = await isValidToken(params.token)
    } catch (e) {
      await this.props.loginActions.loginFailure(e)
    }
    if(validUser) {
      let userInfo
      try{
        userInfo = await getUserInfo(params.token)
      } catch(e) {
        await this.props.loginActions.loginFailure(e)
      }
      if(userInfo){
        await this.props.loginActions.loginSuccess(userInfo)
        await this.props.navigation.navigate('Drawer')
      }

    }
    if (Platform.OS === 'ios') {
      await SafariView.dismiss()
    }
    if(this.state.error){
      this.refs['defaultToastBottom'].ShowToastFunction(this.state.error)
    }
  }

  loginWithGoogle = () => {
    const PROD_URL = "https://api.andela.com"
    const STAGING_URL = "https://api-staging.andela.com"
    const REDIRECT_URL = "pulsemobile://login"
    const BASE_URL = process.env.NODE_ENV === 'development' ? STAGING_URL : PROD_URL;
    const uri = `${BASE_URL}/login?redirect_url=${encodeURIComponent(REDIRECT_URL)}`
    this.openURL(uri)
  }

  openURL = (url) => {
    if (Platform.OS === 'ios') {
      SafariView.isAvailable()
        .then(SafariView.show({
          url: url,
          fromBottom: true,
        }))
        .catch(error => {
          // Fallback WebView code for iOS 8 and earlier
        })
    }
    else {
      Linking.openURL(url)
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Login onPress={this.loginWithGoogle} />
        <CustomToast ref="defaultToastBottom" backgroundColor={'red'}  position = "bottom"/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { token } = state
  return { token }
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
