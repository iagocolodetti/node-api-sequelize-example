const express = require('express');
const cors = require('cors');
const db = require('./controllers/Database');
const routes = require('./routes');

const app = express();

db.connect();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);
