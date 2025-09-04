import mongoose from "mongoose";



const Productschma = new mongoose.Schema({

    productname:{
        type: String,
        required :true
    },

    description:{
        type :String,
        required :true
    },
    price :{
        type :Number,
        required :true
    }
})

const Product=mongoose.model("localproduct",Productschma)

export default Product