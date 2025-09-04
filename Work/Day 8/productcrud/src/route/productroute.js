

import { Router } from "express";
import { CreateProduct, DeleteProduct, GetAllProduct, GetProductById, UpdateProduct } from "../controller/productcontroller.js";


const route=new Router()

//Create
route.post("/add",CreateProduct) // http://localhost:3000/api/add

//ReadALL
route.get("/getall",GetAllProduct) // http://localhost:3000/api/getall

//ReadById
route.get("/:id",GetProductById) // http://localhost:3000/api/id
 
//UpdatebyId
route.post("/update/:id",UpdateProduct) // http://localhost:3000/api/update/id

//Delete
route.post("/delete/:id", DeleteProduct) // http://localhost:3000/api/delete/id


export default route