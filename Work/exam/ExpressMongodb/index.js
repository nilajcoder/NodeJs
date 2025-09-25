import 'dotenv/config'
import express from "express";
import connectDB from "./db.js";

const app = express();//instance of express
const PORT = 4000;

// connect db
connectDB()


app.get("/status", (req, res) => {  // /s
  res.send("Server running ");
});

app.listen(PORT, () => {
  console.log(`Server is running :${PORT}`);
});