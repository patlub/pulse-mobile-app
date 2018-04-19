import React, { Component } from 'react'
import {
  Linking,
  Platform,
  AsyncStorage,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SafariView from 'react-native-safari-view'
import qs from 'qs'
import Login from '../index'
import * as loginActions from '../actions'
import { getUserInfo, isValidToken } from './utils'
import CustomToast  from '../../Common/CustomToast'
import styles from '../styles'
import { PROD_URL, STAGING_URL, REDIRECT_URL } from 'react-native-dotenv';


class LoginContainer extends Component {

  constructor(props) {
    super(props)
    this._processURL = this._processURL.bind(this)
  }

  state = {
    token: undefined,
    error: undefined
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
    let path = url[0]
    let params = url[1] ? qs.parse(url[1]) : null

    // console.log(path, params)

    let validUser = undefined

    try {
      validUser = await isValidToken(params.token)
    } catch (e) {
      await this.props.loginActions.loginFailure(e)
      await this.setState({error: e.message })
    }
    if(validUser) {
      let userInfo
      try{
        userInfo = await getUserInfo(params.token)
      } catch(e) {
        await this.props.loginActions.loginFailure(e)
        await this.setState({error: e.message })
      }
      if(userInfo){
        await this.props.loginActions.loginSuccess(userInfo)
        await AsyncStorage.setItem('userToken', params.token)
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
    const { token,loginActions } = this.props

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
