import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import SideDrawer from '../../src/components/common/SideDrawer'

describe('Testing SideDrawer Component', () => {
  const navigate = jest.fn()
  const props = {
    navigation: { navigate },
  }

  it('renders as expected', () => {
    const wrapper = shallow(<SideDrawer />)
    expect(wrapper).toMatchSnapshot();
  })

  it('toggleShowLogout: should set state to new state', () => {
    const wrapper = shallow(<SideDrawer {...props} />)
    const emailButton = wrapper.find('TouchableOpacity').at(0)
    emailButton.simulate('Press')
    expect(wrapper.state().showLogout).toBe(true)
  })

  it('navigates to Partners screen', () => {
    const wrapper = shallow(<SideDrawer {...props} />)
    const partnersNav = wrapper.find('TouchableOpacity').at(1)
    partnersNav.simulate('Press');
    expect(navigate).toBeCalled()
  })

  it('navigates to checkin screen', () => {
    const wrapper = shallow(<SideDrawer {...props} />)
    const checkinNav = wrapper.find('TouchableOpacity').at(2)
    checkinNav.simulate('Press');
    expect(navigate).toBeCalled()
  })

  it('navigates to logout', () => {
    const wrapper = shallow(<SideDrawer {...props} />)
    wrapper.setState({ showLogout: true })
    const logoutNav = wrapper.find('TouchableOpacity').at(1)
    logoutNav.simulate('Press');
    expect(navigate).toBeCalled()
  })
})
