import { AsyncStorage } from 'react-native'
import { persistCombineReducers } from 'redux-persist'
import checkInReducer from '../components/CheckIn/reducer'
import loginReducer from '../components/Login/reducer'
import newCheckInReducer from '../components/NewCheckIn/reducer'
import partnerHistoryReducer from '../components/PartnerHistory/reducer'
import partnerListReducer from '../components/PartnerList/reducer'


const config = { key: 'root', storage: AsyncStorage }


const reducers = {
  login: loginReducer,
  checkIn: checkInReducer,
  newCheckInReducer: newCheckInReducer,
  partnerHistory: partnerHistoryReducer,
  partnerList: partnerListReducer,
}

export default persistCombineReducers(config, reducers)