import './setupTests'; 
import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import LoginComponent from '../src/Component/Login';

describe('LoginComponent', () => {
  it('should render login inputs', () => {
    // Declare the wrapper variable here
    const wrapper = mount(<LoginComponent />);
    // Perform assertions using chai's expect
    expect(wrapper.find('input[type="text"]').length).to.equal(1);
    expect(wrapper.find('input[type="password"]').length).to.equal(1);
  });

});
