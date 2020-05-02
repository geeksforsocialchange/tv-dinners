import Table from './table';

const tables = {
  WISHLIST: 'WISHLIST',
};

export default tables;

export const tablesMap = {
  [tables.WISHLIST]: new Table('Wishlist', ['Name', 'Email', 'Phone']),
};
