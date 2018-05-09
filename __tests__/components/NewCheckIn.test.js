import 'react-native'
import React from 'react'
import NewCheckIn from '../../src/components/NewCheckIn'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <NewCheckIn />
  )
})
