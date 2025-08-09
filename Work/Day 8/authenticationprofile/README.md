
## Question


1. Create One Model  username,email,Password For Registration Purpose

2. Create  a Controller Where Registration  Login And Profileuser for see the data
    handles the  request logic and validation using Zod

3. Create a Service Where Register User Business Logic password  Hashing are there 
      and When We Login Jwt Token Logic is There
      

4. Create A routes sec where Three Route are there One Registration ,Login, Profile
   (All Api routes )

5. Create Middleware Where Jwt Token is validate



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
    "username": "nilaj",
    "email: "nilaj@gmail.com"
    "password": "sou"
  }

2. Login Authentication Token Generation    http://localhost:3000/api/login

{
  
"username":"nilaj",
"password":"sou"
} 

pass the data json format login after login token is genereted


3. Authorization
http://localhost:3000/api/profile

Send the token in header set key authorization set value Bearer <token> 



