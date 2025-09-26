import 'dotenv/config'
import express from "express";
import connectDB from "./db.js";
import fs from "fs";


const filePath = "./file/data.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Contents:\n", data);
});

const app = express();//instance of express
const PORT = 4000;


// connect db
connectDB()


app.get("/status", (req, res) => {  // 
  res.send("Server running ");
});

// Route to return current server time
app.get("/time", (req, res) => {
  const currentTime = new Date().toISOString(); // ISO string format
  res.json({ serverTime: currentTime });
});

app.listen(PORT, () => {
  console.log(`Server is running :${PORT}`);
});