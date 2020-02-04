const express = require('express');
const cors = require('cors');
const db = require('./database');
const routes = require('./routes');

db.connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);
