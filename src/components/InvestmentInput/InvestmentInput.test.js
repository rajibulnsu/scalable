import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InvestmentInput from './InvestmentInput';

configure({ adapter: new Adapter() });

describe('InvestmentInput', () => {
  it('should render with a label and an input field', () => {
    const investmentInput = shallow(<InvestmentInput />);
    
    expect(investmentInput.find('label').length).toEqual(1);
    expect(investmentInput.find('input').length).toEqual(1);
  });
});