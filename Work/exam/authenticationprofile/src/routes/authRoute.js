import { Router } from 'express'
import {
    registerUser, login, userProfile
} from "../controllers/authController.js";

import { JwtAuthCheck } from '../middleware/authMiddleware.js';
const route =  new Router();

route.post("/register",registerUser) //http://localhost:3000/api/register
route.post("/login", login)// http://localhost:3000/api/login

route.get("/dashboard",JwtAuthCheck,userProfile)// http://localhost:3000/api/dashboard

export default route;
