import mongoose from "mongoose"


//model schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum :["admin","manager","user"]
  },
});

const Role = mongoose.model("role", userSchema)

export default Role