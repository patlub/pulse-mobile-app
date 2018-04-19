import React  from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store/configureStore'
import RootNavigator from './navigation/rootNavigator'
import './ReactotronConfig'

const { store, persistor } = configureStore()

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RootNavigator />
    </PersistGate>
  </Provider>
)

export default App
