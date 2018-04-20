import reducers, { INITIAL_STATE } from '../reducer'
import * as types from '../actions/types'

describe('login reducers', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should update store accordingly on login success', () => {
    expect(reducers(INITIAL_STATE, {
      type: types.LOGIN_SUCCESS,
      payload: 'token',
    })).toEqual({ ...INITIAL_STATE, userInfo: 'token' })
  })

  it('should update store accordingly on login failure', () => {
    expect(reducers(INITIAL_STATE, {
      type: types.LOGIN_FAILURE,
      payload: 'error',
    })).toEqual({ ...INITIAL_STATE, error: 'error' })
  })
})
