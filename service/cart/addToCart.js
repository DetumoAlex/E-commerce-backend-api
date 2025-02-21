const mongoose = require("mongoose")
const cart = require("../../models/cart/cart")

const cartService = async(cartObj) =>{
    const newCart = await cart.create(cartObj)
    return newCart
}

module.exports = {cartService}