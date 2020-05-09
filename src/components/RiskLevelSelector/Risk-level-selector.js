import React from 'react';
import PropTypes from 'prop-types';
import styles from './RiskLevelSelector.styles';

const RiskLevelSelector = (props) => {
    const { minRiskLevel, maxRiskLevel, defaultRiskLevel, onChangeRiskLevel} = props;

    const onChangeSelector = (event) => {
        let riskLevel = parseInt(event.target.value, 10);
        
        onChangeRiskLevel(riskLevel);
    };

    const options = [];
    for (let k = minRiskLevel; k<=maxRiskLevel; ++k) {
    options.push(
        <option key={k} value={k}>{k}</option>
        );
    }

    return (
        <div style={styles.divStyle}>
            <label>Risk level:</label>
            <select 
                className="form-control" 
                onChange={onChangeSelector} 
                defaultValue={defaultRiskLevel}
                id="riskSelector"
            >
                {options}
            </select>
        </div>
    );
}

RiskLevelSelector.defaultProps = {
    minRiskLevel: 3,
    maxRiskLevel: 25,
    defaultRiskLevel: 3,
    onChangeRiskLevel: () => {}
};

RiskLevelSelector.propTypes = {
    minRiskLevel: PropTypes.number,
    maxRiskLevel: PropTypes.number,
    defaultRiskLevel: PropTypes.number,
    onChangeRiskLevel: PropTypes.func
};

export default RiskLevelSelector;
