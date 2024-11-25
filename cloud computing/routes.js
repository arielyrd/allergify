const express = require('express');
const router = express.Router();

// Contoh endpoint GET
router.get('/', (req, res) => {
  res.send('Selamat datang di Allergify API!');
});

// Contoh endpoint POST
router.post('/detect', (req, res) => {
  const data = req.body;
  // Logika deteksi alergen
  res.json({ message: 'Hasil deteksi alergen', data });
});

module.exports = router;
