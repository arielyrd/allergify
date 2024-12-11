const { db } = require("../database");

// Handler untuk mengambil produk berdasarkan ID
const getProductById = async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const productRef = db.collection("products").doc(product_id);
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
    res.status(500).json({ error: "An error occurred" });
  }
};

// Handler untuk membuat produk baru
const createProduct = async (req, res) => {
  try {
    const { product_id, name, composition, nutrition, allergens } = req.body;
    const newProduct = {
      product_id,
      name,
      composition,
      nutrition,
      allergens,
    };

    const productRef = db.collection("products").doc(product_id);
    await productRef.set(newProduct);

    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error("Failed to create product:", error);
    res
      .status(500)
      .json({ error: "Failed to create product", details: error.message });
  }
};

module.exports = { getProductById, createProduct };

