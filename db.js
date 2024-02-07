// db.js

// import and configure .env
require('dotenv').config()

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'boba',
  password: process.env.POSTGRES_PASS,
  port: 5432,
});

module.exports = pool;