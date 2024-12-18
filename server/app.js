require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./src/config/db.config');
const routes = require('./src/routers/routes');
const { createOrExistAdmin } = require('./src/helper/admin.helper');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
   res.send('Hello, World!');
});

app.use('/', routes)

const port = 5000;
app.listen(port, () => {
   createOrExistAdmin()
   console.log(`Server is running on port ${port}`);
});
