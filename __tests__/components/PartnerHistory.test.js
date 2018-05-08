import 'react-native'
import React from 'react'
import PartnerHistory from '../../src/components/PartnerHistory/index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <PartnerHistory />
  )
})
