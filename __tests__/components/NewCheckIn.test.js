import 'react-native'
import React from 'react'
import NewCheckIn from '../../src/components/NewCheckIn/index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <NewCheckIn />
  )
})
