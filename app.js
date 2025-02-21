const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default test route
app.get('/', (req, res) => {
    res.send("BFHL API is Running!");
});

// Import Routes
const bfhlRoutes = require('./routes/bfhl');
app.use('/bfhl', bfhlRoutes);

module.exports = app;
