require('dotenv').config();

const config = {
  "development": {
    "username": process.env.AWS_DB_USERNAME,
    "password": process.env.AWS_DB_PASSWORD,
    "database": process.env.AWS_DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.AWS_DB_USERNAME,
    "password": process.env.AWS_DB_PASSWORD,
    "database": process.env.AWS_DB_DATABASE,
    "host": process.env.AWS_DB_HOST,
    "dialect": "mysql"
  }
}
module.exports = config;
