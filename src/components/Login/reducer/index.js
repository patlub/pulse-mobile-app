import * as types from '../actions/types'

const INITIAL_STATE = {
  token: undefined,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, token: action.payload }
    default:
      return state
  }
}
