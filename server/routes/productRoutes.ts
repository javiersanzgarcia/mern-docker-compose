import express = require('express')
const router = express.Router()

const {
  getAllProducts,
  getProductById,
} = require('../controllers/productControllers')

router.get('/', getAllProducts)
router.get('/:id', getProductById)

export default router
