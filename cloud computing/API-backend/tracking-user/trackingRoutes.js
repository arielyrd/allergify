const express = require("express");
const {
  addAllergen,
  editAllergen,
  getAllAllergens,
  deleteAllergen,
} = require("./trackingController");
// const { addAllergen, editAllergen, getAllAllergens, deleteAllergen } =
//   require("./trackingController").default;

const router = express.Router();

// Endpoint untuk menambahkan allergen
router.post("/allergens", addAllergen);

// Endpoint untuk mendapatkan semua allergen (dengan opsi filter nama)
router.get("/allergens", getAllAllergens);

// Endpoint untuk mengubah allergen berdasarkan ID
router.put("/allergens/:id", editAllergen);

// Endpoint untuk menghapus allergen berdasarkan ID
router.delete("/allergens/:id", deleteAllergen);

module.exports = router;

