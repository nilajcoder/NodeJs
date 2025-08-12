import { Router } from 'express'
import {
    registerUser, login, userProfile, getAllUsers, getUserById,updateUser,deleteUser
} from "../controllers/authController.js";

import { JwtAuthCheck } from '../middleware/authMiddleware.js';
const route =  new Router();

//Create
route.post("/register",registerUser) //http://localhost:3000/api/register

//Login to Generate JWT Token
route.post("/login", login)// http://localhost:3000/api/login

//see the profile details
route.get("/profile",JwtAuthCheck,userProfile)// http://localhost:3000/api/profile

// Get all data READ
route.get("/getall",getAllUsers)// http://localhost:3000/api/getall

// Get By Id READ
route.get("/:id", getUserById); // get user by id   http://localhost:3000/api/dfdggr (id)

// Update by ID
route.post("/update/:id", updateUser); // http://localhost:3000/api/update/dvggdg(id)

//DELETE
route.post("/delete/:id", deleteUser); //  http://localhost:3000/api/delete/dvggdg(id)


export default route;
