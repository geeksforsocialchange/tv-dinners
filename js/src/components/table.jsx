import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as api from '../api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableComponent = ({ name }) => {
  const classes = useStyles();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchRecords(_name) {
      const data = await api.getAirtable(_name);
      setRecords(data);
    }
    fetchRecords(name);
  }, [name]);

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
  name: PropTypes.string.isRequired,
};

function generateRow(values, index = 0) {
  return (
    <TableRow key={index}>
      {values.map((val, key) => <TableCell key={key}>{val}</TableCell>)}
    </TableRow>
  );
};

export default TableComponent;
