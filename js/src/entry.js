import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/table';

const wishlistTable = document.getElementById('wishlistTable');
if (wishlistTable) ReactDOM.render(<Table name='Wishlist' />, wishlistTable);
