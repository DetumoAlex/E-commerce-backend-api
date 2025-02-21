const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName: {type:string,require:true},
        lastName:{type:string, require:true},
        email:{type:string, require:true},
        phoneNumber:{type:string, require:true},
        dateCreated:{type:Date, default:Date.now()}
    }
)

module.exports = mongoose.model("user",userSchema)