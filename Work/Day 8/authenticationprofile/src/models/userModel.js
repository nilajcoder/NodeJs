import mongoose from "mongoose"
import { required } from "zod/mini";
const { Schema } = mongoose;


//model schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
});

const Role = mongoose.model("role", userSchema)

export default Role