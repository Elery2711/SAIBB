const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index.routes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

module.exports = app;