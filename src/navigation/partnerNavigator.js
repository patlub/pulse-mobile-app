import { StackNavigator } from 'react-navigation'

import PartnerList from '../components/PartnerList'
import PartnerHistory from '../components/PartnerHistory'
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
