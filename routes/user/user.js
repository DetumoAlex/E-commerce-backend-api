const express = require("express")
const { signUp,fetchUsers } = require("../../controllers/user/user")

const router = express.Router()

router.post('/sign-up', signUp)
router.get('/all-users', fetchUsers)

module.exports = router