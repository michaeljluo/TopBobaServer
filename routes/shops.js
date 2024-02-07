// routes/shops.js

const express = require('express');
const pool = require('../db');

const router = express.Router();

// Route to get all shops
router.get('/shops', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM shops');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching shops:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
