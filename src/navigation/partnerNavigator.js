import { StackNavigator } from 'react-navigation'

import PartnerList from '../components/index'
import PartnerHistory from '../components/index'
import CheckIn from '../components/CheckIn'

export default partnerNavigator = StackNavigator({
  PartnerList: {
    screen: PartnerList
  },
  PartnerHistory: {
    screen: PartnerHistory
  },
  CheckIn: {
    screen: CheckIn
  }
},
  {
    intialRouteName: 'PartnerList',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)
