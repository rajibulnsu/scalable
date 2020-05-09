import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './Table';

configure({ adapter: new Adapter() });

describe('Table', () => {
  it('should render with a table', () => {
    const table = shallow(<Table />);

    expect(table.find('table').length).toEqual(1);
  });
});