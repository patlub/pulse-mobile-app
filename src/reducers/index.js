import { AsyncStorage } from 'react-native'
import { persistCombineReducers } from 'redux-persist'
import checkInReducer from './CheckinReducer'
import loginReducer from './LoginReducer'
import newCheckInReducer from './NewCheckinReducer'
import partnerHistoryReducer from './PartnerHistoryReducer'
import partnerListReducer from './PartnerListReducer'


const config = { key: 'root', storage: AsyncStorage }


const reducers = {
  login: loginReducer,
  checkIn: checkInReducer,
  newCheckInReducer: newCheckInReducer,
  partnerHistory: partnerHistoryReducer,
  partnerList: partnerListReducer,
}

export default persistCombineReducers(config, reducers)
