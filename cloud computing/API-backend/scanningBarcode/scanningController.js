const { db } = require("../database");

const barcodeScan = async (req, res) => {
  try {
    const { barcode } = req.body;

    if (!barcode) {
      return res.status(400).json({ error: "Barcode is required" });
    }

    const productRef = db.collection("products").doc(barcode); // Firestore
    const doc = await productRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Product not found" });
    }

    const product = doc.data();
    const nutrition = {
      calories: product.nutrition.calories,
      fat: product.nutrition.fat,
      carbohydrates: product.nutrition.carbohydrates,
      protein: product.nutrition.protein,
      sugar: product.nutrition.sugar,
      salt: product.nutrition.salt,
    };

    const productResponse = {
      product_id: product.product_id,
      name: product.name,
      composition: product.composition,
      nutrition: nutrition,
      allergens: product.allergens,
    };

    res.json(productResponse);
  } catch (error) {
    console.error("Error fetching product:", error);
    res
      .status(500)
      .json({ error: "An error occurred while scanning the barcode" });
  }
};

const getScanHistory = async (req, res) => {
  try {
    const historyRef = db.collection("scanHistory");
    const snapshot = await historyRef.get();

    if (snapshot.empty) {
      return res.status(404).json({ message: "No history found" });
    }

    const history = [];
    snapshot.forEach((doc) => {
      history.push({ id: doc.id, ...doc.data() });
    });

    res.json({ history });
  } catch (error) {
    console.error("Error fetching history:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the history" });
  }
};

module.exports = { barcodeScan, getScanHistory };

