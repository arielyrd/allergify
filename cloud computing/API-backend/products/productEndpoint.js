const express = require("express");
const { getProductById, createProduct } = require("./productHandler");

const router = express.Router();

// GET: Ambil produk berdasarkan ID
router.get("/:product_id", getProductById);

// POST: Tambah produk baru
router.post("/", createProduct);

module.exports = router;

