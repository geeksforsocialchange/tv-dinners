import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/table';
import tables from '@tv-dinners/common/tables';

const wishlistDiv = document.getElementById('wishlistTable');
if (wishlistDiv) ReactDOM.render(<Table name={tables.WISHLIST} />, wishlistDiv);
