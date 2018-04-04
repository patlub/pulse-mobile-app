
import { combineReducers } from 'redux'
import counterReducer from './counterReducers'

const reducers = combineReducers({
    counter: counterReducer
})

export default reducers