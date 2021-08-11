"use strict";
require('dotenv').config();
var express = require('express');
var productRoutes = require('./routes/productRoutes');
var connectDB = require('./config/db');
connectDB();
var app = express();
app.use(express.json());
// app.get('/', (req, res) => {
//   res.json({message: 'API running...'})
// })
app.use('/api/products', productRoutes);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server running on port " + PORT); });
