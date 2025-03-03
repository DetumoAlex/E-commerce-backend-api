const express = require("express");
const {
  signUp,
  fetchAllUsers,
  userById,
  deleteUserById, signInController
} = require("../../controllers/user/user");

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signInController);
router.get("/all-users", fetchAllUsers);
router.get("/user-id/:userId", userById);
router.delete("/delete-user/:userId", deleteUserById);

module.exports = router;
