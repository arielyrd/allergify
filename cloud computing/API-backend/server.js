const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
