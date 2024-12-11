const express = require("express");
const cors = require("cors");
const userAuthRoutes = require("./userLogin/userAuth");
const userTrackingRoutes = require("./trackingUser/trackingRoutes");
const productRoutes = require("./products/productEndpoint");
const scanningRoutes = require("./scanningBarcode/scanningEndpoint");

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/userLogin", userAuthRoutes);
app.use("/trackingUser", userTrackingRoutes);
app.use("/api/products", productRoutes);
app.use("/api/scanning", scanningRoutes);

app.get("/", (req, res) => {
  res.send("Response success!");
});

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
