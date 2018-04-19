import * as types from './types'

export const loginSuccess = userInfo => ({
  type: types.LOGIN_SUCCESS,
  payload: userInfo,
})

export const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  payload: error,
})

