import { StackNavigator } from 'react-navigation'

import PartnerList from '../components/PartnerList'
import PartnerHistory from '../components/PartnerHistoryComponent'
import CheckIn from '../components/CheckinComponent'

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
