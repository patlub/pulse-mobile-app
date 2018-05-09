import { StackNavigator } from 'react-navigation'

import Login from '../components/Login'
import drawerNavigator from './drawer'

export default RootNavigator = StackNavigator({
  Login: {
    screen: Login
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
