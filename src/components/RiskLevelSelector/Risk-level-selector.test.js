import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RiskLevelSelector from './Risk-level-selector';

configure({ adapter: new Adapter() });

describe('Risk-level-selector', () => {
  it('should render with a label and a select element', () => {
    const riskLevelSelector = shallow(<RiskLevelSelector />);
    
    expect(riskLevelSelector.find('label').length).toEqual(1);
    expect(riskLevelSelector.find('select').length).toEqual(1);
  });
});