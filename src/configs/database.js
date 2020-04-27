module.exports = {
    development: {
        database: 'contatodb',
        username: 'root',
        password: 'root',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false
    },
    test: {
        database: 'contatodb_test',
        username: 'root',
        password: 'root',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false
    }
}