import 'react-native'
import React from 'react'
import CheckIn from '../../src/components/CheckinComponent'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <CheckIn />
  )
})
