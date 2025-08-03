# 🛠️ Mongoose CRUD API

This is a simple Node.js + Express + MongoDB API that performs full CRUD operations on products using Mongoose.

---

## Dependency Install

1. npm i express   
2. npm i mongoose      
3.  npm i dotenv    
4. npm install zod  for validation 
5. npm i bcrypt   for hashing


## Documentation

1. https://zod.dev/basics
2. https://www.npmjs.com/package/bcrypt
3. https://mongoosejs.com/docs/index.html
4. https://expressjs.com/
5. https://www.npmjs.com/package/dotenv
## 🚀 Features

- Create a User
- Read all user or a single user by ID
- Update a user by ID
- Delete a user by ID
-  Validations 

{
  "name": "hii",
  "email": "hi.mehta22yahoo.com",
  "password": "rahulPass789!"
}

{
  "status": false,
  "message": "Validation error",
  "errors": [
    {
      "email": "Invalid email address"
    }
  ]
}
- Hashing

before hash --> {
  name: 'hii',
  email: 'hi.mehta22@yahoo.com',
  password: 'rahulPass789!'
}
after hash --> {
  name: 'hii',
  email: 'hi.mehta22@yahoo.com',
  password: '$2b$10$8YUfQdzsMmtY13LzoBEz/.zZXmedcghvkuCpEMOQDKaK4ECGzBKcS'      
}

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Concepts cover Hashing and validation

Hashing is a one-way process that converts any input (like a password or file) into a fixed-length string of characters, called a hash value or digest. It is commonly used in security to store passwords safely and in data structures like hash tables for fast access.

Unlike encryption, hashing is irreversible, meaning we cannot get the original data back from the hash.

For example, in password storage, we hash the password and store the hash. During login, the entered password is hashed again and compared to the stored hash.

Validation is the process of ensuring that data is correct, complete, and in the expected format before it is saved or processed.
## 🧠 Example (User Registration Form):
We validate:

Name is not empty

Email has correct format

Password is at least 8 characters

## 🔐 Why is Hashing Used?
1. Password security – Store hashes instead of real passwords.

2. Data integrity – Check if data was modified (e.g., checksums).

3. Fast lookups – Used in hash tables for quick data retrieval.



##  Are CRUD Logic and Business Logic the Same?
No, they are not the same. CRUD and Business Logic serve different purposes in application development.


 CRUD logic is used to perform basic database operations like create, read, update, and delete. It's generic and often provided by the database layer or ORM.
 ## 🔄 CRUD Logic (Basic Database Operations):

CRUD stands for:

Create – Insert data

Read – Fetch data

Update – Modify data

Delete – Remove data

Business logic, on the other hand, defines how the application should behave according to specific rules and workflows. It is custom-written and changes based on project requirements.

✅ Examples:

A user cannot book more than 3 appointments per day

Apply 10% discount only if cart total > ₹1000

Send email after successful registration

Don’t allow users under 18 to register

✅ Business logic is specific to your app’s domain and use case.