import { StackNavigator } from 'react-navigation'

import LoginContainer from '../components/Login/container'
import drawerNavigator from './drawerNavigator'

export default RootNavigator = StackNavigator({
  Login: {
    screen: LoginContainer
  },
  Drawer: {
    screen: drawerNavigator
  }
},
  {
    intialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)
