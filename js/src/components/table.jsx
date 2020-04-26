import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

const Table = props => {
  const { variant } = props;

  // Holds the state value of records
  const [rows, setRows] = useState([]);

  // RefObj to map the variant keyword to the Airtable name and the columns to show
  const refObj = {
    wishlistTable: { name: 'Wishlist', columns: ['Name', 'Contact'] },
  };

  // Side effect will run once on mounting, call the API and store the response in the rows value
  useEffect(async () => {
    const data = await api.getAirtable(refObj[variant]);
    setRows(data);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {refObj[variant].columns.map(column => <td>{column}</td>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(() => {
          return (
            <tr>
              {refObj[variant].columns.map(column => <td>{rows.fields[column]}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  variant: PropTypes.string,
};

export default Table;
