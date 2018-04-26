import { DrawerNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'

import partnerNavigator from './partnerNavigator'
import NewCheckIn from '../components/NewCheckIn'
import SideDrawer from '../components/common/SideDrawer'

let { height, width } = Dimensions.get('window')

export default drawerNavigator = DrawerNavigator({
  Partners: {
    screen: partnerNavigator,
  },
  NewCheckIn: {
    screen: NewCheckIn,
  },
},
{
  drawerWidth: width / 1.3,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOptions: {
    activeTintColor: '#496ae5',
  },
  contentComponent: SideDrawer,
},
)

