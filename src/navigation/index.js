import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import React, { Component } from 'react'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import RootNavigator from './rootNavigator'


const addListener = createReduxBoundAddListener("root")


class ApplicationWithNavigation extends Component {
  render() {
    return (
      <RootNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
          addListener
        })}
      />
    )
  }
}

const mapStateToProps = state => ({ navigation: state.navigation })

const mapDispatchToProps = dispatch => ({ dispatch })

ApplicationWithNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ApplicationWithNavigation,
)
