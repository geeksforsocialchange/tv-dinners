require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use('/table', require('./routes/table'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); // eslint-disable-line