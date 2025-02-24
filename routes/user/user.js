const express = require("express")
const { signUp,fetchAllUsers } = require("../../controllers/user/user")

const router = express.Router()

router.post('/sign-up', signUp)
router.get('/all-users', fetchAllUsers)

module.exports = router