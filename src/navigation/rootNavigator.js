import { StackNavigator } from 'react-navigation'

import Login from '../components2/index'
import drawerNavigator from './drawerNavigator'

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
