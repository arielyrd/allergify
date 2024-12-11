const { db } = require("../database");

const addAllergen = async (req, res) => {
  const { name } = req.body;

  // Validasi input
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "Invalid allergen name! Please enter a valid allergen name.",
    });
  }

  // Cek apakah allergen sudah ada di database
  const existingAllergen = await db
    .collection("allergens")
    .where("name", "==", name.trim())
    .get();

  if (!existingAllergen.empty) {
    return res.status(400).json({ message: "Allergen already added" });
  }

  // Tambahkan allergen ke dalam Firestore
  const allergenRef = db.collection("allergens").doc();
  const allergenList = {
    id: allergenRef.id, // Menggunakan ID Firestore sebagai ID
    name: name.trim(),
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await allergenRef.set(allergenList);

  return res.status(201).json({
    message: "Allergen added successfully",
    data: allergenList,
  });
};

const editAllergen = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // Validasi input
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "Invalid allergen name! Please enter a valid allergen name.",
    });
  }

  // Cari allergen berdasarkan ID
  const allergenRef = db.collection("allergens").doc(id);
  const allergenDoc = await allergenRef.get();

  if (!allergenDoc.exists) {
    return res.status(404).json({ message: "Allergen not found" });
  }

  // Cek apakah nama baru sudah ada di database
  const isDuplicate = await db
    .collection("allergens")
    .where("name", "==", name.trim())
    .get();

  if (!isDuplicate.empty) {
    return res.status(400).json({ message: "Allergen name already exists" });
  }

  // Update allergen
  await allergenRef.update({
    name: name.trim(),
    updatedAt: new Date().toISOString(),
  });

  return res.status(200).json({
    message: "Allergen updated successfully",
    data: { id, name: name.trim() },
  });
};

const getAllAllergens = async (req, res) => {
  const { name } = req.query;

  // Menyiapkan query untuk mengambil data allergen
  let query = db.collection("allergens");

  // Filter berdasarkan nama (jika ada)
  if (name) {
    query = query
      .where("name", ">=", name)
      .where("name", "<=", name + "\uf8ff");
  }

  // Ambil data allergen dari Firestore
  const allergenSnapshot = await query.get();

  if (allergenSnapshot.empty) {
    return res.status(404).json({
      message: "No allergens found",
      data: [],
    });
  }

  const allergens = allergenSnapshot.docs.map((doc) => doc.data());

  return res.status(200).json({
    message: "Allergens fetched successfully",
    data: allergens,
  });
};

const deleteAllergen = async (req, res) => {
  const { id } = req.params;

  // Cari allergen berdasarkan ID
  const allergenRef = db.collection("allergens").doc(id);
  const allergenDoc = await allergenRef.get();

  if (!allergenDoc.exists) {
    return res.status(404).json({ message: "Allergen not found" });
  }

  // Hapus allergen
  await allergenRef.delete();

  return res.status(200).json({
    message: "Allergen deleted successfully",
    data: allergenDoc.data(),
  });
};
module.exports = { addAllergen, editAllergen, getAllAllergens, deleteAllergen };

// export default { addAllergen, editAllergen, getAllAllergens, deleteAllergen };
