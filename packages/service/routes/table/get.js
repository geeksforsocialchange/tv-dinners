const { tablesMap } = require('@tv-dinners/common/tables');
const { getTable } = require('../../database');

module.exports = async (req, res) => {
  if (!('name' in req.query)) return res.status(400).send('No table name given');

  const { name } = req.query;
  const table = tablesMap[name];

  if (!table) return res.status(400).send('Invalid table name');

  try {
    await getTable(table);
    return res.type('application/json').send({
      columns: table.columns,
      rows: table.rows,
    });
  }
  catch (e) {
    return res.status(500).send('Unable to fetch airtable');
  }
};
