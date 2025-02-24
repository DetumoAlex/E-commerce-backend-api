const { createUser, fetchAllUser } = require("../../service/user/user");

const signUp = async (req, res) =>{
    try {
        const newUser = await createUser(req.body)
        res.status(201).json({data: newUser, message: `user created`, status:true})
    } catch (error) {
        res.status(500).json({data:error.message, message:`user creation failed`, status:false})
    }
} 

const fetchUsers = async (req,res) => {
    try {
        const users = await fetchAllUser()
        res.status(200).json({data: users, message: `users fetched`, status:true})
    } catch (error) {
        res.status(500).json({data:error.message, message:`users fetch failed`, status:false}) 
    }
}

module.exports = {signUp,fetchUsers}