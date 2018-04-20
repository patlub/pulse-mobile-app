
import * as types from '../actions/types'

export const INITIAL_STATE = {
  userInfo: undefined,
  error: undefined,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, userInfo: action.payload }
    case types.LOGIN_FAILURE:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
