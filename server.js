// server.js

// import and configure .env
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

// Routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
