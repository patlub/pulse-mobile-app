import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from '../reducers'


const middlewares = [promiseMiddleware()]

if (__DEV__) {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
} 

const configureStore = () => {
  const store = createStore(reducers, {}, applyMiddleware(...middlewares))
  const persistor = persistStore(store)

  return { persistor, store }
};

export default configureStore

