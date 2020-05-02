import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const TableComponent = ({ name }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchRecords() {
      const { data } = await axios.get(`${API_LOCATION}/table?name=${name}`);
      setData(data);
    }
    fetchRecords();
  }, [name]);

  if (Object.keys(data).length === 0) return null;

  const { columns, rows } = data;
  return (
    <table className='table'>
      <thead>{generateRow(columns)}</thead>
      <tbody>
        {rows.map((row, index) => generateRow(Object.values(row), index))}
      </tbody>
    </table>
  );
};

TableComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

function generateRow(values, index = 0) {
  return (
    <tr key={index}>
      {values.map((val, key) => <td key={key}>{val}</td>)}
    </tr>
  );
};

export default TableComponent;
