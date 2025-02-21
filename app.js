const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const bfhlRoutes = require('./routes/bfhl');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/bfhl', bfhlRoutes);

module.exports = app;
