// routes/reviews.js

const express = require("express");
const pool = require("../db");

const router = express.Router();

// Route to get a shop's reviews
router.get("/shop", async (req, res) => {
  try {
    const shopId = req.query.id

    const { rows } = await pool.query(`SELECT * FROM reviews WHERE shop_id=${shopId}`);
    res.json(rows);
  } catch (error) {
    console.error(`Error fetching shop with id ${shopId}:`, error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
