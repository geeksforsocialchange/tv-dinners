import axios from 'axios';

export const getAirtable = async tableName => {
  const { data: { records } } = await axios.get(
    `${AIRTABLE_URL}/${tableName}?view=Public%20view`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    },
  );
  return records;
};
