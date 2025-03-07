const mongoose = require("mongoose");
const user = require("../../models/user/user");
const jwt =require("jsonwebtoken")
require("dotenv").config()

const createUser = async (userObj) => {
  const newUser = await user.create(userObj);
  return newUser;
};
const signIn = async (userObj) => {
  const { email } = userObj;
  console.log(userObj);

  const userData = await user.findOne({ email });
  console.log(userData);

  if (!userData) throw new Error(" Invalid credentails supplied");

  const token = await generateToken(userObj);
  const userResponse = {
    message: "User logged in succussfully",
    data: userData,
    status: true,
    token: token,
  };

  console.log(userResponse);
  return userResponse;
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "30min" });
};

const fetchAllUser = async () => {
  const users = await user.find();
  return users;
};

const findUserById = async (userId) => {
  const user1 = await user.findById(userId);
  console.log(user1);
  return user1;
};

const deleteUser = async (userId) => {
  const deletedUser = await user.findByIdAndDelete({ _id: userId });
  return deletedUser;
};
module.exports = {
  createUser,
  fetchAllUser,
  findUserById,
  deleteUser,
  generateToken,
  signIn,
};
