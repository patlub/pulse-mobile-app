import 'react-native'
import React from 'react'
import PartnerList from '../../src/components/index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <PartnerList />
  )
})
