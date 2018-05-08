import { AsyncStorage } from 'react-native'
import { persistCombineReducers } from 'redux-persist'
import checkInReducer from './checkIn'
import loginReducer from './login'
import newCheckInReducer from './newCheckIn'
import partnerHistoryReducer from './partnerHistory'
import partnerListReducer from './partnerList'


const config = { key: 'root', storage: AsyncStorage }


const reducers = {
  login: loginReducer,
  checkIn: checkInReducer,
  newCheckInReducer: newCheckInReducer,
  partnerHistory: partnerHistoryReducer,
  partnerList: partnerListReducer,
}

export default persistCombineReducers(config, reducers)
