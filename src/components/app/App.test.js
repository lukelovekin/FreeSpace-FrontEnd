import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import App from './App';
import NoMatch from '../NoMatch'
import About from '../About';


Enzyme.configure({ adapter: new EnzymeAdapter()})
// implementation detailas shouldnt be tested,
// surely no comments needed

it('renders without crashing', () => {
  const wrapper = shallow(<App/>)
})

it('renders log out button', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('button').text()).toContain('Log Out')
})

it('displayes no match on an unknown page', () => {
  const wrapper = shallow(<NoMatch />)
  expect(wrapper.find('p').text()).toContain('No Match')
})

it('renders the counter display', () => {
  const wrapper = shallow(<About />)
  expect(wrapper.find('h1').text()).toContain('About FreeSpace')

})

//the prevent default onClicks makes this test fail
it('clicking the button logs out', () => {
  const wrapper = shallow(<App />)
  wrapper.find("button").simulate('click')
  expect(wrapper.find('button').text()).toContain('Log Out')
})
