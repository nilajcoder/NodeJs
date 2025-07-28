# 🚀 Node.js MongoDB Starter

This is a basic starter project that demonstrates how to connect to MongoDB using **Mongoose** in a **Node.js** environment with **ES Modules**.

---

## 🛠️ Features

- Uses `mongoose` for MongoDB connection
- Environment variable-based configuration (`.env`)
- ES6 Modules (`import/export`)


install the dependency 
npm i express
npm i dotenv
npm install mongoose

## Documentation : https://mongoosejs.com/



## 📘 MongoDB Compass Setup & Atlas Connection
🔧 Prerequisites
Internet connection

MongoDB Atlas account

MongoDB Compass installed

🪛 Step-by-Step Instructions
## 1. 📥 Install MongoDB Compass
👉 Download from:
https://www.mongodb.com/try/download/compass

Follow the installation instructions for your OS.

## 2. 🔐 Log in to MongoDB Atlas
👉 Visit:
https://account.mongodb.com/account/login

Sign in or create a new account.

## 3. ☁️ Create a Cluster
After login, click “Build a Database”

Choose a free cluster (Shared - M0) for development

Select a cloud provider and region

Click Create Cluster

## 4. 👤 Create a Database User
Go to Database Access (from left sidebar)

Click Add New Database User

Set:

Username: yourusername

Password: yourpassword

Choose role: Read and Write to any database

Click Add User

## 5. 🌐 Allow Network Access
Go to Network Access

Click Add IP Address

Choose Allow Access from Anywhere (0.0.0.0/0)

Confirm

## 6. 📋 Copy the Connection String
Go to your Cluster > Connect > Compass

Click "I have MongoDB Compass"

Copy the connection string:
mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
## 7. 💻 Connect with MongoDB Compass
Open MongoDB Compass

Paste the connection string

Replace <username> and <password> with your credentials

Click Connect

## 8. 📌 Use Connection String in Your App
In your .env file or configuration:

MONGO_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGO_URL);
✅ Done!
You’re now connected to MongoDB Atlas via Compass and your application.



