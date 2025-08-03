// getting-started.js
import mongoose from 'mongoose';


async function coonectDb() {
  await mongoose.connect(process.env?.Mongourl);
  console.log("Db Connect ")

  
}

export default coonectDb