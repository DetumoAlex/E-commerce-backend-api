const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    productName:{type: String, },
    productPrice:{type:String},
    productQuantity:{String}
})

module.exports = mongoose.model("cart", cartSchema)