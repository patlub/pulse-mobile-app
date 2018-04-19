import * as types from '../actions/types'

const INITIAL_STATE = {
  userInfo: undefined,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, userInfo: action.payload }
    default:
      return state
  }
}
