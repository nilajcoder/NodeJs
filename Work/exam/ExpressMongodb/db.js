
import mongoose from 'mongoose'

async function connectDB() {
  await mongoose.connect(process.env?.CONNECTION_STRING);
  console.log("Connected to MongoDB ")

}

export default connectDB