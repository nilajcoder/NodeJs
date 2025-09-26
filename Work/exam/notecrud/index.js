
import express from 'express';
import connectDB from './src/config/db.js';
import 'dotenv/config';
import noteroute from './src/route/noteroute.js';

const app = express(); // create express app instance  to use express framework
const PORT =  3000; // port number 

// Connect to MongoDB
connectDB()


app.use(express.json());//middleware to pass json data


//Route
app.use("/api",noteroute)



app.get('/', (req, res) => {   // get req to server prints Hello World
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // listening the port number
