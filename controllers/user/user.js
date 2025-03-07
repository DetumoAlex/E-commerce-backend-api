const {
  createUser,
  fetchAllUser,
  findUserById,
  signIn,
  deleteUser
} = require("../../service/user/user");

const signUp = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res
      .status(201)
      .json({ data: newUser, message: `user created`, status: true });
  } catch (error) {
    res.status(500).json({
      data: error.message,
      message: `user creation failed`,
      status: false,
    });
  }
};

const signInController = async (req, res)=>{
  try{
      const userObj = req.body;

      const userData = await signIn(userObj);
    console.log(userData)

      return res.status(200).json({data:userData, message:`signin successful`, status:true})
  }catch(error){
      res.status(500).json({data:error.message, message:`sign in failed`, status: false});
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    const users = await fetchAllUser();
    res
      .status(200)
      .json({ data: users, message: `users fetched`, status: true });
  } catch (error) {
    res.status(500).json({
      data: error.message,
      message: `users fetch failed`,
      status: false,
    });
  }
};

const userById = async (req, res) => {
  try {
    const user = await findUserById(req.params.userId);
    // const userId = User._id
    res
      .status(200)
      .json({ data: user, message: `user id fetched`, status: true });
  } catch (error) {
    res.status(500).json({
      data: error.message,
      message: `user id fetch failed`,
      status: false,
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await deleteUser(req.params.userId);
    res.status(200).json({ data: user, message: `user deleted`, status: true });
  } catch (error) {
    res.status(500).json({
      data: error.message,
      message: `user delete failed`,
      status: false,
    });
  }
};[]


module.exports = { signUp, fetchAllUsers, userById, deleteUserById,signInController };
