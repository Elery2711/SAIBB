const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index.routes');

//reglas cors
const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}

app.use(cors(
    corsOptions
));
app.use(bodyParser.json());



app.use('/api', routes);

module.exports = app;