const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        productTitle:{type:String},
        productPrice:{type:String},
        productQuantity:{type:String}
    }
)

module.exports = mongoose.model("product", productSchema)