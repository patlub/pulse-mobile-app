import 'react-native'
import React from 'react'
import App from '../src/App'

import renderer from 'react-test-renderer'

jest.mock('react-native-safari-view', () => {
  return {
    NativeEventEmitter: jest.fn(),
  }
})

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  )
  console.log(tree);
})
