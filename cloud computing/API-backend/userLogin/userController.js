const jwt = require("jsonwebtoken");
const { db } = require("../database"); // Import Firestore dari database.js

// Fungsi Sign-Up
const signUp = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Cek apakah user sudah terdaftar
    const userRef = db.collection("users");
    const snapshot = await userRef.where("email", "==", email).get();

    if (!snapshot.empty) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Tambahkan user ke Firestore
    const newUser = {
      email,
      password, // Note: Jangan lupa hash password di aplikasi nyata!
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection("users").add(newUser);

    res.status(201).json({
      message: "User registered successfully",
      user: { id: docRef.id, ...newUser },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ message: "Failed to register user", error: error.message });
  }
};

// Fungsi Login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const userRef = db.collection("users");
    const snapshot = await userRef
      .where("email", "==", email)
      .where("password", "==", password)
      .get();

    if (snapshot.empty) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = snapshot.docs[0].data();
    const token = jwt.sign(
      { id: snapshot.docs[0].id, email: user.email },
      "your-secret-key",
      {
        expiresIn: "10m",
      }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Failed to log in", error: error.message });
  }
};

// Fungsi Logout
const logout = (req, res) => {
  res.json({ message: "Logout successful", user: req.user });
};

// Middleware Verifikasi Token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    console.log("No token provided");
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key");
    console.log("Decoded token:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification error:", err.message);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

// Fungsi untuk mendapatkan informasi user
const getUserInfo = (req, res) => {
  res.json({ message: "User profile", user: req.user });
};

module.exports = { signUp, login, logout, verifyToken, getUserInfo };

