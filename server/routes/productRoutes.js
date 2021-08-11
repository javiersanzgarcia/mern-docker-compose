"use strict";
var express = require('express');
var router = express.Router();
var _a = require('../controllers/productControllers'), getAllProducts = _a.getAllProducts, getProductById = _a.getProductById;
router.get('/', getAllProducts);
router.get('/:id', getProductById);
module.exports = router;
