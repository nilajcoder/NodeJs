import 'dotenv/config';
import express from 'express' //we need to import express to use
import connectDB from './src/config/Dbconnect.js';
import authRotes from './src/routes/authRoute.js';




const app=express()  // create express app instance  to use express framework

// Connect to MongoDB
connectDB()


// middleware to pass the json data
app.use(express.json())

//Route
app.use("/api",authRotes)



//Start the server 

const PORT=process.env.PORT||8000  // if port is undefined the port is use the 8000 port
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}` )
})