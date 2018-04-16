import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import andelaLogo from '../../assets/images/andela_logo.png';
import googleLogo from '../../assets/images/google_logo.png'

const Login = ({ navigation, onPress }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.logoContainer}>
        <Image source={andelaLogo} style={styles.logoStyle} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>PULSE</Text>
      </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={styles.touchableStyle}
          activeOpacity={0.6}
          onPress={onPress}
        >
          <View style={styles.touchableImageContainer} >
            <Image source={googleLogo} style={styles.touchableImage} />
          </View>
          <View style={styles.touchableDivider} />
          <View style={styles.touchableTextContainer}>
            <Text style={styles.touchableText} >SIGN IN TO GET STARTED</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

export default Login
