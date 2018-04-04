import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from '../reducers'

const middlewares = [promiseMiddleware()]

if (__DEV__) {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
} 

const store = createStore(reducers, applyMiddleware(...middlewares))

export default store

