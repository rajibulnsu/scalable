import React from 'react';
import PropTypes from 'prop-types';
import useTimeSeries from '../hooks/useTimeSeries';
import Table from '../components/Table/Table';

const TableScreen = (props) => {
    const {riskLevel, initialSum, cones} = props;
    const { months, dataGood, dataMedian, dataBad } = useTimeSeries(riskLevel, initialSum, cones);

    const tableColumns = ['month', 'good', 'median', 'bad'];
    const tableRows = months && months.map((entry, index) => (
        <tr key={index}>
            <td>{entry}</td>
            <td>{dataGood[index]}</td>
            <td>{dataMedian[index]}</td>
            <td>{dataBad[index]}</td>
        </tr>
    ));

    return <Table tableColumns={tableColumns} tableRows={cones.length > 0 && tableRows} />;
}

Table.defaultProps = {
    riskLevel: 3,
    initialSum: 10000,
    cones: []
};

Table.propTypes = {
    riskLevel: PropTypes.number,
    initialSum: PropTypes.number,
    cones: PropTypes.array
};

export default TableScreen;
