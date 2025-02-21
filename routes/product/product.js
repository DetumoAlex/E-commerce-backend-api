const express = require("express");
const { createProduct, fetchAllProduct } = require("../../controllers/product/product");

const router =express.Router()

router.post('/product' , createProduct)
router.get('/products', fetchAllProduct)

module.exports = router