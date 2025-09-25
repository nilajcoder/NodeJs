import mongoose from "mongoose"



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

const User = mongoose.model("role", userSchema)

export default User