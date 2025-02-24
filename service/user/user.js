const mongoose = require ("mongoose")
const user = require("../../models/user/user")

const createUser = async(userObj) => {
    const newUser = await user.create(userObj)
    return newUser;
}

const fetchAllUser= async() =>{
    const users = await user.find()
    return users;
} 

// const findUserById = async() =>{
//     const user = await user.findById({_id:id})
//     return user;
// }
module.exports = {createUser, fetchAllUser}