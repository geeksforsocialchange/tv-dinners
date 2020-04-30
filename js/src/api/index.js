import axios from 'axios';

export const getAirtable = async table => {
  const { data: { records } } = await axios.get(
    `${AIRTABLE_URL}/${table.name}?${table.fields}&view=Public%20view`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    },
  );
  return records;
};
