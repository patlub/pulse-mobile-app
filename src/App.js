import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootNavigator from './navigation/rootNavigator'
import store from './config/store'


const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
)

export default App
