import { Router } from 'express'

import {
    createUser,getAllUsers,getUserById,updateUser,deleteUser
} from "../controller/userController.js"
const route =  new Router();


route.post("/create", createUser);  //create  http://localhost:3000/user/create   use thunder client or post man
route.get("/users", getAllUsers); //get all user  http://localhost:3000/user/users
route.get("/:id", getUserById); // get user by id  http://localhost:3000/user/id 
route.post("/update/:id", updateUser); // update user by id  http://localhost:3000/user/update/id
route.post("/delete/:id", deleteUser); // delete by id  http://localhost:3000/user/delete/id 

export default route;