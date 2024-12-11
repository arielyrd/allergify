const express = require("express");
const {
  signUp,
  login,
  logout,
  getUserInfo,
  verifyToken,
} = require("./userController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", verifyToken, logout);
router.get("/profile", verifyToken, getUserInfo);

module.exports = router;

