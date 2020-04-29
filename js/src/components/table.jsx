import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import TableClass from '../tables/table';
import * as api from '../api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableComponent = ({ table }) => {
  const classes = useStyles();
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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>{generateRow(columns)}</TableHead>
        <TableBody>
          {records.map(({ fields }, index) => generateRow(Object.values(fields), index))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableComponent.propTypes = {
  table: PropTypes.instanceOf(TableClass),
};

function generateRow(values, index = 0) {
  return (
    <TableRow key={index}>
      {values.map((val, key) => <TableCell key={key}>{val}</TableCell>)}
    </TableRow>
  );
};

export default TableComponent;
