

import * as z from "zod";
import { formatError } from "../helper/Util.js"
import { handleLogin, registerUser as registerUserService } from "../service/userService.js"
import User from "../models/userModel.js"

// validation Registration 
const UserValidationOnRegister = z.object({
  username: z.string,
  email: z.string()
    .email()
    .refine(
      (val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"),
      {
        message: "Email must be a valid @gmail.com or @yahoo.com address",
      }
    ),
  password: z.string()
});


UserValidationOnRegister.required()// if any element missing in json file it encounter


//validation Login 
const UserValidationOnLogin = z.object({
  email: z.string()
    .email()
    .refine(
      (val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"),
      {
        message: "Email must be a valid @gmail.com or @yahoo.com address",
      }
    ),
  password: z.string()
});

UserValidationOnLogin.required();//if any element missing in json file it encounter

// Login
export async function login(req, res) {
  try {
    UserValidationOnLogin.parse(req.body);
    const token = await handleLogin(req.body);

    res.status(200).json({
      status: true,
      message: "Login successfull",
      data: {
        token
      }
    })

  } catch (e) {
    if (e instanceof z.ZodError) {
      res.status(400).json({
        status: false,
        message: "Validation error",
        errors: formatError(e.issues)
      });
      return;
    }

    res.status(500).json({
      status: false,
      message: e.message
    })
  }
}

// Create 
export async function registerUser(req, res) {
  try {
    UserValidationOnLogin.parse(req.body);
    await registerUserService(req.body);
    res.json({
      status: true,
      message: 'user created successfully'
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      res.status(400).json({
        status: false,
        message: "Validation error",
        errors: formatError(e.issues)
      });
      return;
    }

    res.status(500).json({
      status: false,
      message: e.message
    })
  }
}

// Profile
export async function userProfile(req, res) {

  const user = req.user;

  res.json({
    status: true,
    message: "here is the user profile",
    user_data: user
  });
}


// Get All users
export async function getAllUsers(req, res) {

    const users = await User.find({}).exec()

    res.json({
        status: true,
        data: users

    })

}


// GET By ID
export async function getUserById(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }

        res.json({
            status: true,
            data: user
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}



// Delete User

export async function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }

        await User.findByIdAndDelete(userId);

        res.json({
            status: true,
            message: 'user deleted successfully'
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}

// Update User
export async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }

        await User.findByIdAndUpdate(userId, req.body);

        return res.json({
            status: true,
            message: 'User updated successfully'
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}