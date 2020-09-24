import React from 'react';
import { render } from '@testing-library/react';
import { mount, shallow, configure } from 'enzyme';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
import CounterNumber from '../components/CounterNumber';

configure({adapter: new Adapter()});
describe('CounterNumber', () => {
  it('should render correctly in Counter Number', () => {
      mount(<App/>)
  });
});