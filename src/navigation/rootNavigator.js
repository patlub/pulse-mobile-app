import { SwitchNavigator } from 'react-navigation'

import LoginContainer from '../components/Login/container'
import drawerNavigator from './drawerNavigator'
import AuthLoadingScreen from '../components/Login/container/AuthLoadingScreen'

export default RootNavigator = SwitchNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen
  },
  Login: {
    screen: LoginContainer
  },
  Drawer: {
    screen: drawerNavigator
},
},
  {
    intialRouteName: 'AuthLoading',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)
