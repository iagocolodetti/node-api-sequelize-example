const express = require('express');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const db = require('./database');
const routes = require('./routes');
const swaggerConfig = require('./config/swagger');

db.connect();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerConfig)));

app.use(routes);

app.listen(8080);
