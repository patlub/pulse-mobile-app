import { AsyncStorage } from 'react-native'
import { persistCombineReducers } from 'redux-persist'
import checkInReducer from './CheckIn'
import loginReducer from './Login'
import newCheckInReducer from './NewCheckIn'
import partnerHistoryReducer from './PartnerHistory'
import partnerListReducer from './PartnerList'


const config = { key: 'root', storage: AsyncStorage }


const reducers = {
  login: loginReducer,
  checkIn: checkInReducer,
  newCheckInReducer: newCheckInReducer,
  partnerHistory: partnerHistoryReducer,
  partnerList: partnerListReducer,
}

export default persistCombineReducers(config, reducers)
