const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db_env = process.env.DB_ENV || "development";

module.exports = knex(knexConfig[db_env]);




// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// const environment = process.env.DB_ENV || 'development';

// module.exports = knex(knexConfig.development);