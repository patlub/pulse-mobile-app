import 'react-native'
import React from 'react'
import { shallow } from 'enzyme';
import Login from '../index'

describe('Testing Login Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot();
  });
})
