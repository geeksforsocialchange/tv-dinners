const axios = require('axios');

const _axios = axios.create({
  baseURL: process.env.AIRTABLE_URL,
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
  },
});

const getTable = async table => {
  const { data } = await _axios.get(`/${table.name}?${table.fields}&view=Public%20view`);
  table.records = data.records;
};

module.exports = {
  getTable,
};
