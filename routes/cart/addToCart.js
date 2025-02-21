const express = require("express")
const { addToCart } = require("../../controllers/cart/addToCart")

const router = express.Router()

router.post('/cart', addToCart)

module.exports = router