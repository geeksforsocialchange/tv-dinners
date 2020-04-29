import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/table';
import { wishlist } from './tables';

const wishlistDiv = document.getElementById('wishlistTable');
if (wishlistDiv) ReactDOM.render(<Table table={wishlist} />, wishlistDiv);
