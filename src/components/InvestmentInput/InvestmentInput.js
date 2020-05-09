import React from 'react';
import PropTypes from 'prop-types';

import styles from './InvestmentInput.styles';

const InvestmentInput = (props) => {
  const { defaultInvestment, onChangeInitialInvestment } = props;

  const onChangeSelector = (event) => {
    let investmentAmount = parseInt(event.target.value, 10);

    onChangeInitialInvestment(investmentAmount);
  };

  return (
    <div style={styles.investmentInputContainer}>
      <label>Initial Investment:</label>
      <input type="number" value={defaultInvestment} className="form-control" onChange={onChangeSelector}/>
    </div>
  );
}

InvestmentInput.defaultProps = {
  defaultInvestment: 10000,
  onChangeInitialInvestment: () => { }
};

InvestmentInput.propTypes = {
  defaultInvestment: PropTypes.number,
  onChangeInitialInvestment: PropTypes.func
};

export default InvestmentInput;