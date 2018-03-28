import { DrawerNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'

import partnerNavigator from './partnerNavigator'
import NewCheckin from '../components/NewCheckin/NewCheckin'

let { height, width } = Dimensions.get('window')

export default drawerNavigator = DrawerNavigator({
  Partners: {
    screen: partnerNavigator
  },
  NewCheckin: {
    screen: NewCheckin
  }
},
{
  drawerWidth: width/1.3,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOptions: {
    activeTintColor: '#496ae5',
  },
})
