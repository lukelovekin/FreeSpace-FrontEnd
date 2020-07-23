// import React from 'react';
// // import { render } from '@testing-library/react';
// import Enzyme, { shallow } from "enzyme"
// import EnzymeAdapter from "enzyme-adapter-react-16"
// import App from './App';

// Enzyme.configure({ adapter: new EnzymeAdapter()})

// it('renders without crashing', () => {
  // const wrapper = shallow(<App/>)
// })

// it('contains a div with the text "...."', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find('div').text()).toContain(/**/)
// })

// it('renders increment button', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find('button').text()).toBe('Increment')
// })

// it('renders the counter display', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find('h1').text()).toContain('The count is 0')

// })

//implementation detailas shouldnt be tested,

// it('starts counter at 0', () => {
  // const wrapper = shallow(<App />)
//   expect(wrapper.find('h1').text()).toContain('The count is 0')
// })

// it('clicking the button increments the counter', () => {
//   const wrapper = shallow(<App />)
//   wrapper.find("button").simulate('click')
//   expect(wrapper.find('h1').text()).toContain('The count is 1')
// })



// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
