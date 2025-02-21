const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected")
    } catch (error) {
        console.error("failed", error.message)
    }
}

module.exports = connectDB