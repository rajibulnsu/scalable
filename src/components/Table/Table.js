import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  const { tableColumns, tableRows} = props;

  let tableHeader = React.createElement('tr', {},
    tableColumns.map(
      item => React.createElement('th', { key: item }, item),
    )
  );

  return (
    <table className="table table-striped">
      <thead>
        {tableHeader}
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  tableColumns: [],
  tableRows: [],
};

Table.propTypes = {
  tableColumns: PropTypes.array,
  tableRows: PropTypes.array
};


export default Table;
