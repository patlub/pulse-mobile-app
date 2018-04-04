import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../../actions'
import styles from './styles'

class Login extends Component {
  render() {
    const { counter, counterActions } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Log In
        </Text>
        <Text> 
          {counter.count}
        </Text>
        <Button 
          title="+"
          onPress={counterActions.increment}
        /> 
        <Button 
          title="-"
          onPress={counterActions.decrement}
        />
        <Button
          title="Log In"
          onPress={() =>
            this.props.navigation.navigate('Drawer')
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { counter } = state
  return { counter }
}

const mapDispatchToProps = dispatch => ({
  counterActions: bindActionCreators(counterActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
