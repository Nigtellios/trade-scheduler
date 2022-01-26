const { createUser } = require("../../Functions/Users/createUser");
const { deleteUser } = require("../../Functions/Users/deleteUser");
const { getUserById } = require("../../Functions/Users/getUserById");
const { getUsers } = require("../../Functions/Users/getUsers");
const { updateUser } = require("../../Functions/Users/updateUser");

const user = {
  createUser,
  deleteUser,
  getUsers,
  getUserById,
  updateUser
}

module.exports = {
  user
}