import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore'
import ApplicationWithNavigation from './navigation';


const { store, persistor } = configureStore();


const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ApplicationWithNavigation />
    </PersistGate>
  </Provider>
)

export default App
