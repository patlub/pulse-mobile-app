import * as types from './types'

export const loginSuccess = ({ token }) => ({
  type: types.LOGIN_SUCCESS,
  payload: token,
})

export const loginFailure = ({ error }) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
})

