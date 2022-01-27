import { Router } from "express";

import { createUser } from "../Functions/Users/createUser.js";
import { deleteUser } from "../Functions/Users/deleteUser.js";
import { getUserById } from "../Functions/Users/getUserById.js";
import { getUsers } from "../Functions/Users/getUsers.js";
import { updateUser } from "../Functions/Users/updateUser.js";

const UserRouter = Router();

// Routes
UserRouter.get('/', getUsers);
UserRouter.get('/:id', getUserById);
UserRouter.post('/', createUser);
UserRouter.put('/:id', updateUser);
UserRouter.delete('/:id', deleteUser);

export default UserRouter;