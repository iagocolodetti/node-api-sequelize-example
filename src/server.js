const express = require('express');
const cors = require('cors');
const { join } = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const db = require('./database');
const routes = require('./routes');

db.connect();

const app = express();

app.use(cors());
app.use(express.json());

const swaggerDocument = YAML.load(join(__dirname, './configs/swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

app.listen(8080, () => {
    console.log('Servidor rodando na porta: 8080');
});
