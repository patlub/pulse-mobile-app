import configureStore from 'redux-mock-store'
import * as actions from '../actions'
import * as types from '../actions/types'

describe('login actions', () => {
  const middlewares = []
  const mockStore = configureStore(middlewares)

  it('dispatches login success', () => {
    const store = mockStore({})

    store.dispatch(actions.loginSuccess('token'))

    const expectedActions = { type: types.LOGIN_SUCCESS, payload: 'token' }
    const dispatchedActions = store.getActions()

    expect(dispatchedActions).toEqual([expectedActions])
  })

  it('dispatches login failure', () => {
    const store = mockStore({})

    store.dispatch(actions.loginFailure('error'))

    const expectedActions = { type: types.LOGIN_FAILURE, payload: 'error' }
    const dispatchedActions = store.getActions()

    expect(dispatchedActions).toEqual([expectedActions])
  })
})
