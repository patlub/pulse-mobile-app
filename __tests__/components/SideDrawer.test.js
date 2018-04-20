import 'react-native'
import React from 'react'
import { shallow } from 'enzyme';
import SideDrawer from '../../src/components/common/SideDrawer'

describe('Testing SideDrawer Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<SideDrawer />)
    expect(wrapper).toMatchSnapshot();
  });
})
