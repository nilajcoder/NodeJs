import { Router } from 'express'
import verifyToken from '../middleware/authMiddleware.js';
import authorizeRoles from '../middleware/roleMiddleware.js';


const router =  new Router();

//only admin can access

router.get("/admin",verifyToken ,authorizeRoles("admin"),(req,res)=>{  //http://localhost:3000/role/admin
    res.json({message:"Welcome admin"})
})


//both admin and manger can access

router.get("/manager",verifyToken,authorizeRoles("admin","manager"),(req,res)=>{    //http://localhost:3000/role/manager
    res.json({message:"Welcome Manager"})
})


//All can access 
router.get("/user",verifyToken,authorizeRoles("admin","manager","user"),(req,res)=>{   //http://localhost:3000/role/user
    res.json({message:"Welcome user"})
})

export default router