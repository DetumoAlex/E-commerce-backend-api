const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema(
    {
        firstName: {type:String,require:true},
        lastName:{type:String, require:true},
        email:{type:String, require:true, unique:true},
        phoneNumber:{type:String, require:true},
        password:{type:String, require:true},
        dateCreated:{type:Date, default:Date.now()}
    }
)


userSchema.pre("save", async function (next){
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password)
    next();
})




module.exports = mongoose.model("user",userSchema)