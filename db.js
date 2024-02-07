// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'boba',
  password: process.env.POSTGRES_PASS,
  port: process.env.POSTGRES_PORT,
});

module.exports = pool;