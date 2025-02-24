const express = require("express")
const { signUp,fetchAllUsers, userById } = require("../../controllers/user/user")

const router = express.Router()

router.post('/sign-up', signUp)
router.get('/all-users', fetchAllUsers)
router.get('/user-id', userById)

module.exports = router