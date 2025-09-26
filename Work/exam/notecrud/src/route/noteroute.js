

import { Router } from "express";
import { CreateNote, DeleteNote, GetAllNotte, GetNoteById, UpdateNote } from "../controller/notecontroller.js";



const route=new Router()

//Create
route.post("/add",CreateNote) // http://localhost:3000/api/add

//ReadALL
route.get("/getall",GetAllNotte) // http://localhost:3000/api/getall

//ReadById
route.get("/:id",GetNoteById) // http://localhost:3000/api/id
 
//UpdatebyId
route.post("/update/:id",UpdateNote) // http://localhost:3000/api/update/id

//Delete
route.post("/delete/:id",DeleteNote) // http://localhost:3000/api/delete/id


export default route