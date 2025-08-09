import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import * as z from "zod"; 
import {formatError} from "../helper/Util.js"


// validation purpose 
const UserValidationOnRegister = z.object({ 
  username: z
    .string()
    .email()
    .refine(
      (val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"),
      {
        message: "Email must be a valid @gmail.com or @yahoo.com address",
      }
    ),
  password: z.string(),
  role: z.string()
});


UserValidationOnRegister.required()// if any element missing in json file it encounter

export const register = async (req, res) => {

  try {

     // ✅ Validate the request body
    const parsedData = UserValidationOnRegister.parse(req.body);
   const { username, password, role } = parsedData;
    
    // const { username, password, role } = req.body;
     console.log("Before Hashing ",password)
  const hashPassword=await bcrypt.hash(password,10) //convert the password into hash 10 is salt 
  const newUser= new User({username,password:hashPassword,role})

  await newUser.save();

  res.status(201).json({
    message:`User Registred with username ${username}`
  })
    
  } catch (error) {


    
     if(error instanceof z.ZodError){
            res.status(400).json({
            status: false,
            message: "Validation error",
            errors:formatError(error.issues)

        });

        return;
    }
        
     res.status(500).json({message:"Something Went Wrong"})
    
  }
 

};

export const login = async (req, res) => {

    try {

        
    const { username, password } = req.body;

    const user=await User.findOne({username}) // in model username will be unique so usefindone to find the username

    if (!user) { //if user is not exists then throw a responce

        res.status(404).json({message:`User With username ${username} not found`}) //not found
        
    }

    const isMatch = await bcrypt.compare(password, user.password); // check the password and compare it to the user password
     
    if (!isMatch) {   //if password doest no match invalid 

         res.status(400).json({message:`Invalid Credentials`}) //invalid credential
        
    }

    const token= jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1h"}) //if password match create a jwt token
    
    res.status(200).json({token}) //print the token

        
    } catch (error) {

          res.status(500).json({message:"Something Went Wrong"})
    
        
    }

};

