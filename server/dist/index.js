"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require("express");
var productRoutes_1 = require("./routes/productRoutes");
var db_1 = require("./config/db");
db_1.default();
var app = express();
app.use(express.json());
// app.get('/', (req, res) => {
//   res.json({message: 'API running...'})
// })
app.use('/api/products', productRoutes_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server running on port " + PORT); });
