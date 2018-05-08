import { StackNavigator } from 'react-navigation'

import PartnerList from '../components/PartnerList/index'
import PartnerHistory from '../components/PartnerHistory/index'
import CheckIn from '../components/CheckIn/index'

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
