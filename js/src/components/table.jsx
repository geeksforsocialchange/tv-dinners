import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableClass from '../tables/table';
import * as api from '../api';

const TableComponent = ({ table }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchRecords() {
      const data = await api.getAirtable(table);
      setRecords(data);
    }
    fetchRecords();
  }, [table]);

  if (records.length === 0) return null;

  const columns = Object.keys(records[0].fields);
  return (
    <table>
      <thead>{generateRow(columns)}</thead>
      <tbody>
        {records.map(({ fields }, index) => generateRow(Object.values(fields), index))}
      </tbody>
    </table>
  );
};

TableComponent.propTypes = {
  table: PropTypes.instanceOf(TableClass),
};

function generateRow(values, index = 0) {
  return (
    <tr key={index}>
      {values.map((val, key) => <td key={key}>{val}</td>)}
    </tr>
  );
};

export default TableComponent;
