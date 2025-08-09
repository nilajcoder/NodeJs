## How to Create node js file

1. npm init -y
2. type-module


## Dependency needed for authentication

1. npm i express 
2. npm i jsonwebtoken//token generation
3. npm i bcrypt //hashing
4.  npm i dotenv  //To keep sensitive information like:

Database passwords

JWT secrets

API keys

Port numbers

out of your code — and instead store them in a separate, private .env file.


5.  npm i mongoose  
6.  npm install zod //validation

## Folder Strcture

AUTHENTICATION/
├── config/             # DB connection
├── controllers/        # Handles request logic
├── helper/             # Utility functions
├── middleware/         # JWT and role-based middlewares
├── models/             # Mongoose models
├── routes/             # All API route definitions
├── service/            # (Optional future logic: business/service layer)
├── .env                # Environment variables
├── index.js            # Entry point
├── package.json        
└── README.md


# Features

1. Register  http://localhost:3000/api/register

  {
    "username": "Raja@gmail.com",
    "password": "sou",
    "role": "admin"
  }

2. Login   http://localhost:3000/api/login

{
  
"username":"tuhin",
"password":"sou"
} 

3. Authentication Token Generation 
http://localhost:3000/api/login

Json format

{
  
"username":"tuhin",
"password":"sou"
}     send the post req in thunder client  create token 


4. Authorization

Send the token in header set key authorization set value Sam <token> 

