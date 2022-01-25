const { createUser } = require("../../Controllers/Users/createUser");
const { deleteUser } = require("../../Controllers/Users/deleteUser");
const { getUserById } = require("../../Controllers/Users/getUserById");
const { getUsers } = require("../../Controllers/Users/getUsers");
const { updateUser } = require("../../Controllers/Users/updateUser");

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