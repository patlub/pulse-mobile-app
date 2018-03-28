import { StackNavigator } from 'react-navigation'

import Login from '../components/Login/Login'
import drawerNavigator from './drawerNavigator'

import PartnerList from '../components/PartnerList/PartnerList'

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
