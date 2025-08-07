import { Router } from 'express'
import {
    register, login
} from "../controllers/authController.js"
const route =  new Router();

route.post("/register",register) //http://localhost:3000/api/register
route.post("/login", login)// http://localhost:3000/api/login

export default route;
