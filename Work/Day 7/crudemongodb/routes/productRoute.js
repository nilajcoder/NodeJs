import { Router } from "express";

import { listProduct ,deleteProduct,createProduct,updateProduct, getProductById } from "../controller/productController.js";

    

const router= new Router()


router.get('/',listProduct) //get all product  http://localhost:3000/products in thunder clint or  postman
router.get('/:id',getProductById) //getproduct by id  http://localhost:3000/products/id

router.post('/:id/delete',deleteProduct) //delete by id  http://localhost:3000/products/id/delete

router.post('/',createProduct) //create  http://localhost:3000/products

router.post('/:id/update',updateProduct) //update by id http://localhost:3000/products/id/update

export default router;