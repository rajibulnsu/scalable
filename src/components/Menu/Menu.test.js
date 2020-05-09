import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './Menu';

configure({ adapter: new Adapter() });

describe('Menu', () => {
  it('should render with 2 links', () => {
    const menu = shallow(<Menu/>);
    expect(menu.find('Link').length).toEqual(2);
  });
});