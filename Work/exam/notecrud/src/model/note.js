import mongoose from "mongoose";



const Noteschma = new mongoose.Schema({

    title:{
        type: String,
        required :true
    },

    content:{
        type :String,
        required :true
    },

    createdAt:{
        type :Date,
        default: Date.now
    }
})

const Note=mongoose.model("localnote",Noteschma)

export default Note