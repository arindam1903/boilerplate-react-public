import React from 'react';
import { render } from '@testing-library/react';
import { mount, shallow, configure } from 'enzyme';
import InputButton from '../components/InputButton';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('InputButton', () => {
  it('should render correctly in "debug" mode', () => {
    mount(<InputButton/>)  
  });
});