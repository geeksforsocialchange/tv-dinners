import process from 'process';
import axios from 'axios';

const airtableApiKey = process.env.AIRTABLE_API_KEY;

const airtableURL = 'https://api.airtable.com/v0/WishliappGxF9km8lrfbaf0';

export const getAirtable = async tableName => {
  const data = await axios.get(`${airtableURL}/${tableName}?view=Grid%20view`, {
    headers: { Authorization: `Bearer ${airtableApiKey}` },
  });
  return data.records;
};
