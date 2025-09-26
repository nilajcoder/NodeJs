import 'dotenv/config'
import express from "express";
import connectDB from "./db.js";

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