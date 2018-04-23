import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import SideDrawer from '../../src/components/common/SideDrawer'

describe('Testing SideDrawer Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<SideDrawer />)
    expect(wrapper).toMatchSnapshot();
  })

  it('toggleShowLogout: should set state to new state', () => {
    const wrapper = shallow(<SideDrawer showLogout={false} />)
    const instance = wrapper.instance();
    expect(instance.state.showLogout).toBe(false);
    instance.toggleShowLogout();
    expect(instance.state.showLogout).toBe(true);
  })
})
