import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/App'

it('renders correctly', () => {
  const tree = renderer.create(<App />)
})
